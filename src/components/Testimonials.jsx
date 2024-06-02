import { useContext } from 'react';
import { ContextObj } from '../store/post-list-store';
export default function Testimonials() {
  const { imagearray, testmonials } = useContext(ContextObj);
  return (
    <>
      <div className="testimonial" style={{ paddingTop: "80px" }}>
        <center>
          <h2>Used by Brands and creater</h2>
        </center>

        <div className="container">
          <div className="row mt-5">
            {
              imagearray.map((image, index) => (
                <div className="col" key={index}>
                  <img src={image} alt="" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='testimonial'>
        <div className="container row-image ">
          <div className="row">
            {
              testmonials.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 row-margin-test" key={index}>
                  <div className="card card-test" style={{ backgroundColor: "#272928" }}>
                    <div className="image-container">
                      <img
                        className="img-fluid rounded-image"
                        src={item.img}
                        alt="T-shirt designer"
                      />
                    </div>
                    <div className="card-body text-center mt-5 text-white">
                      <h6>{item.position}</h6>
                      <h4>{item.name}</h4>
                      <p>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div >
      </div>
    </>
  )
}
