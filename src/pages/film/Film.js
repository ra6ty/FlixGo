import React, {useEffect, useState} from 'react';
import "./Film.scss"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {Star} from "react-bootstrap-icons";
import axios from "axios";
import {useParams} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const Film = () => {
    let [responseFilm, setResponseFilm] = useState([])
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const {t} = useTranslation()

    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.omdbapi.com/?apikey=9282a34&plot=full&i=${params.id}`)
            .then((res) => {
                setResponseFilm(responseFilm = res.data)
                setLoading(false)
            })
    }, [params.id])

    return (
        <div>
            <Header/>
            <main>
                {loading ? <Loader/> : null}
                {responseFilm ? <section className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="row">
                                <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div className="cover">
                                        <img src={responseFilm.Poster} alt="#"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
                                    <div className="content">
                                        <h5>{responseFilm.Title}</h5>
                                        <div className="wrap">
                                            <p className="star">{responseFilm.Metascore}/100</p>
                                            <Star color="gold" size={25}/>
                                        </div>
                                        <ul className="meta">
                                            <li><span>{t("genre")}: </span>{responseFilm.Genre}</li>
                                            <li><span>{t("release")}: </span>{responseFilm.Year}</li>
                                            <li><span>{t("actors")}: </span>{responseFilm.Actors}</li>
                                            <li><span>{t("running time")}: </span>{responseFilm.Runtime}</li>
                                            <li><span>{t("box Office")}: </span>{responseFilm.BoxOffice}</li>
                                            <li><span>{t("country")}: </span>{responseFilm.Country}</li>
                                            <li><span>{t("awards")}: </span>{responseFilm.Awards}</li>
                                        </ul>
                                        <div className="description">
                                            {responseFilm.Plot}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> : null}
            </main>
            <Footer/>
        </div>
    );
};

Film.propTypes ={
    responseFilm:PropTypes.shape({
        Poster:PropTypes.string,
        Title:PropTypes.string,
        Genre:PropTypes.string,
        Year:PropTypes.number,
        Actors:PropTypes.string,
        BoxOffice:PropTypes.number,
        Runtime:PropTypes.number,
        Country:PropTypes.string,
        Awards:PropTypes.string,
        Plot:PropTypes.string,
        Metascore:PropTypes.number,
    })
}
export default Film;