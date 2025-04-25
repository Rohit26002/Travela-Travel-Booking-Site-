import React from 'react'
import about1 from "../img/about-img.jpg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import aboutImg from "../img/about-img-1.png"
import dest1 from "../img/destination-1.jpg"
import dest2 from "../img/destination-2.jpg"
import dest3 from "../img/destination-3.jpg"
import dest4 from "../img/destination-4.jpg"
import dest5 from "../img/destination-5.jpg"
import dest6 from "../img/destination-6.jpg"
import dest7 from "../img/destination-7.jpg"
import dest8 from "../img/destination-8.jpg"
import dest9 from "../img/destination-9.jpg"
import ex1 from "../img/explore-tour-1.jpg"
import ex2 from "../img/explore-tour-2.jpg"
import ex3 from "../img/explore-tour-3.jpg"
import ex4 from "../img/explore-tour-4.jpg"
import ex5 from "../img/explore-tour-5.jpg"
import ex6 from "../img/explore-tour-6.jpg"
import pack1 from "../img/packages-1.jpg"
import pack2 from "../img/packages-2.jpg"
import pack3 from "../img/packages-3.jpg"
import pack4 from "../img/packages-4.jpg"
import gal1 from "../img/gallery-1.jpg"
import gal2 from "../img/gallery-2.jpg"
import gal3 from "../img/gallery-3.jpg"
import gal4 from "../img/gallery-4.jpg"
import gal5 from "../img/gallery-5.jpg"
import gal6 from "../img/gallery-6.jpg"
import gal7 from "../img/gallery-7.jpg"
import gal8 from "../img/gallery-8.jpg"
import gal9 from "../img/gallery-9.jpg"
import gal10 from "../img/gallery-10.jpg"
import gal11 from "../img/gallery-11.jpg"
import gal12 from "../img/gallery-12.jpg"
import guide1 from "../img/guide-1.jpg"
import guide2 from "../img/guide-2.jpg"
import guide3 from "../img/guide-3.jpg"
import guide4 from "../img/guide-4.jpg"
import blog1 from "../img/blog-1.jpg"
import blog2 from "../img/blog-2.jpg"
import blog3 from "../img/blog-3.jpg"
import test1 from "../img/testimonial-1.jpg"
import test2 from "../img/testimonial-2.jpg"
import test3 from "../img/testimonial-3.jpg"
import test4 from "../img/testimonial-4.jpg"

