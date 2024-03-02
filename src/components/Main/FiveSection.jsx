import React from 'react'
import ads from '../../assets/images/ads.webp'
const FiveSection = () => {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={ads} alt=""/>
                </div>
                <div className="col justify-content-center m-auto">
                    <h4>Functional Foods & Smart Protein Bars</h4>
                    <p>Snacking doesn't have to be a guilty pleasure. Snack smart. Our healthy smart range of high-in-protein, nutrient-packed snacks will power you through the day anytime, anywhere.</p>
                    <a href="/" type="button" className="btn btn-dark"> Shop now </a>
                </div>
            </div>

        </div>
      </section>
  )
}

export default FiveSection