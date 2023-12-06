import React, { useState } from "react";
import Logo from "../../../Imagens/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hamburger from 'hamburger-react';
import { Link } from "react-router-dom";

const Menu = () => {
    const [aberto, setAberto] = useState(false);

    const toggleSidebar = () => {
        aberto === true ? setAberto(false):setAberto(true)
    }

    return (
        <>
            <nav className="navbar navbar-inverse  ">
                <div className="container ">
                    <div className="navbar-header">
                        <img src={Logo} className="navbar-brand" style={{ width: "160px" }} alt="logo" />
                    </div>

                    <ul className="d-flex p-3 ">
                        <li className="d-none d-xl-block">Especialidades</li>
                        <li className="d-none d-xl-block">Sobre</li>
                        <li className="d-none d-xl-block">Unidades</li>
                        <li className="d-none d-xl-block">Aplicativo</li>
                        <li className="d-none d-xl-block">
                            <Link to="/agendar">
                                <button type="button" className="btn btn-md btn-outline-dark text-primary" style={{ borderRadius: "20px" }}>Agendar</button>
                            </Link>
                        </li>

                        <li className="float-sm-right d-xl-none d-lg-none d-xl-block">
                            {/*
                            <div className="nav-link" onClick={toggleSidebar}>
                                <Hamburger toggled={aberto} toggle={setAberto} />
                            </div>
                             */}
                             <div className="btn btn-primary" onClick={toggleSidebar} >
                                   
                            </div>

                            <div className={`menu-item ${aberto ? 'active' : ''}`}>
                            <div className="btn btn-primary" onClick={toggleSidebar}></div>
                                <p>deu certo</p>
                                <p></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu;
