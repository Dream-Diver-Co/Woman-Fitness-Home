import React from 'react'
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import 'bootstrap/dist/js/bootstrap'
const Header = () => {
  return (
    <div>
      <header>
      <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <div>
            <button
              class="navbar-toggler custom-btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <FaSearch className='m-2 fs-3'/>
          </div>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Sportswear
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" href="#"> Shop all Products</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> New Releases</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> Best Sellers </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> Bundles</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> Shop by Category </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <CiHeart className='m-2 fs-2 '/>
            <FaShoppingBag className='m-2 fs-3'/>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header