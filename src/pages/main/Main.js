import React from 'react';
import "./Main.scss"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Radium, {StyleRoot} from "radium";
import {fadeInDown} from "react-animations";
import {useTranslation} from "react-i18next";

const Main = () => {

    const {t} = useTranslation()

    const mainStyle = {
        background: "linear-gradient( rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.8) ), url(./images/bg.jpg)"
    };

    const stylesAnimation = {
        fadeInDown: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
        }
    }

    return (<div>
       <Header/>
        <main>
            <StyleRoot>
                <h1 style={stylesAnimation.fadeInDown}>{t("title")}</h1>
            </StyleRoot>
            <section>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/1p.jpg" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading Escape from Shaushenko")}</h3>
                                    <p>{t("text Escape from Shaushenko")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/2p.webp" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading The Godfather")}</h3>
                                    <p>{t("text The Godfather")}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/3p_.jpg" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading Schindler's list")}</h3>
                                    <p>{t("text Schindler's list")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/4p.jpg" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading Criminal reading")}</h3>
                                    <p>{t("text Criminal reading")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/5p.jpg" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading The Lord of the Rings")}</h3>
                                    <p>{t("text The Lord of the Rings")}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/6p.jpg" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading Fight Club")}</h3>
                                    <p>{t("text Fight Club")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={mainStyle}>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/7p.jpg" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading Forrest Gamp")}</h3>
                                    <p>{t("text Forrest Gamp")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/8p.jpg" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading Beginning")}</h3>
                                    <p>{t("text Beginning")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/9p.webp" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading Matrix")}</h3>
                                    <p>{t("text Matrix")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="row">
                                <div className="col-sm-12 col-xl-6">
                                    <img src="./images/10p.jpg" alt="test61"/>
                                </div>
                                <div className="col-sm-12 col-xl-6">
                                    <h3>{t("heading Vermin")}</h3>
                                    <p>{t("text Vermin")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners">
                <div className="row">
                    <div className="col-12">
                        <h2>{t("partners")}</h2>
                    </div>
                    <div className="col-12">
                        <p>{t("text partners")}</p>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="test5" className="partner">
                            <img src="./images/themeforest-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="test699" className="partner">
                            <img src="./images/audiojungle-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="test61test66" className="partner">
                            <img src="./images/codecanyon-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="test64" className="partner">
                            <img src="./images/photodune-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="test61" className="partner">
                            <img src="./images/activeden-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                        <a href="test62" className="partner">
                            <img src="./images/3docean-light-background.png" alt="" className="partner__img"/>
                        </a>
                    </div>
                </div>
            </section>
        </main>
       <Footer/>
    </div>);
};

export default Main;
