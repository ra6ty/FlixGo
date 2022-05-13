import React from 'react';
import {Facebook, Instagram, Linkedin, Twitter} from "react-bootstrap-icons";
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className='row'>
            <div className="col-12 col-md-3">
                <p className="title">Завантажте наш додаток</p>
                <ul className="list app">
                    <li><a href="test1"><img src="./images/Download_on_the_App_Store_Badge.svg" alt=""/></a></li>
                    <li><a href="test2"><img src="./images/google-play-badge.png" alt=""/></a></li>
                </ul>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
                <h6 className="title">Resources</h6>
                <ul className="list">
                    <li><a href="test6122">About Us</a></li>
                    <li><a href="test6122">Pricing Plan</a></li>
                    <li><a href="test6122">Help</a></li>
                </ul>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
                <h6 className="title">Legal</h6>
                <ul className="list">
                    <li><a href="test6122">Terms of Use</a></li>
                    <li><a href="test6122">Privacy Policy</a></li>
                    <li><a href="test6122">Security</a></li>
                </ul>
            </div>
            <div className="col-12 col-sm-4 col-md-3">
                <h6 className="title">Contact</h6>
                <ul className="list">
                    <li><a href="tel:+18002345678">+1 (800) 234-5678</a></li>
                    <li><a href="mailto:support@moviego.com">support@flixgo.com</a></li>
                </ul>
                <ul className="social">
                    <li className="facebook"><a href="test6122"><Facebook color="royalblue" size={30}/></a></li>
                    <li className="instagram"><a href="test6122"><Instagram color="white" size={30}/></a></li>
                    <li className="twitter"><a href="test6122"><Twitter color="test61220dcaf0" size={30}/></a></li>
                    <li className="linkedin"><a href="test6122"><Linkedin color="royalblue" size={30}/></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
