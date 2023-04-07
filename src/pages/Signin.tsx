import { useState } from 'react';
import logo from '../assets/img/argentBankLogo.png'
import { FaUserCircle } from 'react-icons/fa'
import axios from 'axios';
import { useDispatch } from 'react-redux';

const API_BASE_URL = 'http://localhost:3001/api/v1';

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_BASE_URL}/user/login`, {
    email,
    password,
  }).then((response) => {
    return response.data;
  }).
  catch((err) => {
    console.log('Error: ', err);
    });
    return response;
}

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    async function onSubmit(e: React.FormEvent): Promise<void> {
        e.preventDefault();
        try {
            const response = await login(username, password);
            dispatch({type: 'SIGNIN', payload: response.body.token});
        } catch (err) {
            console.log('Error: ', err);
        } 
    };

    return (
      <div className='sign-in-page'>
        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
                <img className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                    />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <FaUserCircle className="sign-in-icon" />
                    Sign In
                </a>
            </div>
        </nav>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FaUserCircle className="sign-in-icon" />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" onClick={onSubmit}>Sign In</button>
                </form>
            </section>
        </main>
        <footer className="footer">
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
      </div>
    )
  }
  
  export default Signin
  