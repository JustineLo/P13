import { Link } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, signOut, updateProfile } from '../state/store';
import { useEffect } from 'react';
import { getProfile } from '../api';
import Header from '../components/Header';
import Account from '../components/Account';

function Profile() {
  const profile = useSelector((state: AppState) => state.auth.profile);
  const storedToken = localStorage.getItem('token') || '';
  const dispatch = useDispatch();
  

  useEffect(() => {
    async function fetchProfile() {
      try {
        const fetchedProfile = await getProfile(storedToken);
        dispatch(updateProfile(fetchedProfile.body));
      } catch (err) {
      }
    }
    fetchProfile();
  }, [storedToken, dispatch]);
  

  const handleSignOut = () => {
    dispatch(signOut());
    localStorage.removeItem('token');
  };

  if (!profile) {
    return (
      <p>Loading profile...</p>
    );
  }


  return (
    <div className="profile-page">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
            <img className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
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
        <Header />
        <h2 className="sr-only">Accounts</h2>
        <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance' />
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  )
}

export default Profile
