import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { loginActions } from '../store/login-signup-slice';
import { useEffect } from 'react';
import Under from './Under';
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.loginSignup)

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    if (userId) {
      dispatch(loginActions.loginSuccess(userId));
    }
  }, [dispatch, navigate]);

  const handleLogin = () => {
    dispatch(loginActions.login());
  }
  const handleSignup = () => {
    dispatch(loginActions.signup());
  }
  const handleHome = () => {
    dispatch(loginActions.home());
  }
  const handleLogout = async () => {
    try {
      const response = await fetch('https://quote-mnpk.onrender.com/logout', {
        method: 'POST',
        credentials: 'include',
      });
      const result = await response.json();
      console.log(result);
      if (result.message === 'Logout successful') {
        localStorage.removeItem('userId');
        dispatch(loginActions.homeLogout());
        alert("You are logout successfully");
        navigate('/');
      } else {
        alert('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Logout failed');
    }
  };

  return (
    <header className="p-3 bg-white text-black">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
            <img src={logo} alt="" width="70" height="30" className="bi me-2" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" smooth={true} duration={500} className="nav-link px-2 text-black" onClick={handleHome}>Home</Link></li>
          </ul>
          <Under />
          {
            login ?
              <>
                <div className="text-end">
                  <Link to="/"><button type="button" className="btn btn-warning me-2" onClick={handleLogout}>Logout</button></Link>
                </div>
              </> :
              <>
                <div className="text-end">
                  <Link to="/login"><button type="button" className="btn btn-outline-dark me-2" onClick={handleLogin}>Login</button></Link>
                  <Link to="/signup"><button type="button" className="btn btn-warning me-2" onClick={handleSignup}>SignUp</button></Link>
                </div>
              </>
          }


        </div>
      </div>
    </header>
  )
}