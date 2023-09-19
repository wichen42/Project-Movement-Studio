class ApplicationController < ActionController::API
    before_action :snake_case_params, :attach_authenticity_token

    include ActionController::RequsertForgeryProtection

    rescue_from StandardError, with: :unhandled_error

    rescue_from ActionController::InvalidAuthenticityToken,
        with: :invalid_authenticity_token

    protect_from_forgery with: :exception

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def current_user_admin?
        current_user.admin
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        @current_user = nil
    end

    def require_logged_in
        unless current_user
            render json: { errors: ["You must be logged in to perform this action"] }, status: 401
        end
    end

    def require_admin
        unless current_user_admin?
            render json: { errors: ["You must be an admin to perform this action"] }, status: 401
        end
    end

    

    private

    def unhandled_error(error)
        if request.accepts.first.html?
            raise error
        else
            @message = "#{error.class} - #{error.message}"
            @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
            render 'api/errors/internal_server_error',
                status: :internal_server_error
                        
            logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
        end
    end

    def invalid_authenticity_token
        render json: { message: 'Invalid authenticity token, have you checked if you might have been forged? ' }, 
            status: :unprocessable_entity
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = form_authenticity_token(session)
    end

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end
end
