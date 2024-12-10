import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'


function NavOrder() {
  const {totalUniqueItems} =useCart();
  return (
    <div>
        <div>
        <div class="container-fluid position-relative p-0">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <Link to="" class="navbar-brand p-0">
              <h1 class="text-primary m-0">
                <i class="fa fa-utensils me-3"></i>RestOo
              </h1>
            </Link>
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
                <Link to="/" className="nav-item nav-link ">
                  Home
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    MEALS
                  </a>
                  <div className="dropdown-menu m-0">
                    <Link to="/break" className="dropdown-item">
                      BREAKFAST
                    </Link>
                    <Link to="/lunch" className="dropdown-item">
                      LUNCH
                    </Link>
                    <Link to="/dinner" className="dropdown-item">
                      DINNER
                    </Link>
                  </div>
                </div>
                <Link to="/service" className="nav-item nav-link">
                  Service
                </Link>
                <Link to="/about" className="nav-item nav-link ">
                  About
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <Link to="/order" className=" py-sm-3 px-sm-5 me-3 animated slideInLeft ">Your Order <i class="fa-solid fa-utensils fa-bounce  fa-2xl p-3" style={{color:"#fff"}}></i></Link>
            </div>
          </nav>

          <div class="container-fluid py-5 bg-dark hero-header mb-5">
            <div class="container text-center my-5 pt-5 pb-4">
              <h1 class="display-3 text-white mb-3 animated slideInDown luckiest-guy-regular">
                HAPPY MEAL
              </h1>
              <br/>
              <Link to="/" className='btn btn-outline-light btn-block'> HOME</Link>
              <Link to="/break" className='btn btn-outline-light  mt-3'> Break Fast</Link>
            <Link to="/lunch" className='btn btn-outline-light mx-5 mt-3'> Lunch</Link>
            <Link to="/dinner" className='btn btn-outline-light  mt-3'> Dinner</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavOrder