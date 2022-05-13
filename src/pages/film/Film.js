import React from 'react';
import "./Film.scss"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {Star} from "react-bootstrap-icons";

const Film = () => {
    return (
        <div>
            <Header/>
            <main>
                <section className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="row">
                                <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div className="cover">
                                        <img src="./images/cover.jpg" alt="#"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
                                    <div className="content">
                                        <h5>Name of film</h5>
                                        <div className="wrap">
                                            <p className="star">8.4</p>
                                            <Star color="gold" size={25}/>
                                        </div>
                                        <ul className="meta">
                                            <li><span>Genre: </span>Action Triler</li>
                                            <li><span>Release year: </span> 2017</li>
                                            <li><span>Running time: </span> 120 min</li>
                                            <li><span>Country: </span>USA</li>
                                            <li><span>Awards: </span>Awards</li>
                                        </ul>
                                        <div className="description">
                                            It is a long established fact that a reader will be distracted by the
                                            readable content of a page when looking at its layout. The point of
                                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                                            letters, as opposed to using 'Content here, content here', making it
                                            look like readable English. Many desktop publishing packages and web
                                            page editors now use Lorem Ipsum as their default model text, and a
                                            search for 'lorem ipsum' will uncover many web sites still in their
                                            infancy.
                                        </div>
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

export default Film;