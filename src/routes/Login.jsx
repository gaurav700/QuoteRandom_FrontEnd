import { useDispatch } from 'react-redux';
import logo from '../assets/logo.png';
import { loginActions } from '../store/login-signup-slice';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React , { useEffect } from 'react';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    if (userId) {
      dispatch(loginActions.loginSuccess(userId));
      alert("You are already logged in!")
      navigate('/niche');
    }
  }, [dispatch, navigate]);

  const handleLogin = () => {
    dispatch(loginActions.login());
  }

  async function handleLoginform(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await dataSubmit(data);
  }

  async function dataSubmit(data) {
    const response = await fetch('https://quote-mnpk.onrender.com/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (result.message == 'Login successful') {
      alert("You are login successfully.");
      localStorage.setItem('userId', result.userId);
      dispatch(loginActions.loginSuccess(result.userId));
      navigate("/niche");
    } else if (result.message == 'Incorrect password.') {
      alert("Password you entered is Incorrect.")
    } else if (result.message == 'Incorrect email.') {
      alert("Email you entered is incorrect.")
    }
  }


  return (
    <>
      <div className="modal show fade modal-sheet position-static bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="container">

              <div className="modal-header p-5 pb-4 border-bottom-0 d-flex justify-content-center align-items-center">
                <img src={logo} alt="" width="100px" />
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleLogin}></button>
              </div>

              <h1 className="fw-bold mb-3 fs-2 text-center">Welcome to QuoteRandom</h1>
              <p className="text-center">Sign in below</p>

              <div className="row pe-5 ps-5">
                <div className="col">
                  <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3 d-flex align-items-center justify-content-center" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)"><path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"></path><path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"></path><path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"></path><path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"></path></g></svg>
                    <span className="ms-2">Google</span>
                  </button>
                </div>
                <div className="col">
                  <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3 d-flex align-items-center justify-content-center" type="submit">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="white"></rect><path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="#157DC3"></path></svg>
                    <span className="ms-2">Facebook</span>
                  </button>
                </div>
              </div>


              <div className="container container-text mb-3">
                <hr className="horizontal-line" />
                <span className="or-text">OR</span>
                <hr className="horizontal-line" />
              </div>


              <div className="modal-body p-5 pt-0">

                <Form onSubmit={handleLoginform} >
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" name='email' />
                    <label htmlFor="floatingInput" >Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" name='password' />
                    <label htmlFor="floatingPassword" >Password</label>
                  </div>
                  <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" style={{ backgroundColor: "rgb(85, 212, 193)" }}>Sign In</button>
                </Form>

                <p className="text-center" style={{ color: "rgb(85, 212, 193)" }}>Forgot your password?</p>
                <h6 className="text-center">Don't have an account yet?</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

