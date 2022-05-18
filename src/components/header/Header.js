import React from 'react';
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import "./Header.scss"
import {useTranslation} from "react-i18next";

const Header = () => {

    const {t, i18n} = useTranslation()

    const changeLangUA = () => {
        i18n.changeLanguage("uk")
    }
    const changeLangEN = () => {
        i18n.changeLanguage("en")
    }

    let styleTextInButton = {
        color: "#d63384"
    }

    return (
        <header>
            <a className="logo" href="/"><img src="/images/logo.svg" alt="#"/></a>
            <div className="menu">
                <Link to="/" className='link' type="button">{t("home button")}</Link>
                <Link to="/catalog" className='link' type="button">{t("catalog")}</Link>
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {t("choose language")}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {i18n.language === "uk" ?  <Dropdown.Item style={styleTextInButton} onClick={changeLangUA} href="#/action-1">UK</Dropdown.Item> :
                        <Dropdown.Item onClick={changeLangUA} href="#/action-1">UK</Dropdown.Item>}
                    {i18n.language === "en" ?  <Dropdown.Item onClick={changeLangEN} style={styleTextInButton} href="#/action-2">EN</Dropdown.Item>:
                        <Dropdown.Item onClick={changeLangEN} href="#/action-2">EN</Dropdown.Item>}
                </Dropdown.Menu>
            </Dropdown>
        </header>
    );
};

export default Header;
