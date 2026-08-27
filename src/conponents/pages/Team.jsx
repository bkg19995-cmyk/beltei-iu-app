import React from "react";
import Photos1 from "../../assets/Photos1.jpg";
import Photos2 from "../../assets/Photos2.jpg";
import Photos3 from "../../assets/Photos3.jpg";
import Photos4 from "../../assets/Photos4.jpg";
export default function Team() {
  return (
    <div className="container-fluid team pt-6 pb-6">
      <div className="container-fluid page-header p-0">
        <div className="row justify-content-center align-items-end g-0" style={{ minHeight: "350px" }}>
          <div className="col-lg-6 col-md-8 bg-white text-center py-5 px-4">
            <h1 className="display-6 text-uppercase mb-3">Team</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="/" className="text-info">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#" className="text-info">Pages</a>
                </li>
                <li className="breadcrumb-item active text-muted" aria-current="page">
                  Team
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="display-6 text-uppercase mb-5">
            Meet Our Professional and Experience Welder
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={Photos1} alt="Image" />
                <div className="team-social">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-1">HOEURN CHHATY</h5>
                <span>C# Programming</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={Photos2} alt="Image" />
                <div className="team-social">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-1">KEO TONGHENG</h5>
                <span>Web Develobment</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={Photos3} alt="Image" />
                <div className="team-social">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-1">MAO SATYA</h5>
                <span>Database Management System</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src={Photos4} alt="Image" />
                <div className="team-social">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-1">SANN SOPHAR</h5>
                <span>Framwork-React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}