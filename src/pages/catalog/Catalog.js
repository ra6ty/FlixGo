import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Catalog.scss"
import FormInput from "../../components/formInput/FormInput";

const Catalog = () => {

    const style2 = {
        background: "linear-gradient( rgba(255, 255, 255, 0.01),rgba(0, 0, 0, 0.7) ), url(./images/bg.jpg)"
    };

    return (
        <div>
            <Header/>
            <main>
                <h4>КАТАЛОГ</h4>
                <section style={style2} className="input">
                    <FormInput/>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className="card">
                                    <div className="cover">
                                        <img src="./images/cover.jpg" alt="#"/>
                                    </div>
                                    <div className="content">
                                        <a href="#">Name of film  (3000)</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className="card">
                                    <div className="cover">
                                        <img src="./images/cover.jpg" alt="#"/>
                                    </div>
                                    <div className="content">
                                        <a href="#">Name of film  (3000)</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className="card">
                                    <div className="cover">
                                        <img src="./images/cover.jpg" alt="#"/>
                                    </div>
                                    <div className="content">
                                        <a href="#">Name of film  (3000)</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className="card">
                                    <div className="cover">
                                        <img src="./images/cover.jpg" alt="#"/>
                                    </div>
                                    <div className="content">
                                        <a href="#">Name of film  (3000)</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className="card">
                                    <div className="cover">
                                        <img src="./images/cover.jpg" alt="#"/>
                                    </div>
                                    <div className="content">
                                        <a href="#">Name of film  (3000)</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div className="card">
                                    <div className="cover">
                                        <img src="./images/cover.jpg" alt="#"/>
                                    </div>
                                    <div className="content">
                                        <a href="#">Name of film  (3000)</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Catalog;