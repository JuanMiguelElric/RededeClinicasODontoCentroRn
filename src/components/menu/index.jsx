import React,{useState} from "react";
import Logo from "../../../Imagens/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hamburger from 'hamburger-react';

const Menu =()=>{
    const [aberto,setaberto ]= useState(false);
   
    return(
        <>
            <nav className="navbar navbar-inverse  ">
                <div className="container ">
                    <div className="navbar-header">
                        <img src={Logo} className="navbar-brand" style={{width:"160px"}} alt="logo" />
                         

                    </div>
                    <ul className="d-flex p-3 ">
                        <li className="d-none d-xl-block">Especialidades</li>
                        <li className=" d-none d-xl-block ">Sobre</li>
                        <li className=" d-none d-xl-block">Unidades</li>
                        <li className=" d-none d-xl-block">Aplicativo</li>
                        <li className="d-none d-xl-block">
                            <button type="button" className="btn btn-md btn-outline-dark text-primary" style={{borderRadius:"20px"}}>Agendar</button>

                        </li>
                        <li className="float-sm-right d-xl-none d-lg-none d-xl-block " > 
                            <div className="nav-link ">
                                <Hamburger toggled={aberto} toggle={setaberto}   />
                                
                            </div>
                            {aberto &&(
                                <div className="menu-item">
                                    <p>jajjaj</p>
                                </div>
                            )}
                            

                        
                        </li>
                        
                        
                    </ul>

                </div>

            </nav>
        </>
    )
}
export default Menu;