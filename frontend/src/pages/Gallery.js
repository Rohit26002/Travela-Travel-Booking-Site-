import React from 'react'
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
function Gallery() {
  return (
    <div>
       {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Our Gallery</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Gallery</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
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

export default Gallery
