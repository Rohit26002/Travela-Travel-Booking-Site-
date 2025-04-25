import React from 'react'
import test1 from "../img/testimonial-1.jpg"
import test2 from "../img/testimonial-2.jpg"
import test3 from "../img/testimonial-3.jpg"
import test4 from "../img/testimonial-4.jpg"
function Services() {
  return (
    <div>
      {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Our Services</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Services</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
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
  {/* Testimonial Start */}
  <div className="container-fluid testimonial py-5">
    <div className="container py-5">
      <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
        <h5 className="section-title px-3">Testimonial</h5>
        <h1 className="mb-0">Our Clients Say!!!</h1>
      </div>
      <div className="testimonial-carousel owl-carousel">
        <div className="testimonial-item text-center rounded pb-4">
          <div className="testimonial-comment bg-light rounded p-4">
            <p className="text-center mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              nostrum cupiditate, eligendi repellendus saepe illum earum
              architecto dicta quisquam quasi porro officiis. Vero reiciendis,
            </p>
          </div>
          <div className="testimonial-img p-1">
            <img
              src={test1}
              className="img-fluid rounded-circle"
              alt="Image"
            />
          </div>
          <div style={{ marginTop: "-35px" }}>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              nostrum cupiditate, eligendi repellendus saepe illum earum
              architecto dicta quisquam quasi porro officiis. Vero reiciendis,
            </p>
          </div>
          <div className="testimonial-img p-1">
            <img
              src={test2}
              className="img-fluid rounded-circle"
              alt="Image"
            />
          </div>
          <div style={{ marginTop: "-35px" }}>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              nostrum cupiditate, eligendi repellendus saepe illum earum
              architecto dicta quisquam quasi porro officiis. Vero reiciendis,
            </p>
          </div>
          <div className="testimonial-img p-1">
            <img
              src={test3}
              className="img-fluid rounded-circle"
              alt="Image"
            />
          </div>
          <div style={{ marginTop: "-35px" }}>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              nostrum cupiditate, eligendi repellendus saepe illum earum
              architecto dicta quisquam quasi porro officiis. Vero reiciendis,
            </p>
          </div>
          <div className="testimonial-img p-1">
            <img
              src={test4}
              className="img-fluid rounded-circle"
              alt="Image"
            />
          </div>
          <div style={{ marginTop: "-35px" }}>
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
      </div>
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
    </div>
  )
}

export default Services
