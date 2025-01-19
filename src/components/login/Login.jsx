import React, {useState} from 'react';
import './Login.css';
import { toast } from 'react-toastify';

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ''
    });

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
    }
    const handleRegister = (e) => {
        e.preventDefault();
        if (!avatar.file) {
            return toast.error('Please upload an image');
        }
        const formData = new FormData();
        formData.append('avatar', avatar.file);
        formData.append('username', e.target.username.value);
        formData.append('email', e.target.email.value);
        formData.append('password', e.target.password.value);
        console.log(formData);
    }
    return (
        <div className='login'>
            <div className="item">
                <h2>Welcome back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name='email' />
                    <input type="password" placeholder="Password" name='password' />
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create An Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file" >
                        <img src={avatar.url || './avatar.png'} alt="" />
                        Upload an image</label>
                    <input type="file" id='file' style={{display: 'none'}} onChange={handleAvatar}/>
                    <input type="text" placeholder="Username" name='username' />
                    <input type="text" placeholder="Email" name='email' />
                    <input type="password" placeholder="Password" name='password' />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;