function Home() {


  const settings = {
    autoplay: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };


  return (
    <>
  {/* About Start */}
  <div className="container-fluid about py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <div
            className="h-100"
            style={{
              border: "50px solid",
              borderColor: "transparent #13357B transparent #13357B"
            }}
          >
            <img
              src={about1}
              className="img-fluid w-100 h-100"
              alt=""
            />
          </div>
        </div>
        <div
          className="col-lg-7"
          style={{
            background:
              `linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(${aboutImg})`
          }}
        >
          <h5 className="section-about-title pe-3">About Us</h5>
          <h1 className="mb-4">
            Welcome to <span className="text-primary">Travela</span>
          </h1>
          <p className="mb-4">
          As avid explorers ourselves, we understand the allure of unique experiences and the
                        importance of seamless travel arrangements. Unlike conventional travel platforms, we pride
                        ourselves on our personalized approach, crafting bespoke itineraries tailored to your desires
                        and interests.
          </p>
          <p className="mb-4">
          With a commitment to excellence and a passion for exploration, we strive to exceed
                        expectations, ensuring every trip is nothing short of extraordinary. Elevate your travel
                        experience with our comprehensive suite of premium services, including:
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                First Class Flights
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Handpicked Hotels
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />5 Star
                Accommodations
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Latest Model Vehicles
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                150 Premium City Tours
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                24/7 Service
              </p>
            </div>
          </div>
          <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}

  <>
  {/* Services Start */}
  <div className="container-fluid bg-light service py-5">
    <div className="container py-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
        <h5 className="section-title px-3">Services</h5>
        <h1 className="mb-0">Our Services</h1>
      </div>
      <div className="row g-4" style={{ textAlign: "justify" }}>
        <div className="col-lg-6">
          <div className="row g-4">
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content">
                  <h5 className="mb-4">WorldWide Tours</h5>
                  <p className="mb-0">
                    Embark on unforgettable adventures to every corner of the
                    globe, from iconic landmarks to hidden gems. Our expertly
                    crafted tours promise immersive experiences and lifelong
                    memories.
                  </p>
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-globe fa-4x text-primary" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content">
                  <h5 className="mb-4">Hotel Reservation</h5>
                  <p className="mb-0">
                    Secure your home away from home with ease and confidence.
                    From luxury resorts to cozy boutique hotels, we guarantee
                    accommodation tailored to your preferences and budget.
                  </p>
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-hotel fa-4x text-primary" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content">
                  <h5 className="mb-4">Travel Guides</h5>
                  <p className="mb-0">
                    Unlock the secrets of your destination with the guidance of
                    our knowledgeable travel companions. Our expert guides
                    provide insider tips, historical insights, and local
                    recommendations.
                  </p>
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-user fa-4x text-primary" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                <div className="service-content">
                  <h5 className="mb-4">Event Management</h5>
                  <p className="mb-0">
                    From intimate gatherings to grand celebrations, leave the
                    logistics to us. Our experienced event planners ensure
                    flawless execution, turning your vision into a spectacular
                    reality.
                  </p>
                </div>
                <div className="service-icon p-4">
                  <i className="fa fa-cog fa-4x text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row g-4">
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                <div className="service-icon p-4">
                  <i className="fa fa-globe fa-4x text-primary" />
                </div>
                <div className="service-content">
                  <h5 className="mb-4">Airport Transfers</h5>
                  <p className="mb-0">
                    Start and end your journey stress-free with our seamless
                    airport transfer services. Relax and enjoy the ride as we
                    whisk you away to your destination with comfort and
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                <div className="service-icon p-4">
                  <i className="fa fa-hotel fa-4x text-primary" />
                </div>
                <div className="service-content">
                  <h5 className="mb-4">Travel Insurance</h5>
                  <p className="mb-0">
                    Travel with peace of mind knowing you're protected every
                    step of the way. Our comprehensive insurance plans offer
                    coverage for unforeseen circumstances, ensuring a worry-free
                    adventure.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                <div className="service-icon p-4">
                  <i className="fa fa-user fa-4x text-primary" />
                </div>
                <div className="service-content">
                  <h5 className="mb-4">Customized Itineraries</h5>
                  <p className="mb-0">
                    Tailor your travel experience to your exact preferences with
                    our personalized itineraries. Whether seeking adventure, or
                    cultural immersion, we design bespoke journeys.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                <div className="service-icon p-4">
                  <i className="fa fa-cog fa-4x text-primary" />
                </div>
                <div className="service-content">
                  <h5 className="mb-4">Language Translation Services</h5>
                  <p className="mb-0">
                    Immerse yourself in local culture with our professional
                    translation services. From basic phrases to complex
                    conversations, our skilled linguists ensure clear
                    communication wherever you go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="text-center">
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
              Service More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
</>


<>
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
</>
<>
  {/* Explore Tour Start */}
  <div className="container-fluid ExploreTour py-5">
    <div className="container py-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
        <h5 className="section-title px-3">Explore Tour</h5>
        <h1 className="mb-4">The World</h1>
        <p className="mb-0">
        Unlock the world's wonders with our exclusive tour packages. Dive into
                    captivating destinations, where every moment is a new adventure waiting to be discovered. Book now
                    and let the journey begin!
        </p>
      </div>
      <div className="tab-class text-center">
        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
          <li className="nav-item">
            <a
              className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
              data-bs-toggle="pill"
              href="#NationalTab-1"
            >
              <span className="text-dark" style={{ width: 250 }}>
                National Tour Category
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#InternationalTab-2"
            >
              <span className="text-dark" style={{ width: 250 }}>
                International tour Category
              </span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="NationalTab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="national-item">
                  <img
                    src={ex1}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="national-content">
                    <div className="national-info">
                      <h5 className="text-white text-uppercase mb-2">
                        Weekend Tour
                      </h5>
                      <a href="#" className="btn-hover text-white">
                        View All Place <i className="fa fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                  <div className="national-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="national-item">
                  <img
                    src={ex2}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="national-content">
                    <div className="national-info">
                      <h5 className="text-white text-uppercase mb-2">
                        Holiday Tour
                      </h5>
                      <a href="#" className="btn-hover text-white">
                        View All Place <i className="fa fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                  <div className="national-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="national-item">
                  <img
                    src={ex3}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="national-content">
                    <div className="national-info">
                      <h5 className="text-white text-uppercase mb-2">
                        Road Trip
                      </h5>
                      <a href="#" className="btn-hover text-white">
                        View All Place <i className="fa fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                  <div className="tour-offer bg-info">15% Off</div>
                  <div className="national-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="national-item">
                  <img
                    src={ex4}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="national-content">
                    <div className="national-info">
                      <h5 className="text-white text-uppercase mb-2">
                        Historical Trip
                      </h5>
                      <a href="#" className="btn-hover text-white">
                        View All Place <i className="fa fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                  <div className="national-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="national-item">
                  <img
                    src={ex5}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="national-content">
                    <div className="national-info">
                      <h5 className="text-white text-uppercase mb-2">
                        Family Tour
                      </h5>
                      <a href="#" className="btn-hover text-white">
                        View All Place <i className="fa fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                  <div className="tour-offer bg-warning">50% Off</div>
                  <div className="national-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="national-item">
                  <img
                    src={ex6}
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="national-content">
                    <div className="national-info">
                      <h5 className="text-white text-uppercase mb-2">
                        Beach Tour
                      </h5>
                      <a href="#" className="btn-hover text-white">
                        View All Place <i className="fa fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                  <div className="national-plus-icon">
                    <a href="#" className="my-auto">
                      <i className="fas fa-link fa-2x text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="InternationalTab-2" className="tab-pane fade show p-0">
            <div className="InternationalTour-carousel owl-carousel">
              <div className="international-item">
                <img
                  src={ex1}
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div className="international-content">
                  <div className="international-info">
                    <h5 className="text-white text-uppercase mb-2">
                      Australia
                    </h5>
                    <a href="#" className="btn-hover text-white me-4">
                      <i className="fas fa-map-marker-alt me-1" /> 8 Cities
                    </a>
                    <a href="#" className="btn-hover text-white">
                      <i className="fa fa-eye ms-2" />{" "}
                      <span>143+ Tour Places</span>
                    </a>
                  </div>
                </div>
                <div className="tour-offer bg-success">30% Off</div>
                <div className="international-plus-icon">
                  <a href="#" className="my-auto">
                    <i className="fas fa-link fa-2x text-white" />
                  </a>
                </div>
              </div>
              <div className="international-item">
                <img
                  src={ex2}
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div className="international-content">
                  <div className="international-info">
                    <h5 className="text-white text-uppercase mb-2">Germany</h5>
                    <a href="#" className="btn-hover text-white me-4">
                      <i className="fas fa-map-marker-alt me-1" /> 12 Cities
                    </a>
                    <a href="#" className="btn-hover text-white">
                      <i className="fa fa-eye ms-2" />{" "}
                      <span>21+ Tour Places</span>
                    </a>
                  </div>
                </div>
                <div className="international-plus-icon">
                  <a href="#" className="my-auto">
                    <i className="fas fa-link fa-2x text-white" />
                  </a>
                </div>
              </div>
              <div className="international-item">
                <img
                  src={ex3}
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div className="international-content">
                  <div className="tour-offer bg-warning">45% Off</div>
                  <div className="international-info">
                    <h5 className="text-white text-uppercase mb-2">Spain</h5>
                    <a href="#" className="btn-hover text-white me-4">
                      <i className="fas fa-map-marker-alt me-1" /> 9 Cities
                    </a>
                    <a href="#" className="btn-hover text-white">
                      <i className="fa fa-eye ms-2" />{" "}
                      <span>133+ Tour Places</span>
                    </a>
                  </div>
                </div>
                <div className="international-plus-icon">
                  <a href="#" className="my-auto">
                    <i className="fas fa-link fa-2x text-white" />
                  </a>
                </div>
              </div>
              <div className="international-item">
                <img
                  src={ex4}
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div className="international-content">
                  <div className="international-info">
                    <h5 className="text-white text-uppercase mb-2">Japan</h5>
                    <a href="#" className="btn-hover text-white me-4">
                      <i className="fas fa-map-marker-alt me-1" /> 8 Cities
                    </a>
                    <a href="#" className="btn-hover text-white">
                      <i className="fa fa-eye ms-2" />{" "}
                      <span>137+ Tour Places</span>
                    </a>
                  </div>
                </div>
                <div className="international-plus-icon">
                  <a href="#" className="my-auto">
                    <i className="fas fa-link fa-2x text-white" />
                  </a>
                </div>
              </div>
              <div className="international-item">
                <img
                  src={ex5}
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div className="international-content">
                  <div className="tour-offer bg-info">70% Off</div>
                  <div className="international-info">
                    <h5 className="text-white text-uppercase mb-2">London</h5>
                    <a href="#" className="btn-hover text-white me-4">
                      <i className="fas fa-map-marker-alt me-1" /> 17 Cities
                    </a>
                    <a href="#" className="btn-hover text-white">
                      <i className="fa fa-eye ms-2" />{" "}
                      <span>26+ Tour Places</span>
                    </a>
                  </div>
                </div>
                <div className="international-plus-icon">
                  <a href="#" className="my-auto">
                    <i className="fas fa-link fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Explore Tour Start */}
</>

{/* Packages Start */}
<div className="container-fluid packages py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Packages</h5>
            <h1 className="mb-0">Awesome Packages</h1>
          </div>
          <OwlCarousel className="packages-carousel owl-carousel" {...settings}>
            <div className="packages-item">
              <div className="packages-img">
                <img
                  src={pack4}
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div
                  className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                  style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                >
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt me-2" />
                    Venice - Italy
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt me-2" />3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user me-2" />2 Person
                  </small>
                </div>
                <div className="packages-price py-2 px-4">₹5099.00</div>
              </div>
              <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                  <h5 className="mb-0">Venice - Italy</h5>
                  <small className="text-uppercase">Hotel Deals</small>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat
                  </p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                  <div className="col-6 text-start px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Read More
                    </a>
                  </div>
                  <div className="col-6 text-end px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="packages-item">
              <div className="packages-img">
                <img
                  src={pack2}
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div
                  className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                  style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                >
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt me-2" />
                    Venice - Italy
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt me-2" />3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user me-2" />2 Person
                  </small>
                </div>
                <div className="packages-price py-2 px-4">₹8099.00</div>
              </div>
              <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                  <h5 className="mb-0">The New California</h5>
                  <small className="text-uppercase">Hotel Deals</small>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat
                  </p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                  <div className="col-6 text-start px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Read More
                    </a>
                  </div>
                  <div className="col-6 text-end px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="packages-item">
              <div className="packages-img">
                <img
                  src={pack3}
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div
                  className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                  style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                >
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt me-2" />
                    Venice - Italy
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt me-2" />3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user me-2" />2 Person
                  </small>
                </div>
                <div className="packages-price py-2 px-4">₹12099.00</div>
              </div>
              <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                  <h5 className="mb-0">Discover Japan</h5>
                  <small className="text-uppercase">Hotel Deals</small>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat
                  </p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                  <div className="col-6 text-start px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Read More
                    </a>
                  </div>
                  <div className="col-6 text-end px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="packages-item">
              <div className="packages-img">
                <img
                  src={pack1}
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div
                  className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                  style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                >
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt me-2" />
                    Thayland
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt me-2" />3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user me-2" />2 Person
                  </small>
                </div>
                <div className="packages-price py-2 px-4">₹15099.00</div>
              </div>
              <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                  <h5 className="mb-0">Thayland Trip</h5>
                  <small className="text-uppercase">Hotel Deals</small>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat
                  </p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                  <div className="col-6 text-start px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Read More
                    </a>
                  </div>
                  <div className="col-6 text-end px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* Packages End */}

<>
  {/* Gallery Start */}
  <div className="container-fluid gallery py-5 my-5">
    <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
      <h5 className="section-title px-3">Our Gallery</h5>
      <h1 className="mb-4">Tourism &amp; Traveling Gallery.</h1>
      <p className="mb-0">
      Step into our world of wanderlust with captivating snapshots from our diverse array of
                tours. From awe-inspiring landscapes to cultural encounters, let our gallery inspire your next
                adventure.
      </p>
    </div>
    <div className="tab-class text-center">
      <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
        <li className="nav-item">
          <a
            className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
            data-bs-toggle="pill"
            href="#GalleryTab-1"
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
            href="#GalleryTab-2"
          >
            <span className="text-dark" style={{ width: 150 }}>
              World tour
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
            data-bs-toggle="pill"
            href="#GalleryTab-3"
          >
            <span className="text-dark" style={{ width: 150 }}>
              Ocean Tour
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
            data-bs-toggle="pill"
            href="#GalleryTab-4"
          >
            <span className="text-dark" style={{ width: 150 }}>
              Summer Tour
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
            data-bs-toggle="pill"
            href="#GalleryTab-5"
          >
            <span className="text-dark" style={{ width: 150 }}>
              Sport Tour
            </span>
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
          <div className="row g-2">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal1}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal1}
                    data-lightbox="gallery-1"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="gallery-item h-100">
                <img
                  src={gal2}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal2}
                    data-lightbox="gallery-2"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal3}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal3}
                    data-lightbox="gallery-3"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="gallery-item h-100">
                <img
                  src={gal4}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal4}
                    data-lightbox="gallery-4"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal5}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal5}
                    data-lightbox="gallery-5"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal6}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal6}
                    data-lightbox="gallery-6"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="gallery-item h-100">
                <img
                  src={gal7}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal7}
                    data-lightbox="gallery-7"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal8}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal8}
                    data-lightbox="gallery-8"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="gallery-item h-100">
                <img
                  src={gal9}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal9}
                    data-lightbox="gallery-9"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal10}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal10}
                    data-lightbox="gallery-10"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="GalleryTab-2" className="tab-pane fade show p-0">
          <div className="row g-2">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="gallery-item h-100">
                <img
                  src={gal2}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal2}
                    data-lightbox="gallery-2"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal3}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal3}
                    data-lightbox="gallery-3"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="GalleryTab-3" className="tab-pane fade show p-0">
          <div className="row g-2">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="gallery-item h-100">
                <img
                  src={gal2}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal3}
                    data-lightbox="gallery-2"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal3}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal3}
                    data-lightbox="gallery-3"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="GalleryTab-4" className="tab-pane fade show p-0">
          <div className="row g-2">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="gallery-item h-100">
                <img
                  src={gal2}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal2}
                    data-lightbox="gallery-2"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal3}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal3}
                    data-lightbox="gallery-3"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="GalleryTab-5" className="tab-pane fade show p-0">
          <div className="row g-2">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="gallery-item h-100">
                <img
                  src={gal2}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal2}
                    data-lightbox="gallery-2"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
              <div className="gallery-item h-100">
                <img
                  src={gal3}
                  className="img-fluid w-100 h-100 rounded"
                  alt="Image"
                />
                <div className="gallery-content">
                  <div className="gallery-info">
                    <h5 className="text-white text-uppercase mb-2">
                      World Tour
                    </h5>
                    <a href="#" className="btn-hover text-white">
                      View All Place <i className="fa fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
                <div className="gallery-plus-icon">
                  <a
                    href={gal3}
                    data-lightbox="gallery-3"
                    className="my-auto"
                  >
                    <i className="fas fa-plus fa-2x text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Gallery End */}
