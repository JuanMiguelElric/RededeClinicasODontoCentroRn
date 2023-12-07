import React, { Component } from "react";
import Menu from "../../components/menu";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export default class Agendamento extends React.Component{
    constructor(props){
        super(props)
            this.state={nome:"", phone:"", clinica:""}
            this.handleChangeNome = this.handleChangeNome.bind(this)
            //this.handleChangeClinica = this.handleChangeClinica.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    isValidNome(nome) {
        return nome.length >= 3 && isNaN(nome);
    }
      
    handleChangeNome(event) {
        const nome = event.target.value;
        this.setState({ nome: nome });
      
        if (!this.isValidNome(nome)) {
          console.log("Nome inválido");
          
        } else {
          console.log("Nome válido");
        }
     }
    handleSubmit(event){
        alert("Olá "+this.state.nome+ " Dono do telefone "+this.state.phone+"em breve um de nossos atendentes entrará em contato com você");
        event.preventDefault();
    }
    //função para o select
    
    render(){
        const ClinicasodontoLogicas=[
            {id:1, sigla:'cl1',nome:"Clinica1"},
            {id:2, sigla:"cl2",nome:"Clinica2"},
            {id:3, sigla:"cl3",nome:"Clinica3"},
            {id:4, sigla:"cl4",nome:"Clinica4"},
            {id:5, sigla:"cl5",nome:"Clinica5"},
            {id:6, sigla:"Cl6", nome:"Clinica6"}
        ]
        return(
            <>
                <div className="backgroundprimaryparty">
                    {/*<Menu />*/}

                    <div className="text-center text-white ">
                        <div className="landForm">
                            <h4>Agendamento:</h4>
                            <form onSubmit={this.handleSubmit}>
                                
                                <input type="text"  value={this.state.nome} onChange={this.handleChangeNome} className="Input" placeholder="Digite Seu nome" />

                                <br />
                                <div className="Input">
                                    <PhoneInput
                                        inputStyle={{width:"14rem",borderRadius:"3rem",height:"2rem",fontFamily:"Archivo Black",fontSize:"16px"}}
                                        
                                        country={'br'}
                                        containerClass={'Phone'}
                                      
                                        
                                        
                                        //containerStyle={{marginLeft:'20%', }}
                                        value={this.state.phone}
                                        onChange={phone => this.setState({ phone })}
                                        isValid={(value, country) => {
                                            if (value.match(/12345/)) {
                                              return 'Invalid value: '+value+', '+country.name;
                                            } else if (value.match(/1234/)) {
                                              return false;
                                            } else {
                                              return true;
                                            }
                                        }}
                                    
                                    />
                                </div> 

                                <select name=""  placeholder=" clinica mais proxima de você">
                                    {ClinicasodontoLogicas.map(({id,sigla,nome})=>(
                                        <option key={id} value={sigla}>{nome}</option>
                                    ))}
                                </select>
                                <br />
                                <input type="submit" className="btn btn-primary" style={{marginTop:"0.9rem",height:"2rem",borderRadius:"7rem" }} value="Agendar!" />
                            </form>

                        </div>
                    </div>
                    
                </div>            
            </>
        )
    }

}