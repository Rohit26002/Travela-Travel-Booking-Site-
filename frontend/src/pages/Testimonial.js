import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import test1 from '../img/testimonial-1.jpg';
import test2 from '../img/testimonial-2.jpg';
import test3 from '../img/testimonial-3.jpg';
import test4 from '../img/testimonial-4.jpg';

function Testimonial() {
  const settings = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  };

  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4">Our Testimonial</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Testimonial</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
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
                <h5 className="mb-0">Michaela Smith</h5>
                <p className="mb-0">Sydney, Australia</p>
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
                <h5 className="mb-0">Sophia Lee</h5>
                <p className="mb-0">Toronto, Canada</p>
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
                <h5 className="mb-0">Alice Johnson</h5>
                <p className="mb-0">London, UK</p>
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
            I couldn't be happier with the results. The team was professional, efficient, and the quality of work was top-notch.

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
  );
}

export default Testimonial;
