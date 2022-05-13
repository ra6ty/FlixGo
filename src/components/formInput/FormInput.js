import React from 'react';
import "./FormInput.scss"

const FormInput = () => {
    return (
        <form className="form">
            <input placeholder="Назва фільму" type="text"/>
            <button className='button' type="button">Знайти</button>
        </form>
    );
};

export default FormInput;
