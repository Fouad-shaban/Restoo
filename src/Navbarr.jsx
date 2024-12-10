import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'



function Navbarr() {
    const {totalUniqueItems} =useCart();
  return (
    <div>
        <div className="container-xxl position-relative p-0 caveat-uniquifier">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>RestOo</h1>
                    
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">MEALS</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/break" className="dropdown-item">BREAKFAST</Link>
                                <Link to="/lunch" className="dropdown-item">LUNCH</Link>
                                <Link to="/dinner" className="dropdown-item">DINNER</Link>
                            </div>
                        </div>
                        <Link to="/service" className="nav-item nav-link">Service</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="/order" className=" py-sm-3 px-sm-5 me-3 animated slideInLeft "> Your Order  ({totalUniqueItems})  <i class="fa-solid fa-utensils fa-bounce  fa-2xl p-3" style={{color:"#fff"}}></i></Link>
                </div>
            </nav>

            <div className="container-fluid-xxl py-5 bg-dark hero-header mb-5 ">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft luckiest-guy-regular">Enjoy Our<br/>Delicious Meal</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Link to="/order" className=" py-sm-3 px-sm-5 me-3 animated slideInLeft caveat-uniquifier " >Your Order  ({totalUniqueItems}) <i class="fa-solid fa-utensils fa-bounce  fa-2xl p-3" style={{color:"#fff"}}></i></Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src="img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbarr