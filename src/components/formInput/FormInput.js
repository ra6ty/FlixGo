import React from 'react';
import "./FormInput.scss"

const FormInput = ({searchFilm,inputVal,setInputVal}) => {
    return (
        <form className="form">
            <input placeholder="Назва фільму" type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
            <button className='button' onClick={searchFilm} type="button">Знайти</button>
        </form>
    );
};

export default FormInput;
