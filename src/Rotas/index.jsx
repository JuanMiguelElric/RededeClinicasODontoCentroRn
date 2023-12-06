import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicisl from "../pages/paginainicial";
import PageDeError from "../pages/error";
import Agendamento from "../pages/calendary";




export default function Rota(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<PaginaInicisl/>} />
                <Route path="calendary" element={<Agendamento />} />
                {/*<Route path="*" element={<PageDeError />}/>*/}
            </Routes>
        </BrowserRouter>

    );
}