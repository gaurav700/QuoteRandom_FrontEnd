import React, { useContext, useState } from "react";
import { ContextObj } from "../store/post-list-store";
import { useDispatch, useSelector } from "react-redux";
import { nicheActions } from "../store/niche-slice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Niche() {
  const { wordsAndImages } = useContext(ContextObj);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [keyIndex, setKeyIndex] = useState(null);
  const dispatch = useDispatch();

  const handleNiche = (index, word) => {
    setSelectedIdx(index === selectedIdx ? null : index);
    setKeyIndex(word === keyIndex ? null : word);
  };

  const handleGen = () => {
    if (keyIndex == null) {
      alert("Please select a niche");
    } else {
      dispatch(nicheActions.nicheClick(keyIndex));
    }
  };

  const { login, loginUserId } = useSelector((state) => state.loginSignup)

  const handleSubmitNiche = async () => {
    if (keyIndex == null) {
      alert("please select a niche");
    } else {
      const response = await fetch('https://quote-mnpk.onrender.com/niche', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyIndex, loginUserId
        })
      });
      const result = await response.json();
      if (result.message == 'Niche added successfully') {
        alert("Niche added successfully! You can Logout Now");
      }
    }
  }



  return (
    <div className="container text-white mt-5 pb-5" style={{ marginLeft: "20%", marginRight: "20%", width: "60%" }}>
      <h3>Pick a Niche</h3>
      <p>Define what your quote is about by picking a niche.</p>

      <div className="row">
        <div className="col-12 col-md-3 mb-3">
          <span style={{ color: "aquamarine" }}>
            <span className="niche-circle font-weight-bold">1</span> &nbsp; Pick Your niche &nbsp; &nbsp; &nbsp;
          </span>
        </div>

        {
          login ?
            <>
              <div className="col-12 col-md-6 mb-3">
                <span>
                  <span className="niche-circle">2</span> &nbsp; Click on Submit and you will get a quote everyday morning 5:00AM
                </span>
              </div>
              <div className="col-12 col-md-3">
                <button
                  className="btn btn-primary w-100"
                  style={{ backgroundColor: "rgb(85, 212, 193)" }} onClick={handleSubmitNiche}>
                  Submit
                </button>
              </div>
            </>
            :
            <>
              <div className="col-12 col-md-3 mb-3">
                <span>
                  <span className="niche-circle">2</span> &nbsp; Copy your quotes
                </span>
              </div>
              <div className="col-12 col-md-3">
                {keyIndex != null ? (
                  <Link to="/generate">
                    <button
                      className="btn btn-primary w-100"
                      style={{ backgroundColor: "rgb(85, 212, 193)" }}
                      onClick={handleGen}
                    >
                      Generate Quote
                    </button>
                  </Link>
                ) : (
                  <button
                    className="btn btn-primary w-100"
                    style={{ backgroundColor: "rgb(85, 212, 193)" }}
                    onClick={handleGen}
                  >
                    Generate Quote
                  </button>
                )}
              </div>
            </>
        }

      </div>



      <div className="niche-item mt-5">
        {wordsAndImages.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNiche(index, item.word)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "108px",
              width: "100%",
              textAlign: "center",
              borderWidth: "1px",
              borderStyle: "solid",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: selectedIdx === index ? "#89E7D9" : "white",
              color: "black",
            }}
          >
            <div>
              <center className="pt-4">
                <img src={item.img} alt="" height="60px" width="60px" />
              </center>
              <p className="text-black">{item.word}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
