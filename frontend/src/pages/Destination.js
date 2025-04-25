import React from 'react'
import dest1 from "../img/destination-1.jpg"
import dest2 from "../img/destination-2.jpg"
import dest3 from "../img/destination-3.jpg"
import dest4 from "../img/destination-4.jpg"
import dest5 from "../img/destination-5.jpg"
import dest6 from "../img/destination-6.jpg"
import dest7 from "../img/destination-7.jpg"
import dest8 from "../img/destination-8.jpg"
import dest9 from "../img/destination-9.jpg"
function Destination() {
  return (
    <div>
       {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Travel Destination</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Destination</li>
      </ol>
    </div>
  </div>
  {/* Header End */}

{/* Destination Start */}
<div className="container-fluid destination py-5">
    <div className="container py-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
        <h5 className="section-title px-3">Destination</h5>
        <h1 className="mb-0">Popular Destination</h1>
      </div>
      <div className="tab-class text-center">
        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
              data-bs-toggle="pill"
              href="#tab-1"
            >
              <span className="text-dark" style={{ width: 150 }}>
                All
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#tab-2"
            >
              <span className="text-dark" style={{ width: 150 }}>
                USA
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#tab-3"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Canada
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#tab-4"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Europe
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#tab-5"
            >
              <span className="text-dark" style={{ width: 150 }}>
                China
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#tab-6"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Singapore
              </span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-xl-8">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src={dest1}
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">New York City</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href={dest1}
                          data-lightbox="destination-1"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src={dest2}
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">Las vegas</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href={dest2}
                          data-lightbox="destination-2"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src={dest7}
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href={dest7}
                          data-lightbox="destination-7"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src={dest8}
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href={dest8}
                          data-lightbox="destination-8"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="destination-img h-100">
                  <img
                    className="img-fluid rounded w-100 h-100"
                    src={dest9}
                    style={{ objectFit: "cover", minHeight: 300 }}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest9}
                      data-lightbox="destination-4"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest4}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest4}
                      data-lightbox="destination-4"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest5}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest5}
                      data-lightbox="destination-5"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest6}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest6}
                      data-lightbox="destination-6"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest5}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest5}
                      data-lightbox="destination-5"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest6}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest6}
                      data-lightbox="destination-6"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest5}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest5}
                      data-lightbox="destination-5"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest6}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest6}
                      data-lightbox="destination-6"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-4" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest5}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest5}
                      data-lightbox="destination-5"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest6}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest6}
                      data-lightbox="destination-6"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-5" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest5}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest5}
                      data-lightbox="destination-5"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest6}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest6}
                      data-lightbox="destination-6"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-6" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest5}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest5}
                      data-lightbox="destination-5"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="destination-img">
                  <img
                    className="img-fluid rounded w-100"
                    src={dest6}
                    alt=""
                  />
                  <div className="destination-overlay p-4">
                    <a
                      href="#"
                      className="btn btn-primary text-white rounded-pill border py-2 px-3"
                    >
                      20 Photos
                    </a>
                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                  <div className="search-icon">
                    <a
                      href={dest6}
                      data-lightbox="destination-6"
                    >
                      <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Destination End */}

  {/* Subscribe Start */}
  <div className="container-fluid subscribe py-5">
    <div className="container text-center py-5">
      <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
        <h5 className="subscribe-title px-3">Subscribe</h5>
        <h1 className="text-white mb-4">Our Newsletter</h1>
        <p className="text-white mb-5">
        Unlock the world's wonders with our exclusive tour packages. Dive into
                    captivating destinations, where every moment is a new adventure waiting to be discovered. Book now
                    and let the journey begin!
        </p>
        <div className="position-relative mx-auto">
          <input
            className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
          />
          <button
            type="button"
            className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Subscribe End */}
    </div>
  )
}

export default Destination
 {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Travel Destination</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Destination</li>
      </ol>
    </div>
  </div>
  {/* Header End */}



   {/* Subscribe Start */}
  <div className="container-fluid subscribe py-5">
    <div className="container text-center py-5">
      <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
        <h5 className="subscribe-title px-3">Subscribe</h5>
        <h1 className="text-white mb-4">Our Newsletter</h1>
        <p className="text-white mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          tempore nam, architecto doloremque velit explicabo? Voluptate sunt
          eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
          repellat a laborum quasi.
        </p>
        <div className="position-relative mx-auto">
          <input
            className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
          />
          <button
            type="button"
            className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Subscribe End */}