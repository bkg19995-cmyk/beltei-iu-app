import React from "react";
import OIP1 from "../../assets/OIP1.png";
export default function About() {
    return (
        <>

            {/* Page Header / Banner */}
            <div className="container-fluid page-header p-0">
                <div className="row justify-content-center align-items-end g-0" style={{ minHeight: "350px" }}>
                    <div className="col-lg-6 col-md-8 bg-white text-center py-5 px-4">
                        <h1 className="display-6 text-uppercase mb-3">About</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/" className="text-info">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#" className="text-info">Pages</a>
                                </li>
                                <li className="breadcrumb-item active text-muted" aria-current="page">
                                    About
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            {/* About Content */}
            <div className="container-fluid pt-6 pb-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img">
                                <img className="img-fluid" src={OIP1} alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-6 text-uppercase mb-4">
                                Ultimate Welding and Quality Metal Solutions
                            </h1>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque
                                vel lorem porttitor, malesuada arcu quis, fringilla risus.
                                Pellentesque eu consequat augue.
                            </p>
                            <div className="row g-5 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                            <i className="fa fa-users-cog fa-2x text-info" />
                                        </div>
                                        <h5 className="lh-base text-uppercase mb-0">
                                            Certified Expert &amp; Team
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                            <i className="fa fa-tachometer-alt fa-2x text-info" />
                                        </div>
                                        <h5 className="lh-base text-uppercase mb-0">
                                            Fast &amp; Reliable Services
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <p>
                                <i className="fa fa-check-square text-info me-3" />
                                Many variations of passages of lorem ipsum
                            </p>
                            <p>
                                <i className="fa fa-check-square text-info me-3" />
                                Many variations of passages of lorem ipsum
                            </p>
                            <p>
                                <i className="fa fa-check-square text-info me-3" />
                                Many variations of passages of lorem ipsum
                            </p>
                            <div className="border border-5 border-info p-4 text-center mt-4">
                                <h4 className="lh-base text-uppercase mb-0">
                                    We're Good in All Metal Works Using Quality Welding Tools
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}