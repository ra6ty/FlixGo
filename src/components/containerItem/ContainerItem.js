import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const ContainerItem = ({film}) => {
    return (
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="card">
                <div className="cover">
                    <img src={film.Poster} alt="poster"/>
                </div>
                <div className="content">
                    <Link to={"/catalog/" + film.imdbID} className='link' type="button">{film.Title}
                        <span>{film.Year}</span></Link>
                </div>
            </div>
        </div>
    );
};

ContainerItem.propTypes = {
    film: PropTypes.shape({
        Poster: PropTypes.string,
        Title: PropTypes.string,
        Year: PropTypes.string,
        imdbID: PropTypes.string
    })
}

export default ContainerItem;