</>
<>
  {/* Tour Booking Start */}
  <div className="container-fluid booking py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <h5 className="section-booking-title pe-3">Booking</h5>
          <h1 className="text-white mb-4">Online Booking</h1>
          <p className="text-white mb-4">
          Streamline your travel planning with our convenient online booking
                        platform, designed to make securing your dream vacation a breeze. From flights to
                        accommodations, tours to transfers, our user-friendly interface allows you to effortlessly
                        customize every aspect of your itinerary, all from the comfort of your own home.
          </p>
          <p className="text-white mb-4">
          With real-time availability and instant confirmation, booking your next
                        adventure has never been easier. Trust our online booking system to turn your travel dreams into
                        reality with just a few clicks.
          </p>
          <a
            href="#"
            className="btn btn-light text-primary rounded-pill py-3 px-5 mt-2"
          >
            Read More
          </a>
        </div>
        <div className="col-lg-6">
          <h1 className="text-white mb-3">Book A Tour Deals</h1>
          <p className="text-white mb-4">
            Get <span className="text-warning">50% Off</span> On Your First
            Adventure Trip With Travela. Get More Deal Offers Here.
          </p>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control bg-white border-0"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date3"
                  data-target-input="nearest"
                >
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    id="datetime"
                    placeholder="Date & Time"
                    data-target="#date3"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="datetime">Date &amp; Time</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select bg-white border-0"
                    id="select1"
                  >
                    <option value={1}>Destination 1</option>
                    <option value={2}>Destination 2</option>
                    <option value={3}>Destination 3</option>
                  </select>
                  <label htmlFor="select1">Destination</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select bg-white border-0"
                    id="SelectPerson"
                  >
                    <option value={1}>Persons</option>
                    <option value={2}>1</option>
                    <option value={3}>2</option>
                    <option value={3}>3</option>
                  </select>
                  <label htmlFor="SelectPerson">Persons</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select bg-white border-0"
                    id="CategoriesSelect"
                  >
                    <option value={1}>Kids</option>
                    <option value={2}>1</option>
                    <option value={3}>2</option>
                    <option value={3}>3</option>
                  </select>
                  <label htmlFor="CategoriesSelect">Categories</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control bg-white border-0"
                    placeholder="Special Request"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Special Request</label>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary text-white w-100 py-3"
                  type="submit"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Tour Booking End */}
