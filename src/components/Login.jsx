import login_bg from "../assets/login_background.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from 'react-icons';
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='login-container'>
            <div className="login-form">
                <span>Login</span>
                <form action="#">
                    <input type="text" name="email" placeholder='Email Address' />
                    <div>
                        <input type={showPassword ? `text` :  `password`} name="password" placeholder='Password' />
                        <IconContext.Provider value={{color: "rgb(51,51,51)"}}>
                            <div className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? 
                                    <AiOutlineEye /> : 
                                    <AiOutlineEyeInvisible />
                                }
                            </div>
                        </IconContext.Provider>
                    </div>
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