import React from 'react'
import guide1 from "../img/guide-1.jpg"
import guide2 from "../img/guide-2.jpg"
import guide3 from "../img/guide-3.jpg"
import guide4 from "../img/guide-4.jpg"
function Guides() {
  return (
    <div>
      {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Our Travel Guides</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Guides</li>
      </ol>
    </div>
  </div>
  {/* Header End */}

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

export default Guides
