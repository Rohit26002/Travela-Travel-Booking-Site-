import React from 'react'

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Get In Touch</h4>
                <a href="">
                  <i className="fas fa-home me-2" /> 123 Street, New York, USA
                </a>
                <a href="">
                  <i className="fas fa-envelope me-2" /> info@example.com
                </a>
                <a href="">
                  <i className="fas fa-phone me-2" /> +012 345 67890
                </a>
                <a href="" className="mb-3">
                  <i className="fas fa-print me-2" /> +012 345 67890
                </a>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-white me-2" />
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Company</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> About
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Careers
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Blog
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Press
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Gift Cards
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Magazine
                </a>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Support</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Contact
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Legal Notice
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Privacy Policy
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Terms and Conditions
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Sitemap
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2" /> Cookie policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>

  )
}

export default Footer
