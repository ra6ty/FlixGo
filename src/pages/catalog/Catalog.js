import React, {useState, useEffect} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Catalog.scss"
import FormInput from "../../components/formInput/FormInput";
import axios from "axios";
import ContainerItem from "../../components/containerItem/ContainerItem";
import {fadeInDown} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Loader from "../../components/loader/Loader";
import PropTypes from 'prop-types'
import {useTranslation} from "react-i18next";


const Catalog = () => {
    const [inputVal, setInputVal] = useState("")
    let [responseCatalog, setResponseCatalog] = useState([])
    const [errorFetch, setErrorFetch] = useState(false)
    const [checkLengthOfInput, setCheckLengthOfInput] = useState(false)
    const [loading, setLoading] = useState(false)
    let store = require('store')
    const {t} = useTranslation()

    const stylesAnimation = {
        fadeInDown: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
        }
    }

    useEffect(() => {
        setResponseCatalog(store.get('film'))
    }, [])

    const searchFilm = () => {
        setErrorFetch(false)

        if (inputVal.length < 3) {
            setCheckLengthOfInput(true)
            return
        }

        const value = inputVal.replace(/[^a-zA-Z+(?:-?-)]/, "");

        setLoading(true)
        axios.get(`https://www.omdbapi.com/?s=${value}&apikey=9282a34`)
            .then(res => {
                if (res.data.Response === "False") {
                    setErrorFetch(true)
                    store.remove('film')
                    setResponseCatalog([])
                    setCheckLengthOfInput(false)
                    setLoading(false)
                    return
                }
                setLoading(false)
                setResponseCatalog(responseCatalog = res.data.Search)
                setCheckLengthOfInput(false)
                store.set('film', responseCatalog)
            })
    }

    const catalogStyle = {
        background: "linear-gradient( rgba(255, 255, 255, 0.01),rgba(0, 0, 0, 0.7) ), url(./images/bg.jpg)"
    };

    return (
        <div>
            <Header/>
            <main>
                <StyleRoot>
                    <h4 style={stylesAnimation.fadeInDown}>{t("catalog")}</h4>
                </StyleRoot>
                <section style={catalogStyle} className="input">
                    <FormInput searchFilm={searchFilm} inputVal={inputVal} setInputVal={setInputVal}/>
                    <StyleRoot>
                        {errorFetch ? <p style={stylesAnimation.fadeInDown}>{t("not found")}</p> : null}
                        {checkLengthOfInput ? <p style={stylesAnimation.fadeInDown}>{t("few letters")}</p> : null}
                    </StyleRoot>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            {loading ? <Loader/> : null}
                            {responseCatalog?.length ? responseCatalog.map((el) => {
                                return <ContainerItem key={el.imdbID} film={el}/>
                            }) : null}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

Catalog.prototype = {
    responseCatalog: PropTypes.shape({
        imdbID: PropTypes.string
    })
}

export default Catalog;
