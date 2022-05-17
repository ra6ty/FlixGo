import React from "react";
import "./App.scss"
import Main from "../../pages/main/Main";
import Catalog from "../../pages/catalog/Catalog";
import Film from "../../pages/film/Film";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../../i18n"

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Main/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/catalog/:id" element={<Film/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;