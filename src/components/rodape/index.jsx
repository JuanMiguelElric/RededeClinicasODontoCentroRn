import React from "react";
import Logo from "../../../Imagens/logo.png";
import { SocialIcon } from 'react-social-icons'

const Rodape = () =>{
    return(
        <>
            <footer className="container-fluid text-center text-lg-start bg-body-tertiary text-muted" style={{backgroundColor:"blue"}}>
                {/*<img src={Logo} style={{width:"160px", borderTopColor:"blue"}} alt="logo rodape" />*/}

                <div className="row">
                    <div className="col-4">
                        <ul className="nav flex-column">
                            <li className="nav-link">Especialidades</li>
                            <li className="nav-link">Sobre</li>
                            <li className="nav-link">Unidades</li>
                            <li className="nav-link">Aplicativo</li>
                            <li className="nav-link">Agendar Consulta</li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <h3>Siga nossas redes Sociais</h3>

                        <ul className="nav">
                            <li className="nav-link"><SocialIcon url="https://linkedin.com/in/couetilc" /></li>
                            <li className="nav-link"><SocialIcon network="instagram" /></li>
                            <li className="nav-link"><SocialIcon network="facebook" /></li>
                            <li className="nav-link"><SocialIcon network="tiktok" /></li>
                        </ul>
                        <br />
                        <br />
                        <img src={Logo} className="justify-content-center" style={{width:"160px"}} alt="logo rodape" />
                    </div>
                </div>
                


            </footer>

        </>

    )
}
export default Rodape;