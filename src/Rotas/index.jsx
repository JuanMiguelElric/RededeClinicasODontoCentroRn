import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicisl from "../pages/paginainicial";
import Agendamento from "../pages/calendary";




export default function Rota(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="RededeClinicasODontoCentroRn/"index element={<PaginaInicisl/>} />
                <Route path="RededeClinicasODontoCentroRn/calendary" element={<Agendamento />} />
                
            </Routes>
        </BrowserRouter>

    );
}