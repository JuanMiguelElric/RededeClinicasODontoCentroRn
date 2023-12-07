import React from "react";
import Logo from "../../../Imagens/logo.png";

const Rodape = () =>{
    return(
        <>
            <footer className="container-fluid text-center text-lg-start bg-body-tertiary text-muted" style={{backgroundColor:"blue"}}>
                <img src={Logo} style={{width:"160px", borderTopColor:"blue"}} alt="logo rodape" />
                


            </footer>

        </>

    )
}
export default Rodape;