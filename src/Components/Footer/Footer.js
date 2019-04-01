import React, {Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import '../../vendors/grid.css';
import './Footer.css';
import logo from '../../assets/SKILLFLEAsset_5.png'

const Footer = () => (
    <footer>
        <div className="row">
            <div className="col span_1_of_3">
            <img className="widget-title" src={logo} alt='logo of skillfle'/>
            <p>Skillfle provides universal access to the world’s best education, partnering with top universities and organizations to offer courses online.</p>
            </div>
            <div className="col span_1_of_3 links">
                <h3 className="widget-title">SKILLFLE</h3>
                <ul className="footer-nav">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">iOS App</a></li>
                    <li><a href="#">Android App</a></li>
                </ul>
            </div>
            <div className="col span_1_of_3 connect">
                <h3 className="widget-title">CONNECT US</h3>
                <ul className="social-links">
                    <li><a href="#"><i className="fa fa-facebook-square"></i>Facebook</a></li>
                    <li><a href="#"><i className="fa fa-twitter-square"></i>Twitter</a></li>
                    <li><a href="#"><i className="fa fa-google-plus-square"></i>Google</a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i>Instagram</a></li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer;