import React, { useContext } from 'react';
import { ContextObj } from '../store/post-list-store';
export default function Feature() {
  const { feature } = useContext(ContextObj);
  return (
    <div className="container mt-5 app-background">
      <center>
        <h2 className='text-white'>Generate Quotes in 3 Simple Steps</h2></center>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2" style={{ paddingTop: "30px" }}>
        {
          feature.map((item, index) => (
            <div className="col" key={index}>
              <div className="card no-border">
                <img src={item.img} alt="" width="100%" height="225" className='app-back' />
                <div className="card-body text-white app-back">
                  <h4>{item.title}</h4>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}