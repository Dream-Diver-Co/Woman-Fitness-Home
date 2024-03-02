import React from 'react'
import product3 from '../../assets/images/product3.webp'
const ThirdSection = () => {
  return (
    <section>
        <div className="container">
          <div className="row">
            <h3>New releases</h3>
            <p>Explore our new product creations.</p>

            <div className="col justify-content-center">
              <div>
                <a
                  href="/"
                  className="rounded link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                >
                  <div className="card-item" style={{width: "18rem"}}>
                    <img
                      src={product3}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 className="card-title fs-5">BCAA Aminos</h3>
                      <p className="card-text">Amino acids for muscle growth.</p>
                      <div>
                        <span>$300</span>
                        <span><del>$500</del></span>
                        <div>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span
                            ><i className="fa fa-duotone fa-star-half-stroke"></i
                          ></span>
                          <span>6,100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col justify-content-center">
              <div>
                <a
                  href="/"
                  className="rounded link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                >
                  <div className="card-item" style={{width: "18rem"}}>
                    <img
                      src={product3}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 className="card-title fs-5">BCAA Aminos</h3>
                      <p className="card-text">Amino acids for muscle growth.</p>
                      <div>
                        <span>$300</span>
                        <span><del>$500</del></span>
                        <div>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span
                            ><i className="fa fa-duotone fa-star-half-stroke"></i
                          ></span>
                          <span>6,100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col justify-content-center">
              <div>
                <a
                  href="/"
                  className="rounded link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                >
                  <div className="card-item" style={{width: "18rem"}}>
                    <img
                      src={product3}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 className="card-title fs-5">BCAA Aminos</h3>
                      <p className="card-text">Amino acids for muscle growth.</p>
                      <div>
                        <span>$300</span>
                        <span><del>$500</del></span>
                        <div>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span><i className="fa fa-duotone fa-star"></i></span>
                          <span
                            ><i className="fa fa-duotone fa-star-half-stroke"></i
                          ></span>
                          <span>6,100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ThirdSection