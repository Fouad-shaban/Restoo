import React from "react";

import { useCart } from 'react-use-cart'

function NavContact() {
  const {totalUniqueItems} =useCart();
  return (
    <div>
      <div class="container-xxl position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href="" class="navbar-brand p-0">
            <h1 class="text-primary m-0">
              <i class="fa fa-utensils me-3"></i>RestOo
            </h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <a href="/" className="nav-item nav-link ">
                Home
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  MEALS
                </a>
                <div className="dropdown-menu m-0">
                <a href="/break" className="dropdown-item">
                    BREAKFAST
                  </a>
                  <a href="/lunch" className="dropdown-item">
                    LUNCH
                  </a>
                  <a href="/dinner" className="dropdown-item">
                    DINNER
                  </a>
                </div>
              </div>
              <a href="/service" className="nav-item nav-link">
                Service
              </a>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/contact" className="nav-item nav-link active">
                Contact
              </a>
            </div>
            <a href="/order" className=" py-sm-3 px-sm-5 me-3 animated slideInLeft ">Your Order  ({totalUniqueItems})  <i class="fa-solid fa-utensils fa-bounce  fa-2xl p-3" style={{color:"#fff"}}></i></a>
          </div>
        </nav>

        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown luckiest-guy-regular">
              Contact Us
            </h1>
            <a href="/" className='btn btn-outline-light btn-block'> HOME</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavContact;
