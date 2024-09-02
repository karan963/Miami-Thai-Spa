import React from 'react'
import logo from './images/logo1.jpg';
export default function Navbar() {

    // const divStyle = {
    //     backgroundColor: '#2c1c0c', // camelCase for CSS properties
    // };

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className='logo' src={logo} alt="Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{ color: 'white' }}>ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{ color: 'white' }}>GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{ color: 'white' }}>ONLINE BOOKING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{ color: 'white' }}>MEMBERSHIP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{ color: 'white' }}>CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}
