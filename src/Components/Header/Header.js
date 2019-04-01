import React, {Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import './Header.css';
import logo from '../../assets/SKILLFLEAsset_5.png';

const Header = () => (
    <header>
        <div class="header">
            <a href="#default" class="logo"><img src={logo} alt="Skillfle Logo" /></a>
            <div class="header-right">
                <a class="active" href="#about">About</a>
                <a href="#company">Company</a>
                <a href="#connect">Connect</a>
                <a href="#signup">Sign Up</a>
            </div>
        </div>
        {/* <div className="header">
            <Row>
                <a href="#" className="logo"><img src={logo} alt="SKillfle Logo"/></a>
                <ul class="main-nav">
                    <li><a href="#about">About</a></li>
                    <li><a href="#company">Company</a></li>
                    <li><a href="#connect">Connect</a></li>
                    <li><a href="#plans">Sign up</a></li>
                </ul>
            </Row>
        </div> */}
        <div className="landing_page">
            <div className="hero-text-box">
                <h1>Free Skills to careers</h1>
                <p>100% free courses from top universities and companies</p>
                <button>Join for free</button>
            </div>
        </div>
    </header>
)

export default Header;