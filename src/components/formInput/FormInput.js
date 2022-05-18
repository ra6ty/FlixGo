import React from 'react';
import "./FormInput.scss"
import {useTranslation} from "react-i18next";

const FormInput = ({searchFilm, inputVal, setInputVal}) => {

    const {t} = useTranslation()

    return (
        <form className="form">
            <input placeholder={t("placeholder")} type="text" value={inputVal}
                   onChange={(e) => setInputVal(e.target.value)}/>
            <button className='button' onClick={searchFilm} type="button">{t("search button")}</button>
        </form>
    );
};

export default FormInput;
