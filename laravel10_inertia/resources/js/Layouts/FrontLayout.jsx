import { Link } from '@inertiajs/react'
import React from 'react'


function FrontLayout({children}) {
  return (
    <>
    
   <div className="container-fluid py-2 border-bottom d-none d-lg-block">
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
        <div className="d-inline-flex align-items-center">
          <Link className="text-decoration-none text-body pe-3" href="#!"><i className="bi bi-telephone me-2" />+012
            345 6789</Link>
          <span className="text-body">|</span>
          <Link className="text-decoration-none text-body px-3" href="#!"><i className="bi bi-envelope me-2" />info@example.com</Link>
        </div>
      </div>
      <div className="col-md-6 text-center text-lg-end">
        <div className="d-inline-flex align-items-center">
          <Link className="text-body px-2" href="#!">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link className="text-body px-2" href="#!">
            <i className="fab fa-twitter" />
          </Link>
          <Link className="text-body px-2" href="#!">
            <i className="fab fa-linkedin-in" />
          </Link>
          <Link className="text-body px-2" href="#!">
            <i className="fab fa-instagram" />
          </Link>
          <Link className="text-body ps-2" href="#!">
            <i className="fab fa-youtube" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Navbar Start */}
<div className="container-fluid sticky-top bg-white shadow-sm">
  <div className="container">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
      <Link href="index.html" className="navbar-brand">
        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2" />Medinova</h1>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link href="/" className="nav-item nav-link active">Home</Link>
          <Link href="/about" className="nav-item nav-link">About</Link>
          <Link href="service.html" className="nav-item nav-link">Service</Link>
          <Link href="price.html" className="nav-item nav-link">Pricing</Link>
          <div className="nav-item dropdown">
            <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
            <div className="dropdown-menu m-0">
              <Link href="blog.html" className="dropdown-item">Blog Grid</Link>
              <Link href="detail.html" className="dropdown-item">Blog Detail</Link>
              <Link href="team.html" className="dropdown-item">The Team</Link>
              <Link href="testimonial.html" className="dropdown-item">Testimonial</Link>
              <Link href="appointment.html" className="dropdown-item">Appointment</Link>
              <Link href="search.html" className="dropdown-item">Search</Link>
            </div>
          </div>
          <Link href="contact.html" className="nav-item nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  </div>
</div>
{/* Navbar End */}


    
 {children}

 <div>
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-light mt-5 py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
            Get In Touch</h4>
          <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed
            dolor</p>
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary me-3" />info@example.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3" />+012 345 67890</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
            Quick Links</h4>
          <div className="d-flex flex-column justify-content-start">
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />Home</Link>
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />About Us</Link>
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />Our Services</Link>
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />Meet The Team</Link>
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />Latest Blog</Link>
            <Link className="text-light" href="#!"><i className="fa fa-angle-right me-2" />Contact Us</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
            Popular Links</h4>
          <div className="d-flex flex-column justify-content-start">
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />Home</Link>
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />About Us</Link>
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />Our Services</Link>
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />Meet The Team</Link>
            <Link className="text-light mb-2" href="#!"><i className="fa fa-angle-right me-2" />Latest Blog</Link>
            <Link className="text-light" href="#!"><i className="fa fa-angle-right me-2" />Contact Us</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
            Newsletter</h4>
          <form action>
            <div className="input-group">
              <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <h6 className="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
          <div className="d-flex">
            <Link className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#!"><i className="fab fa-twitter" /></Link>
            <Link className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#!"><i className="fab fa-facebook-f" /></Link>
            <Link className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#!"><i className="fab fa-linkedin-in" /></Link>
            <Link className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#!"><i className="fab fa-instagram" /></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
    <div className="container">
      <div className="row g-5">
        <div className="col-md-6 text-center text-md-start">
          <p className="mb-md-0">© <Link className="text-primary" href="#!">Your Site Name</Link>. All Rights Reserved.
          </p>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <p className="mb-0">Designed by <Link className="text-primary" href="https://htmlcodex.com" target="_blank">HTML Codex</Link>. Distributed by <Link href="https://themewagon.com" target="_blank">ThemeWagon</Link>.</p>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
</div>



 


    
    </>

  )
}

export default FrontLayout