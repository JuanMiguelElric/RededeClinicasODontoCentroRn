import React from "react";
import mulher from "../../../../Imagens/mulher.png";


const PrimaryParty =() =>{
    return(
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-6 d-none d-xl-block  ">
                        <img src={mulher} style={{width:"600px"}} alt="mulher clinica"/>
                    </div>
                    <div className="col-sm-6">
                        {/*h1 titulo para tela grande */}
                        <h1 className="h1 text-primary 	d-none d-sm-block float-md-right">Odonto <br /> Centro</h1>
                        {/*h2 para telas de celular*/}
                        <h2 className="h2 text-primary  d-lg-none d-xl-block d-xl-none"style={{fontSize:'4rem'}}>Odonto <br /> Digital</h2>
                        <h4 className=" h4 text-primary">Transformando sorrisos<br /> Transformando vidas!</h4>
                        <div className="d-flex flex-row-reverse ">
                            <button className="btn btn-primary active ">Agende sua consulta agora!</button>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}
export default PrimaryParty;