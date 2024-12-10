import React from 'react'


function RMenu() {
  return (
    <div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                </div>
                    <br/>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a href="/break" className="d-flex align-items-center text-start mx-3 ms-0 pb-3 "  >
                                <i className="fa fa-coffee fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/lunch" className="d-flex align-items-center text-start mx-3 pb-3"  >
                                <i className="fa fa-hamburger fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0">Launch</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/dinner" className="d-flex align-items-center text-start mx-3 me-0 pb-3" >
                                <i className="fa fa-utensils fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default RMenu