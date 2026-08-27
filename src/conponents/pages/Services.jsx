import React from "react";
import BIU1 from "../../assets/BIU1.png";
import BIU2 from "../../assets/BIU2.png";
import BIU3 from "../../assets/BIU3.png";
import HQ from "../../assets/HQ.png";
export default function Services() {
  return (
    <div className="container-fluid service pt-6 pb-6">
      <div className="container">
        <div className="container-fluid page-header p-0">
          <div className="row justify-content-center align-items-end g-0" style={{ minHeight: "350px" }}>
            <div className="col-lg-6 col-md-8 bg-white text-center py-5 px-4">
              <h1 className="display-6 text-uppercase mb-3">Services</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-info">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#" className="text-info">Pages</a>
                  </li>
                  <li className="breadcrumb-item active text-muted" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="display-6 text-uppercase mb-5">
            Reliable &amp; High-Quality Welding Services
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid" src={BIU1} alt="Image" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">Metal Works</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid" src={BIU2} alt="Image" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">Steel welding</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid" src={BIU3} alt="Image" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">pipe welding</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid" src={HQ} alt="Image" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">Custom welding</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid" src={BIU1} alt="Image" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">Steel welding</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid" src={BIU2} alt="Image" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">Metal Work</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid" src={BIU3} alt="Image" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">Custom Welding</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid" src={HQ} alt="Image" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">Pipe Welding</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}