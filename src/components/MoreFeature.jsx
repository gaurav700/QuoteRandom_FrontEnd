import { useContext } from 'react';
import { ContextObj } from '../store/post-list-store';
export default function MoreFeature() {
  const { morefeature } = useContext(ContextObj);
  return (
    <div className="container app-background text-white" id="icon-grid" style={{ paddingTop: "70px", paddingBottom: "70px" }}>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
        {morefeature.map((item, index) => (
          <div key={index} className="col d-flex align-items-start">
            <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4">{item.title}</h3>
              <p >{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
