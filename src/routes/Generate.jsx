import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../components/Loader";
import { nicheActions } from '../store/niche-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

export default function Generate() {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const word = useSelector((store) => store.niche.word);

  const apiKey = 'xRNLgqyiF1n1ewAt6kv7QA==TkaxrAt6xpmM3B2E';

  const fetchData = async (count, dataSoFar = []) => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${word}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      });
      const newData = await response.json();
      const newDataSoFar = [...dataSoFar, ...newData];

      if (count > 1) {
        return fetchData(count - 1, newDataSoFar);
      } else {
        setQuotes(newDataSoFar);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (word) {
      setLoading(true);
      fetchData(6);
      dispatch(nicheActions.afterNiche());
    }
  }, [word]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Quote copied to clipboard:', text);
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container text-white mt-5 pb-5" style={{ marginLeft: "20%", marginRight: "20%", width: "60%" }}>
          <h3>Copy Your Quotes</h3>
          <p>Copy quotes to clipboard</p>

          <div className="row">
            <div className="col-12 col-md-3 mb-3">
              <span style={{ color: "aquamarine" }}>
                <span className="niche-circle font-weight-bold">1</span> &nbsp; Pick Your niche &nbsp; &nbsp; &nbsp;
              </span>
            </div>
            <div className="col-12 col-md-3 mb-3">
              <span>
                <span className="niche-circle">2</span> &nbsp; Copy your quotes
              </span>
            </div>
          </div>

          <div className="niche-item2 mt-5">
            {quotes.map((item, index) => (
              <div className="niche2 d-flex justify-content-center align-items-center" key={index} style={{ flexDirection: "column", marginBottom: "1rem" }}>
                <div style={{ textAlign: "center", maxWidth: "100%" }}>
                  <h5>{item.quote}</h5>
                  <p>"{item.author}"</p>
                  <FontAwesomeIcon
                    icon={faClipboard}
                    className="clipboard-icon"
                    onClick={() => copyToClipboard(item.quote)}
                    title="Copy to clipboard"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
