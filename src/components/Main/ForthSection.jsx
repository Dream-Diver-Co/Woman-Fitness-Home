import React from 'react'
import product9 from '../../assets/images/product9.webp'
const ForthSection = () => {
  return (
    <section>
        <div className="container">
          <div className="row">
            <div className="position-relative col " style={{width: "25rem"}}>
              <img src={product9} style={{height: "25rem;"}} className=" card-img-top rounded-2" alt="..." />
              <div className="position-absolute top-50 start-5">
                <h5>Sports & Body-Shaping Supplements <span><i className="fa fa-thin fa-arrow-right"></i></span></h5>
              </div>
              </div>
            <div className="position-relative col " style={{width: "25rem"}}>
              <img src={product9} style={{height: "25rem;"}} className=" card-img-top rounded-2" alt="..." />
              <div className="position-absolute top-50 start-5">
                <h5>Sports & Body-Shaping Supplements <span><i className="fa fa-thin fa-arrow-right"></i></span></h5>
              </div>
              </div>
            <div className="position-relative col " style={{width: "25rem"}}>
              <img src={product9} style={{height: "25rem;"}} className=" card-img-top rounded-2" alt="..." />
              <div className="position-absolute top-50 start-5">
                <h5>Sports & Body-Shaping Supplements <span><i className="fa fa-thin fa-arrow-right"></i></span></h5>
              </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default ForthSection