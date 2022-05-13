import React from 'react';
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import "./Header.scss"

const Header = () => {
    return (
        <header>
            <a className="logo" href="#"><img src="./images/logo.svg" alt="#"/></a>
            <div className="menu">
                <Link to={`/`} className='link' type="button">ГОЛОВНА</Link>
                <Link to={`/catalog`} className='link' type="button">КАТАЛОГ</Link>
                <Link to={`/id`} className='link' type="button">ПРО ФІЛЬМ</Link>
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    ЗМІНА МОВИ
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">UK</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">EN</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </header>
    );
};

export default Header;