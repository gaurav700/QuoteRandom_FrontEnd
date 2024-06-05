import React from 'react';
import image01 from '../assets/01.png';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/login-signup-slice';
export default function Hero() {
  const dispatch = useDispatch();
  const handleGenerate = () => {
    dispatch(loginActions.generate());
  }
  return (
    <>
      <div className="px-4 py-5 my-5 text-center app-background text-white">
        <h1 className="display-5 fw-bold ">Generate Merchandise Quotes That Sell</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-white">Struggling to find the right words for your designs? Use the Kittl AI Quote Generator to create unique quotes suited for any niche — from T-shirts and posters to cards and more, all in a matter of seconds.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/niche">
              <button type="button" className="btn btn-primary button-color btn-lg px-4 gap-3" onClick={handleGenerate}>Generate Quote</button></Link>

          </div>
        </div>
      </div>
      <div>
        <img src={image01} className="img-01" alt="Description of image" />
      </div>
    </>
  )
}