</>
<>
  {/* Travel Guide Start */}
  <div className="container-fluid guide py-5">
    <div className="container py-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
        <h5 className="section-title px-3">Travel Guide</h5>
        <h1 className="mb-0">Meet Our Guide</h1>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="guide-item">
            <div className="guide-img">
              <div className="guide-img-efects">
                <img
                  src={guide1}
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
              </div>
              <div className="guide-icon rounded-pill p-2">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="guide-title text-center rounded-bottom p-4">
              <div className="guide-title-inner">
              <h4 class="mt-3">John Smith</h4>
              <p class="mb-0">Senior Tour Guide</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="guide-item">
            <div className="guide-img">
              <div className="guide-img-efects">
                <img
                  src={guide2}
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
              </div>
              <div className="guide-icon rounded-pill p-2">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="guide-title text-center rounded-bottom p-4">
              <div className="guide-title-inner">
              <h4 class="mt-3">Michael Johnson</h4>
              <p class="mb-0">Adventure Specialist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="guide-item">
            <div className="guide-img">
              <div className="guide-img-efects">
                <img
                  src={guide3}
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
              </div>
              <div className="guide-icon rounded-pill p-2">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="guide-title text-center rounded-bottom p-4">
              <div className="guide-title-inner">
              <h4 class="mt-3">David Martinez</h4>
              <p class="mb-0">Cultural Ambassador</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="guide-item">
            <div className="guide-img">
              <div className="guide-img-efects">
                <img
                  src={guide4}
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
              </div>
              <div className="guide-icon rounded-pill p-2">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="guide-title text-center rounded-bottom p-4">
              <div className="guide-title-inner">
              <h4 class="mt-3">Christopher Brown</h4>
                                <p class="mb-0">Outdoor Expedition Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Travel Guide End */}
