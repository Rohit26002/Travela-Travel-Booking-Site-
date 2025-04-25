import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import destinationCategory from '../common/destinationCategory';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

function Booking() {

  const [data, setData] = useState({
    name: "",
    email: "",
    dateandtime: "",
    destination: "",
    persons: "",
    kids: "",
    spmessage: ""
  })

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataResponse = await fetch(SummaryApi.savebooking.url, {
      method: SummaryApi.savebooking.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const dataApi = await dataResponse.json()
    console.log(dataApi);

    if (dataApi.success) {
      toast.success(dataApi.message)
      navigate("/")
    }

    if (dataApi.error) {
      toast.error(dataApi.message)
    }
  }

  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4">Online Booking</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Online Booking</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
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
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        id="name"
                        name='name'
                        value={data.name}
                        onChange={handleOnChange}
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
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        value={data.email}
                        onChange={handleOnChange}
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
                        type="date"
                        className="form-control bg-white border-0"
                        id="dateandtime"
                        name='dateandtime'
                        placeholder="Date & Time"
                        value={data.dateandtime}
                        onChange={handleOnChange}
                      />
                      <label htmlFor="dateandtime">Date &amp; Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-white border-0"
                        id="destination"
                        name='destination'
                        value={data.destination}
                        onChange={handleOnChange}
                      >
                        <option value={""}>Select Destination</option>
                        {
                          destinationCategory.map((el, index) => {
                            return (
                              <option value={el.value} key={el.value + index}>{el.label}</option>
                            )
                          })
                        }
                      </select>
                      <label htmlFor="destination">Destination</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-white border-0"
                        id="persons"
                        name="persons"
                        value={data.persons}
                        onChange={handleOnChange}
                      >
                        <option value={0}>Persons</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      <label htmlFor="persons">Persons</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-white border-0"
                        id="kids"
                        name="kids"
                        value={data.kids}
                        onChange={handleOnChange}
                      >
                        <option value={0}>Kids</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                      <label htmlFor="kids">Kids</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-white border-0"
                        placeholder="Special Request"
                        id="spmessage"
                        name="spmessage"  // Ensure this matches the state property
                        value={data.spmessage}
                        onChange={handleOnChange}
                        style={{ height: 100 }}
                      />
                      <label htmlFor="spmessage">Special Request</label>
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

export default Booking
