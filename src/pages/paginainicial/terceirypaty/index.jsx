import React from "react";
import { Fade } from "react-awesome-reveal";

import Clinica_geral from "../../../../Imagens/clinicaGeral.png";

import cirurgiaMenor from "../../../../Imagens/cirurgiaMenor.png";

import endondotia from "../../../../Imagens/endondotia.png"

import implante_dentario from "../../../../Imagens/implante-dentario.png";
import pedioFontologia from "../../../../Imagens/pediatria.png";
import ortodontia from "../../../../Imagens/ortodontico.png";
import radiologia from "../../../../Imagens/raio-x.png";

import ScrollCarousel from 'scroll-carousel-react';



const TerceiraParty =() =>{

  
    return(
        <>
            <div className="container-fluid">
                <div className="container ">
                    <Fade cascade damping={0.5}>
                        <div className="text-left text-primary" style={{paddingTop:'7em'}}>
                            
                            <h5 className=" h2">Conheça</h5>
                            <h6 className="h3">nossos serviços</h6>

                        </div>

                    </Fade>
                    <div>
                        <Fade>
                            <div className="row" style={{gap:'6em'}}>
                                <ScrollCarousel
                                autoplay={true}
                                autoplaySpeed={6}
                                speed={1}
                                onReady={()=>console.log('i am ready')}
                                >
                                    {[
                                        {imagem:Clinica_geral, texto:"Clinica Geral"},
                                        {imagem:cirurgiaMenor, texto:"Cirurgia Menor"},
                                        {imagem:endondotia, texto:"Endondotia"},
                                        {imagem:implante_dentario, texto:"Implante Dentário"},
                                        {imagem:ortodontia, texto:"Ortodontia"},
                                        {imagem:radiologia, texto:"Radiologia"},
                                        {imagem:pedioFontologia, texto:"Pediontria"},

                                        ].map((servico,index)=>(
                                        <div key={index} className="cardservice cool">
                                          <img src={servico.imagem} style={{width:"7rem"}} alt="" />
                                          <div className="text-primary">
                                            <p style={{fontSize:'1em'}}>{servico.texto}</p>
                                          </div>

                                        </div>
                                         
                                    ))}

                                </ScrollCarousel>
                            </div>

                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TerceiraParty;