import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import caraou from '../img/carousel-1.jpg';
import caraou2 from '../img/carousel-2.jpg';
import caraou3 from '../img/carousel-3.jpg';
import { logoutRedux } from '../store/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

function Header() {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {

    dispatch(logoutRedux())
    toast.success("You are logged out")
  }
   const getLinkClass = (...paths) => {
    return paths.includes(location.pathname) ? 'nav-item nav-link active' : 'nav-item nav-link';
  };

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-primary px-5 d-none d-lg-block shadow-md">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-instagram fw-normal" />
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square" href="">
                <i className="fab fa-youtube fw-normal" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              {userData.name ? (
                <a href="#">
                <small className="me-3 text-light">
                  <i className="fa fa-user me-2" />
                  Welcome {userData.name}
                </small>
              </a>
              ) : (<Link to="/signup">
                <small className="me-3 text-light">
                  <i className="fa fa-user me-2" />
                  Welcome Guest, Register
                </small>
              </Link>)}
              {userData.name ? (
                <Link to="">
                  <small className="me-3 text-light" onClick={handleLogout}>
                    <i className="fa fa-sign-in-alt me-2" />
                    Logout
                  </small>
                </Link>
              ) : (
                <Link to="/login">
                  <small className="me-3 text-light">
                    <i className="fa fa-sign-in-alt me-2" />
                    Login
                  </small>
                </Link>
              )}
              <div className="dropdown">
                <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown">
                  <small>
                    <i className="fa fa-home me-2" /> My Dashboard
                  </small>
                </a>
                <div className="dropdown-menu rounded">
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-user-alt me-2" /> My Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-comment-alt me-2" /> Inbox
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-bell me-2" /> Notifications
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-cog me-2" /> Account Settings
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-power-off me-2" /> Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? 'sticky-top shadow-sm bg-white' : ''}`} style={{ zIndex: 1000 }}>
          <Link to="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <i className="fa fa-map-marker-alt me-3" />
              Travela
            </h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className={getLinkClass('/')}>
                Home
              </Link>
              <Link to="/about-us" className={getLinkClass('/about-us')}>
                About
              </Link>
              <Link to="/services" className={getLinkClass('/services')}>
                Services
              </Link>
              <Link to="/packages" className={getLinkClass('/packages')}>
                Packages
              </Link>
              <Link to="/blog" className={getLinkClass('/blog')}>
                Blog
              </Link>
              <div className="nav-item dropdown">
                <a href="#" className={getLinkClass('/destination', '/tour', '/booking', '/gallery' ,'/testimonial', '/guide')} data-bs-toggle="dropdown">
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <Link to="/destination" className="dropdown-item">
                    Destination
                  </Link>
                  <Link to="/tour" className="dropdown-item">
                    Explore Tour
                  </Link>
                  <Link to="/booking" className="dropdown-item">
                    Travel Booking
                  </Link>
                  <Link to="/gallery" className="dropdown-item">
                    Our Gallery
                  </Link>
                  <Link to="/guide" className="dropdown-item">
                    Travel Guides
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                  {/* <a href="404.html" className="dropdown-item">
                    404 Page
                  </a> */}
                </div>
              </div>
              <Link to="/contact" className={getLinkClass('/contact')}>
                Contact
              </Link>
            </div>
            <Link to="/booking" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">
              Book Now
            </Link>
          </div>
        </nav>
        {/* Carousel Start */}
        {isHomePage && (
          <div className="carousel-header" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
              <ol className="carousel-indicators">
                <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" />
                <li data-bs-target="#carouselId" data-bs-slide-to={1} />
                <li data-bs-target="#carouselId" data-bs-slide-to={2} />
              </ol>
              <div className="carousel-inner" role="listbox" style={{ height: '100vh' }}>
                <div className="carousel-item active" style={{ height: '100vh' }}>
                  <img src={caraou2} className="img-fluid" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="carousel-caption" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="p-3" style={{ maxWidth: 900 }}>
                      <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>
                        Explore The World
                      </h4>
                      <h1 className="display-2 text-capitalize text-white mb-4">Let's The World Together!</h1>
                      <p className="mb-5 fs-5">
                        Embark on a journey of discovery with our immersive travel
                        platform. Explore the world's wonders, one click at a time, and let wanderlust guide
                        your adventures!
                      </p>
                      <div className="d-flex align-items-center justify-content-center">
                        <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" style={{ height: '100vh' }}>
                  <img src={caraou} className="img-fluid" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="carousel-caption" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="p-3" style={{ maxWidth: 900 }}>
                      <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>
                        Explore The World
                      </h4>
                      <h1 className="display-2 text-capitalize text-white mb-4">Discover Amazing Places</h1>
                      <p className="mb-5 fs-5">
                        Unlock extraordinary experiences tailored just for you. From
                        thrilling escapades to cultural odysseys, discover your ideal adventure by Travel!
                      </p>
                      <div className="d-flex align-items-center justify-content-center">
                        <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" style={{ height: '100vh' }}>
                  <img src={caraou3} className="img-fluid" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="carousel-caption" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="p-3" style={{ maxWidth: 900 }}>
                      <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>
                        Explore The World
                      </h4>
                      <h1 className="display-2 text-capitalize text-white mb-4">You Like To Go?</h1>
                      <p className="mb-5 fs-5">
                        Ready to redefine wanderlust? Let's turn your dreams into
                        destinations! Where do you want to go next? Explore, discover, and journey beyond
                        with us!
                      </p>
                      <div className="d-flex align-items-center justify-content-center">
                        <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span className="carousel-control-prev-icon btn bg-primary" aria-hidden="false" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span className="carousel-control-next-icon btn bg-primary" aria-hidden="false" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        )}
        {/* Carousel End */}
      </div>
      {isHomePage && (
        <div className="container-fluid search-bar position-relative" style={{ top: '-50%', transform: 'translateY(-50%)' }}>
          <div className="container">
            <div className="position-relative rounded-pill w-100 mx-auto p-5" style={{ background: 'rgba(19, 53, 123, 0.8)' }}>
              <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
              <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{ top: '50%', right: 46, transform: 'translateY(-50%)' }}>
                Search
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Navbar & Hero End */}
    </>
  );
}

export default Header;
