import React from 'react'
import blog1 from "../img/blog-1.jpg"
import blog2 from "../img/blog-2.jpg"
import blog3 from "../img/blog-3.jpg"
function Blog() {
  return (
    <div>
        {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Our Blog</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Blog</li>
      </ol>
    </div>
  </div>
  {/* Header End */}

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

export default Blog
 