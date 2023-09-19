class ApplicationController < ActionController::API
    before_action :snake_case_params, :attach_authenticity_token

    include ActionController::RequsertForgeryProtection

    protect_from_forgery with: :exception


    private

    def attach_authenticity_token
        headers['X-CSRF-Token'] = form_authenticity_token(session)
    end

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end
end
