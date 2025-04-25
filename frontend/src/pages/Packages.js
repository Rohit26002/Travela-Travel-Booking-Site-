import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pack1 from "../img/packages-1.jpg"
import pack2 from "../img/packages-2.jpg"
import pack3 from "../img/packages-3.jpg"
import pack4 from "../img/packages-4.jpg"
function Packages() {

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
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4">Travel Packages</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Packages</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
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

export default Packages
