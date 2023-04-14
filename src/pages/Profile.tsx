import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, signOut } from '../state/store';
import { useEffect } from 'react';
import axios from 'axios';
import { getProfile } from '../api';

const API_BASE_URL = 'http://localhost:3001/api/v1';

function Profile() {
  const profile = useSelector((state: any) => state.auth.profile);
  const token = useSelector((state: any) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !profile) {
      navigate('/signin')
    }
    async function fetchProfile() {
      const fetchedProfile = await getProfile(token);
      dispatch(setProfile(fetchedProfile.body));
      
    }
    fetchProfile();
  }, []);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  if (!profile) {
    return (
      <p>Loading profile...</p>
    );
  }

  return (
    <div className="profile-page">
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
            <img className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <Link className="main-nav-item" to="/profile">
            <FaUserCircle className="sign-in-icon" />
            {profile.firstName}
          </Link>
          <Link className="main-nav-item" to="/" onClick={handleSignOut}>
            <FaSignOutAlt />
            Sign Out
          </Link>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{profile.firstName} {profile.lastName}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  )
}

export default Profile
