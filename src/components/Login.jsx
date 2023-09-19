import login_bg from "../assets/login_background.jpg";

const Login = () => {
  return (
    <div className='login-container'>
        <div className="login-form">
            <span>Login</span>
            <form action="#">
                <input type="text" name="email" placeholder='Email Address' />
                <input type="text" name="password" placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
        <div className="login-image">
            <img src={login_bg} alt="" />
        </div>
    </div>
  )
}

export default Login