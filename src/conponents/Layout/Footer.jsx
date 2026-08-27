import React from "react";
import BIU1 from "../../assets/BIU1.png";
import BIU2 from "../../assets/BIU2.png";
import BIU3 from "../../assets/BIU3.png";
export default function Footer() {
  return (
    <div
      className="container-fluid bg-dark footer py-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase text-light mb-4">Our Office</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-info me-3" />
              360 Street, Tuol Sleng, Phnom Penh
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt text-info  me-3" />
              077888812
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-info me-3" />
              belteiiu@example.com
            </p>
            <div className="d-flex pt-3">
              <a className="btn btn-square btn-light me-2" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-light me-2" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-light me-2" href="">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-square btn-light me-2" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase text-light mb-4">Quick Links</h5>
            <a className="btn btn-link" href="">
              About Us
            </a>
            <a className="btn btn-link" href="">
              Contact Us
            </a>
            <a className="btn btn-link" href="">
              Our Services
            </a>
            <a className="btn btn-link" href="">
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href="">
              Support
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase text-light mb-4">Business Hours</h5>
            <p className="text-uppercase mb-0">Monday - Sunday</p>
            <p>08:00 am - 09:00 pm</p>
            <p className="text-uppercase mb-0">Saturday</p>
            <p>08:00 am - 06:00 pm</p>
            <p className="text-uppercase mb-0">Sunday</p>
            <p>Open</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase text-light mb-4">Gallery</h5>
            <div className="row g-1">
              <div className="col-4">
                <img className="img-fluid" src={BIU1} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src={BIU2} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src={BIU3} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src={BIU3} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src={BIU2} alt="Image" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src={BIU1} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}