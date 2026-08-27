import React from "react";
import newImg from "../../assets/new-image.jpg";
import BIU1 from "../../assets/BIU1.png";
import Benner from "../../assets/Benner.jpg";
import IMG from "../../assets/IMG.JPG";
import BIU4 from "../../assets/BIU4.jpg";
import BIU5 from "../../assets/BIU5.jpg";
import OIP1 from "../../assets/OIP1.png";
import BIU2 from "../../assets/BIU2.png";
import BIU3 from "../../assets/BIU3.png";
import HQ from "../../assets/HQ.png";
import Photos1 from "../../assets/Photos1.jpg";
import Photos2 from "../../assets/Photos2.jpg";
import Photos3 from "../../assets/Photos3.jpg";
import Photos4 from "../../assets/Photos4.jpg";
export default function Home() {
    return (

        <>

            <div className="container-fluid p-0 mb-6 wow fadeIn" data-wow-delay="0.1s">
                <div
                    id="header-carousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#header-carousel"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        >
                            <img className="img-fluid" src={BIU1} alt="Image" />
                        </button>
                        <button
                            type="button"
                            data-bs-target="#header-carousel"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        >
                            <img className="img-fluid" src={BIU4} alt="Image" />
                        </button>
                        <button
                            type="button"
                            data-bs-target="#header-carousel"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        >
                            <img className="img-fluid" src={BIU5} alt="Image" />
                        </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" src={newImg} alt="Image" />
                            <div className="carousel-caption">
                                <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">
                                    BELTEI INTERNATIONAL UNIVERSITY
                                </h1>
                                <a href="#" className="btn btn-primary py-3 px-34"
                                    style={{ backgroundColor: "#099fa4" }}
                                    data-wow-delay="0.1s">
                                    Explore More
                                </a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={Benner} alt="Image" />
                            <div className="carousel-caption">
                                <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">
                                    BELTEI INTERNATIONAL UNIVERSITY
                                </h1>
                                <a href="#" className="btn btn-primary py-3 px-34"
                                    style={{ backgroundColor: "#099fa4" }}
                                    data-wow-delay="0.1s">
                                    Explore More
                                </a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={IMG} alt="Image" />
                            <div className="carousel-caption">
                                <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">
                                    BELTEI INTERNATIONAL UNIVERSITY
                                </h1>
                                <a href="#" className="btn btn-primary py-3 px-34"
                                    style={{ backgroundColor: "#099fa4" }}
                                    data-wow-delay="0.1s">
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}
            {/* About Start */}
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
            {/* About End */}
            {/* Features Start */}
            <div className="container-fluid pt-6 pb-6">
                <div className="container pt-4">
                    <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="feature-item border h-100">
                                <div className="feature-icon btn-xxl-square bg-info mb-4 mt-n4">
                                    <i className="fa fa-hammer fa-2x text-white" />
                                </div>
                                <div className="p-5 pt-0">
                                    <h5 className="text-uppercase mb-3">Quality Welding</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur tellus augue.
                                    </p>
                                    <a
                                        className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                        href="#"
                                    >
                                        <b className="bg-white pe-3">Read More</b>{" "}
                                        <i className="bi bi-arrow-right bg-white ps-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.4s">
                            <div className="feature-item border h-100">
                                <div className="feature-icon btn-xxl-square bg-info mb-4 mt-n4">
                                    <i className="fa fa-dollar-sign fa-2x text-white" />
                                </div>
                                <div className="p-5 pt-0">
                                    <h5 className="text-uppercase">Affordable Pricing</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur tellus augue.
                                    </p>
                                    <a
                                        className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                        href="#"
                                    >
                                        <b className="bg-white pe-3">Read More</b>{" "}
                                        <i className="bi bi-arrow-right bg-white ps-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="feature-item border h-100">
                                <div className="feature-icon btn-xxl-square bg-info mb-4 mt-n4">
                                    <i className="fa fa-check-double fa-2x text-white" />
                                </div>
                                <div className="p-5 pt-0">
                                    <h5 className="text-uppercase">Best Welder</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur tellus augue.
                                    </p>
                                    <a
                                        className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                        href="#"
                                    >
                                        <b className="bg-white pe-3">Read More</b>{" "}
                                        <i className="bi bi-arrow-right bg-white ps-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.6s">
                            <div className="feature-item border h-100">
                                <div className="feature-icon btn-xxl-square bg-info mb-4 mt-n4">
                                    <i className="fa fa-tools fa-2x text-white" />
                                </div>
                                <div className="p-5 pt-0">
                                    <h5 className="text-uppercase">Quality Tools</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur tellus augue.
                                    </p>
                                    <a
                                        className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                        href="#"
                                    >
                                        <b className="bg-white pe-3">Read More</b>{" "}
                                        <i className="bi bi-arrow-right bg-white ps-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* Features Start */}
            <div className="pb-6">
                <div
                    className="container-fluid feature mt-6 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <div className="container">
                        <div className="row g-0 justify-content-end">
                            <div className="col-lg-6 pt-5">
                                <div className="mt-5">
                                    <h1
                                        className="display-6 text-white text-uppercase mb-4 wow fadeIn"
                                        data-wow-delay="0.3s"
                                    >
                                        Why You should Choose Our welding Services
                                    </h1>
                                    <p className="text-light mb-4 wow fadeIn" data-wow-delay="0.4s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar
                                        tortor. Quisque vel lorem porttitor, malesuada arcu quis,
                                        fringilla risus. Pellentesque eu consequat augue.
                                    </p>
                                    <div className="row g-4 pt-2 mb-4">
                                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                            <div className="flex-column text-center border border-5 border-info p-5">
                                                <h1 className="text-white" data-toggle="counter-up">
                                                    9999
                                                </h1>
                                                <p className="text-white text-uppercase mb-0">
                                                    Satisfied Clients
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="flex-column text-center border border-5 border-info p-5">
                                                <h1 className="text-white" data-toggle="counter-up">
                                                    9999
                                                </h1>
                                                <p className="text-white text-uppercase mb-0">
                                                    Complete Projects
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-5 border-info border-bottom-0 p-5">
                                        <div
                                            className="experience mb-4 wow fadeIn"
                                            data-wow-delay="0.6s"
                                        >
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="text-white text-uppercase">
                                                    Experience
                                                </span>
                                                <span className="text-white">90%</span>
                                            </div>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    aria-valuenow={90}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                        <div className="experience wow fadeIn" data-wow-delay="0.7s">
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="text-white text-uppercase">Work Done</span>
                                                <span className="text-white">95%</span>
                                            </div>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    aria-valuenow={95}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* Newsletter Start */}
            <div
                className="container-fluid newsletter mt-6 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container pb-5">
                    <div className="bg-white p-5 mb-5">
                        <div className="row g-5">
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                                <h1 className="display-6 text-uppercase mb-4">Newsletter</h1>
                                <div className="d-flex">
                                    <i className="far fa-envelope-open fa-3x text-info me-4" />
                                    <p className="fs-5 fst-italic mb-0">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore lorem ipsum.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control border-0 bg-light"
                                        id="mail"
                                        placeholder="Your Email"
                                    />
                                    <label htmlFor="mail">Your Email</label>
                                </div>
                                <button className="btn btn-info w-100 py-3" type="submit">
                                    Submit Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* Service Start */}
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
            {/* Service End */}
            {/* Appoinment Start */}
            <div className="pt-6 pb-6">
                <div
                    className="container-fluid appoinment py-5 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <div className="container pt-5">
                        <div className="row gy-5 gx-0">
                            <div className="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
                                <h1 className="display-6 text-uppercase text-white mb-4">
                                    Have Any Query? Feel Free To Contact Us
                                </h1>
                                <p className="text-white mb-5 wow fadeIn" data-wow-delay="0.4s">
                                    The contact form is currently inactive. Get a functional and
                                    working contact form with Ajax &amp; PHP in a few minutes. Just
                                    copy and paste the files, add a little code and you're done.{" "}
                                    <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                                </p>
                                <div
                                    className="d-flex align-items-start wow fadeIn"
                                    data-wow-delay="0.5s"
                                >
                                    <div className="btn-lg-square bg-white">
                                        <i className="bi bi-envelope-at text-dark fs-3" />
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="text-white text-uppercase">Mail Us</h6>
                                        <span className="text-white">belteiiu@example.com</span>
                                    </div>
                                </div>
                                <hr className="bg-body" />
                                <div
                                    className="d-flex align-items-start wow fadeIn"
                                    data-wow-delay="0.6s"
                                >
                                    <div className="btn-lg-square bg-white">
                                        <i className="bi bi-telephone text-dark fs-3" />
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="text-white text-uppercase">Call Us</h6>
                                        <span className="text-white">0779888812</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-n5 wow fadeIn" data-wow-delay="0.7s">
                                <div className="bg-white p-5">
                                    <h2 className="text-uppercase mb-4">Contact Us</h2>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 bg-light"
                                                    id="name"
                                                    placeholder="Your Name"
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control border-0 bg-light"
                                                    id="mail"
                                                    placeholder="Your Email"
                                                />
                                                <label htmlFor="mail">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 bg-light"
                                                    id="mobile"
                                                    placeholder="Your Mobile"
                                                />
                                                <label htmlFor="mobile">Your Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 bg-light"
                                                    id="subject"
                                                    placeholder="Subject"
                                                />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control border-0 bg-light"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: 130 }}
                                                    defaultValue={""}
                                                />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="btn btn-info w-100 py-3" type="submit">
                                                Submit Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 wow fadeInUp" data-wow-delay="0.5s">
                    <iframe
                        className="w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameBorder={0}
                        style={{ minHeight: 500, border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex={0}
                    />
                </div>
            </div>
            {/* Contact End */}
            {/* Newsletter Start */}
            <div
                className="container-fluid newsletter mt-6 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container pb-5">
                    <div className="bg-white p-5 mb-5">
                        <div className="row g-5">
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                                <h1 className="display-6 text-uppercase mb-4">Newsletter</h1>
                                <div className="d-flex">
                                    <i className="far fa-envelope-open fa-3x text-info me-4" />
                                    <p className="fs-5 fst-italic mb-0">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore lorem ipsum.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control border-0 bg-light"
                                        id="mail"
                                        placeholder="Your Email"
                                    />
                                    <label htmlFor="mail">Your Email</label>
                                </div>
                                <button className="btn btn-info w-100 py-3" type="submit">
                                    Submit Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Appoinment End */}
            {/* Team Start */}
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

            {/* Team End */}
            {/* Testimonial Start */}
            <div className="container-fluid pt-6 pb-6">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <h1 className="display-6 text-uppercase mb-5">
                            What They’re Talking About Our Welding Work
                        </h1>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="testimonial-img">
                                <div className="animated flip infinite">
                                    <img className="img-fluid" src={Photos1} alt="Image" />
                                </div>
                                <div className="animated flip infinite">
                                    <img className="img-fluid" src={Photos2} alt="Image" />
                                </div>
                                <div className="animated flip infinite">
                                    <img className="img-fluid" src={Photos3} alt="Image" />
                                </div>
                                <div className="animated flip infinite">
                                    <img className="img-fluid" src={Photos4} alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item">
                                    <div className="d-flex align-items-center mb-4">
                                        <img className="img-fluid" src="img/testimonial-1.jpg" alt="" />
                                        <div className="ms-3">
                                            <div className="mb-2">
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                            </div>
                                            <h5 className="text-uppercase">Client Name</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                    <p className="fs-5">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                                        labore et tempor diam tempor erat.
                                    </p>
                                </div>
                                <div className="testimonial-item">
                                    <div className="d-flex align-items-center mb-4">
                                        <img className="img-fluid" src="img/testimonial-2.jpg" alt="" />
                                        <div className="ms-3">
                                            <div className="mb-2">
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                            </div>
                                            <h5 className="text-uppercase">Client Name</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                    <p className="fs-5">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                                        labore et tempor diam tempor erat.
                                    </p>
                                </div>
                                <div className="testimonial-item">
                                    <div className="d-flex align-items-center mb-4">
                                        <img className="img-fluid" src="img/testimonial-3.jpg" alt="" />
                                        <div className="ms-3">
                                            <div className="mb-2">
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                            </div>
                                            <h5 className="text-uppercase">Client Name</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                    <p className="fs-5">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                                        labore et tempor diam tempor erat.
                                    </p>
                                </div>
                                <div className="testimonial-item">
                                    <div className="d-flex align-items-center mb-4">
                                        <img className="img-fluid" src="img/testimonial-4.jpg" alt="" />
                                        <div className="ms-3">
                                            <div className="mb-2">
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                                <i className="far fa-star text-primary" />
                                            </div>
                                            <h5 className="text-uppercase">Client Name</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div>
                                    <p className="fs-5">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                                        labore et tempor diam tempor erat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid newsletter mt-6 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container pb-5">
                    <div className="bg-white p-5 mb-5">
                        <div className="row g-5">
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                                <h1 className="display-6 text-uppercase mb-4">Newsletter</h1>
                                <div className="d-flex">
                                    <i className="far fa-envelope-open fa-3x text-info me-4" />
                                    <p className="fs-5 fst-italic mb-0">
                                        Dolores sed duo clita tempor justo dolor et stet lorem kasd
                                        labore lorem ipsum.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control border-0 bg-light"
                                        id="mail"
                                        placeholder="Your Email"
                                    />
                                    <label htmlFor="mail">Your Email</label>
                                </div>
                                <button className="btn btn-info w-100 py-3" type="submit">
                                    Submit Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}