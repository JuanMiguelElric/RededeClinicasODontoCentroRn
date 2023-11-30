import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../../../Imagens/imagensfeed/img1.png"
import img1 from"../../../../Imagens/imagensfeed/img2.png"
import img2 from "../../../../Imagens/imagensfeed/img3.png"
import img3 from "../../../../Imagens/imagensfeed/img4.png"

import { AiOutlineWhatsApp } from "react-icons/ai";

const ForParty = () =>{
    return(
        <>
            <div className="container-fluid " style={{backgroundColor:"#019FEE", height:'5rem',paddingTop:"2rem"}}>
                <div className="container text-center text-white">
                    <h3>Locais de Atendimento!</h3>
                </div>

            </div>
            <div className="container image-map justify-content-xl-center">
                
            </div>
            <div className="container-fluid" style={{backgroundColor:"#D9D9D9"}}>
                <div className="container text-center " style={{padding:"1rem"}}>
                    <h2>Descuba a odonto Digital<br /> mais perto de você!</h2>
                    <br />
                    <button className="btn btn-success" style={{borderRadius:'1rem'}} > <AiOutlineWhatsApp /> Agendar Consulta</button>
                </div>

            </div>
            <div className="container-fluid ">
                <div className="container text-center text-primary">
                    <br />
                    <br />
                    <h2>Oque está acontencendo  <br /> <strong>no nosso feed!</strong></h2>

                    <div className="row no-gutters">

                        {[img,img1,img2,img3,"im4"].map((index)=>(
                            <div key={index} className="col-5 align-self-sm-center mb-2" style={{marginLeft:"4rem"}}>
                                <div>
                                    <img src={index} style={{width:"100%"}} alt="" />

                                </div>

                            </div>

                            

                            ))}
                    </div>



                </div>
            </div>
            <div className="container-fluid" style={{background:"blue"}}>
                opapapa
            </div>
        
        </>

    )
}
export default ForParty;