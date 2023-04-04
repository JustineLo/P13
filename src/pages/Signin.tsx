import logo from '../assets/img/argentBankLogo.png'
import { FaUserCircle } from 'react-icons/fa'

function Signin() {

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
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
            <button className="sign-in-button">Sign In</button>
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
  