</>
<>
  {/* Blog Start */}
  <div className="container-fluid blog py-5">
    <div className="container py-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
        <h5 className="section-title px-3">Our Blog</h5>
        <h1 className="mb-4">Popular Travel Blogs</h1>
        <p className="mb-0">
        Dive into a world of travel inspiration and expertise with our collection of popular
                    travel blogs. From insider tips to captivating stories, immerse yourself in the experiences of
                    fellow adventurers as you plan your next unforgettable journey.
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="blog-item">
            <div className="blog-img">
              <div className="blog-img-inner">
                <img
                  className="img-fluid w-100 rounded-top"
                  src={blog1}
                  alt="Image"
                />
                <div className="blog-icon">
                  <a href="#" className="my-auto">
                    <i className="fas fa-link fa-2x text-white" />
                  </a>
                </div>
              </div>
              <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />
                  28 Jan 2050
                </small>
                <a
                  href="#"
                  className="btn-hover flex-fill text-center text-white border-end py-2"
                >
                  <i className="fa fa-thumbs-up text-primary me-2" />
                  1.7K
                </a>
                <a
                  href="#"
                  className="btn-hover flex-fill text-center text-white py-2"
                >
                  <i className="fa fa-comments text-primary me-2" />
                  1K
                </a>
              </div>
            </div>
            <div className="blog-content border border-top-0 rounded-bottom p-4">
              <p className="mb-3">Posted By: Royal Hamblin </p>
              <a href="#" className="h4">
                Adventures Trip
              </a>
              <p className="my-3">
              Embark on thrilling escapades and discover hidden gems around the world
              through exhilarating narratives and practical travel tips.</p>
              
              <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog-item">
            <div className="blog-img">
              <div className="blog-img-inner">
                <img
                  className="img-fluid w-100 rounded-top"
                  src={blog2}
                  alt="Image"
                />
                <div className="blog-icon">
                  <a href="#" className="my-auto">
                    <i className="fas fa-link fa-2x text-white" />
                  </a>
                </div>
              </div>
              <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />
                  28 Jan 2050
                </small>
                <a
                  href="#"
                  className="btn-hover flex-fill text-center text-white border-end py-2"
                >
                  <i className="fa fa-thumbs-up text-primary me-2" />
                  1.7K
                </a>
                <a
                  href="#"
                  className="btn-hover flex-fill text-center text-white py-2"
                >
                  <i className="fa fa-comments text-primary me-2" />
                  1K
                </a>
              </div>
            </div>
            <div className="blog-content border border-top-0 rounded-bottom p-4">
              <p className="mb-3">Posted By: Royal Hamblin </p>
              <a href="#" className="h4">
                Adventures Trip
              </a>
              <p className="my-3">
              Join us on a journey of exploration as we chronicle our wanderlust-fueled
              adventures across continents, from remote villages to bustling cities.
              </p>
              <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="blog-item">
            <div className="blog-img">
              <div className="blog-img-inner">
                <img
                  className="img-fluid w-100 rounded-top"
                  src={blog3}
                  alt="Image"
                />
                <div className="blog-icon">
                  <a href="#" className="my-auto">
                    <i className="fas fa-link fa-2x text-white" />
                  </a>
                </div>
              </div>
              <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                <small className="flex-fill text-center border-end py-2">
                  <i className="fa fa-calendar-alt text-primary me-2" />
                  28 Jan 2050
                </small>
                <a
                  href="#"
                  className="btn-hover flex-fill text-center text-white border-end py-2"
                >
                  <i className="fa fa-thumbs-up text-primary me-2" />
                  1.7K
                </a>
                <a
                  href="#"
                  className="btn-hover flex-fill text-center text-white py-2"
                >
                  <i className="fa fa-comments text-primary me-2" />
                  1K
                </a>
              </div>
            </div>
            <div className="blog-content border border-top-0 rounded-bottom p-4">
              <p className="mb-3">Posted By: Royal Hamblin </p>
              <a href="#" className="h4">
                Adventures Trip
              </a>
              <p className="my-3">
              Delve into the art of exploration with curated guides and firsthand accounts
              of off-the-beaten-path discoveries, inspiring you to roam far and wide.
              </p>
              <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
  {/* Testimonial Start */}
  <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Testimonial</h5>
            <h1 className="mb-0">Our Clients Say!!!</h1>
          </div>
          <OwlCarousel className="owl-carousel testimonial-carousel" {...settings}>
          
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                The service provided was exceptional, and the team went above and beyond to meet our needs. We are extremely satisfied.
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src={test1}
                  className="img-fluid rounded-circle"
                  alt="Testimonial"
                />
              </div>
              <div style={{ marginTop: '-35px' }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                We had a great experience working with this team. Their dedication and attention to detail were outstanding.

                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src={test2}
                  className="img-fluid rounded-circle"
                  alt="Testimonial"
                />
              </div>
              <div style={{ marginTop: '-35px' }}>
              <h5 class="mb-0">Michaela Smith</h5>
              <p class="mb-0">Sydney, Australia</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                Excellent service! The team was very responsive and the project was completed on time. Highly recommend!

                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src={test3}
                  className="img-fluid rounded-circle"
                  alt="Testimonial"
                />
              </div>
              <div style={{ marginTop: '-35px' }}>
              <h5 class="mb-0">Sophia Lee</h5>
              <p class="mb-0">Toronto, Canada</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                The service provided was exceptional, and the team went above and beyond to meet our needs. We are extremely satisfied.

                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src={test4}
                  className="img-fluid rounded-circle"
                  alt="Testimonial"
                />
              </div>
              <div style={{ marginTop: '-35px' }}>
              <h5 class="mb-0">Alice Johnson</h5>
              <p class="mb-0">London, UK</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            
          </OwlCarousel>
        </div>
      </div>
      {/* Testimonial End */}
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
</>


</>

  )
}

export default Home
