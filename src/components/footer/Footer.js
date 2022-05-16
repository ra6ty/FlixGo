import React from 'react';
import {Facebook, Instagram, Linkedin, Twitter} from "react-bootstrap-icons";
import "./Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div>
                <h6 className="title">Contact</h6>
                <ul className="list">
                    <li><a href="tel:+18002345678">+1 (800) 234-5678</a></li>
                    <li><a href="mailto:support@moviego.com">support@flixgo.com</a></li>
                </ul>
                <ul className="social">
                    <li className="facebook"><a href="test6122"><Facebook color="royalblue" size={30}/></a></li>
                    <li className="instagram"><a href="test6122"><Instagram color="white" size={30}/></a></li>
                    <li className="twitter"><a href="test6122"><Twitter color="#0dcaf0" size={30}/></a></li>
                    <li className="linkedin"><a href="test6122"><Linkedin color="royalblue" size={30}/></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
