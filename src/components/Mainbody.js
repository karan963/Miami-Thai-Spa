import React from "react";
import arrow from './images/arrow.png'
import image1 from './images/img1.jpg'
import imgcard1 from './images/imgcard1.jpg'
import imgcard2 from './images/imgcard2.jpg'
import imgcard3 from './images/imgcard3.jpg'
import imgcard4 from './images/imgcard4.jpg'
import imgcard5 from './images/imgcard5.jpg'
import newImg1 from './images/newImg1.jpg'
import newImg2 from './images/newImg2.jpg'
import newImg3 from './images/newImg3.jpg'
import newImg4 from './images/newImg4.jpg'
import newImg5 from './images/newImg5.jpg'
import newImg6 from './images/newImg6.jpg'
import footerlogo from './images/footerlogo.jpg'

export default function Firstbody() {
    const myStyle = {
        backgroundColor: '#cdc4c400'
    }
    return (
        <>
            <div className="container" style={{ myStyle }}>
                <div className="left-side">
                    <p className="content">Soothe Your Body,</p>
                    <p className="content">Calm Your Mind,</p>
                    <p className="content">Nourish Your Soul</p>
                    <p className="desc">It's a technique that has been around for thousands of years and is one of the most common forms of alternative medicine in Thailand.</p>
                    <img className='arrow' src={arrow} alt="arrow" />
                </div>
                <div className="right-side"></div>
            </div>
            <div className="container2" style={{ myStyle }}>
                <img className="img1" src={image1} alt="img1" />
            </div>
            <div className="card-box">
                <div className="big-card">
                    <h1>Let Your Mind calm</h1>
                    <p className="desc">Through gentle and controlled movements, Thai stretching stimulates the body's natural energy flow, reducing muscle tightness and enhancing flexibility. This dynamic therapy encourages the body to reconnect with its natural balance and helps to calm the mind.</p>
                </div>
                <div className="card">
                    <img src={imgcard1} className="card-img-top" alt="imgcard1" />
                    <div className="card-body">
                        <p className="card-text">Sports massage <i className="fa-solid fa-arrow-right"></i></p>
                    </div>
                </div>
                <div className="card">
                    <img src={imgcard2} className="card-img-top" alt="imgcard2" />
                    <div className="card-body">
                        <p className="card-text">Back Massage <i className="fa-solid fa-arrow-right"></i></p>
                    </div>
                </div>
                <div className="card">
                    <img src={imgcard3} className="card-img-top" alt="imgcard3" />
                    <div className="card-body">
                        <p className="card-text">Thai herbal massage <i className="fa-solid fa-arrow-right"></i></p>
                    </div>
                </div>
            </div>
            <div className="container3" style={{ myStyle }}>

                <div className="left-panel">
                    <div className="card">
                        <img src={imgcard4} className="imgcard4" alt="imgcard4" />
                        <div className="card-body">
                            <p className="card-text">Aromatherapy massage <i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                    </div>
                </div>

                <div className="right-panel">
                    <div className="card">
                        <div className="card-body">
                            <h2>About Miami Thai Spa</h2>
                            <p className="card-text">Our spa provides a unique experience that is focused on you as an individual. Our expert therapists provide the highest quality of personal care service, ensuring that you leave feeling refreshed and invigorated. With our wide range of massages available, we are certain to have something that will suit your needs.</p>
                        </div>
                        <img src={imgcard5} className="imgcard5" alt="imgcard5" />
                        <div className="imgtext">
                            <p>Authentic Thai Techniques <i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container4" style={{ myStyle }}>
                <div className="first-sec">
                    <div className="card">
                        <img src={imgcard4} className="first-sec-img1" alt="imgcard4" />
                    </div>
                    <div className="card">
                        <img src={newImg1} className="first-sec-img1" alt="newImg1" />
                    </div>
                </div>

                <div className="second-sec">
                    <div className="card">
                        <img src={imgcard5} className="second-sec-img1" alt="imgcard5" />
                    </div>
                    <div className="card">
                        <img src={newImg2} className="second-sec-img2" alt="newImg2" />
                    </div>
                    <div className="card">
                        <img src={newImg3} className="second-sec-img3" alt="newImg3" />
                    </div>
                </div>

                <div className="third-sec">
                    <div className="card">
                        <img src={newImg4} className="third-sec-img1" alt="newImg4" />
                    </div>
                    <div className="card">
                        <img src={newImg5} className="third-sec-img2" alt="newImg5" />
                    </div>
                </div>
            </div>

            <div className="container5">
                <div className="left-box">
                    <h1>Schedule Your Wellness Journey</h1>
                    <p>Thai massage is a form of therapeutic touch that differs in many ways from traditional massage. Instead of a massage table, you lie on a mat on the floor while the provider manipulates your body in certain ways to stimulate organs and improve flexibility. Thai massage is part of traditional Thai medicine.</p>
                    <button>Book Now</button>
                </div>
                <div className="right-box">
                    <div className="box-leftside">
                        <div className="card">
                            <img src={newImg4} className="boximg1" alt="newImg5" />
                        </div>
                    </div>
                    <div className="box-rightside">
                        <div className="empty">

                        </div>
                        <div className="card">
                            <img src={newImg6} className="boximg2" alt="newImg5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container6">
                <div className="web-left">
                    <div className="card">
                        <img src={newImg6} className="web-left-img" alt="newImg5" />
                    </div>
                </div>
                <div className="web-right">
                    <div className="web-right-top">
                        <h1>Miami Thai Spa Opening Hours</h1>
                    </div>
                    <div className="web-right-middle">
                        <h2>Opening Hours</h2>
                        <p>1 June - 20 August, 07:00-24:00</p>
                        <p>21 August - 31 May, 08:00-22:00</p>
                    </div>
                    <div className="web-right-last">
                        <p>View all opening hours <i className="fa-solid fa-arrow-right"></i></p>
                        <p>How to get here <i className="fa-solid fa-arrow-right"></i></p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-left">
                    <div className="card">
                        <img src={footerlogo} className="footer-left-img" alt="footerlogo" />
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-box1">
                        <h1>Our Services</h1>
                        <div className="footer-list">
                            <p>&#10146; Thai Massage</p>
                            <p>&#10146; Swedish Massage</p>
                            <p>&#10146; Four Hands Massage</p>
                            <p>&#10146; Deep Tissue Massage</p>
                            <p>&#10146; Couples Massage</p>
                        </div>
                    </div>
                    <div className="footer-right-box2">
                        <h1>Contact Us</h1>
                        <div className="footer-list">
                            <p>&#10146; Contact No.: +91 7709572387</p>
                            <p>&#10146; Opening Time: 10:30 AM - 10:30 PM</p>
                            <p>&#10146; Address: Nebula Park, Khadakpada Rd,</p>
                            <p>Opposite Mohan Heights, Near</p>
                            <p>Waylenagar, Beturkar Pada, Kalyan</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
