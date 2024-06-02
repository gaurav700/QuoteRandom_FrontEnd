import { useContext } from 'react';
import { ContextObj } from '../store/post-list-store';
export default function Unique() {
  const { unique } = useContext(ContextObj);
  return (
    <div className="container mt-5 app-background">
      <center>
        <h2 className='text-white'>Craft Unique Quotes in Seconds</h2>
      </center>
      {unique.map((item, index) => (
        <div className="row mt-2" key={index} style={{ paddingTop: "50px" }}>
          {index % 2 === 0 ? (
            <>
              <div className="col">
                <img src={item.img} alt="" />
              </div>
              <div className="col d-flex align-items-center">
                <div className="card no-border">
                  <div className="card-body app-back text-white">
                    <h4>{item.title}</h4>
                    <p className="card-text">{item.body}</p>
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3 button-color">Generate Quote</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col d-flex align-items-center">
                <div className="card no-border">
                  <div className="card-body app-back text-white">
                    <h4>{item.title}</h4>
                    <p className="card-text">{item.body}</p>
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3 button-color">Generate Quote</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <img src={item.img} alt="" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
