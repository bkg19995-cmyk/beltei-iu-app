import React from "react";
export default function Page() {
  return (
    <div
      className="container-fluid page-header pt-5 mb-6 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="bg-white p-5">
              <h1 className="display-6 text-uppercase mb-3 animated slideInDown">
                Services
              </h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Pages</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}