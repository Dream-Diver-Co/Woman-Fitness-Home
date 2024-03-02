import React from 'react'
import medilbg from '../../assets/images/medilbg.webp'
const SecondSection = () => {
  return (
    <section>
        <div className="container-fluid">
          <div className="row">
            <div className="position-relative">
              <img src={medilbg} alt="" />

              <div className="position-absolute top-50 start-4">
                <p>Now available</p>
                <h3>Complete Vitamin C</h3>
                <h6>
                  100 % stomach-friendly and highly bioavailable vitamin C from
                  PureWay-C®.
                  <br />
                  It supports the immune system, promotes collagen formation,
                  and reduces fatigue.
                </h6>
                <a href="/" type="button" className="btn btn-dark"> Shop now </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SecondSection