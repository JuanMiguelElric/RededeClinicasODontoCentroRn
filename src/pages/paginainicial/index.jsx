import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "../../components/menu";
import PrimaryParty from "./primarypaty";
import SecundaryParty from "./secundaryparty";
import TerceiraParty from "./terceirypaty";
import ForParty from "./forparty";
import Rodape from "../../components/rodape";

class PaginaInicisl extends React.Component{
    render(){
        return(
            <>  
                <div className="backgroundprimaryparty">
                    <Menu />
                    <PrimaryParty/>

                </div>
                <SecundaryParty />
                <TerceiraParty />
                <br />
                <ForParty />
                <br />
                <Rodape />
            </>
           
            

        )
    }
}
export default PaginaInicisl