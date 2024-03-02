import React from 'react'

const Footer = () => {
  return (
    <footer>
        <section className="bg-warning">
            <div className="container-fluid">
                <div className="row">
                    <div className="text-center">
                        <h4 className="">Join the community</h4>
                        <p>Collect loyalty points and gain valuable benefits.</p>
                        <a href="/" type="button" className="btn btn-light p-3 m-2">Become a member</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-dark text-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="text-center">
                        <h4 className="">Enjoy The Difference</h4>
                        <p>Elevate your fitness and wellness journey with Women's Best. Our athletic apparel and innovative supplements are designed to help you look,<br/> feel, and perform your best</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </section>
        <section className="m-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Women's Best</h5>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Jobs & Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Wholesale & B2B</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">UAE Stores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sitemap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Service</h5>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Shipping</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Wholesale & B2B</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Returns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Track your order</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Help Center</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">GTC</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Top Categories</h5>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Nutrition</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sportswear</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Rewards</h5>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Rewards Club</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="className">
                        <p>© 2024 <b>Dream Diver</b> | All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer