import React from "react";

export default class SignupPage extends React.Component{
    render(){
        return(
            <div>
                <h2>Cadastro</h2>
                <input placeholder={"Serviço"}/>
                <input placeholder={"Descrição"}/>
                <input placeholder={"Preço"}/>
                <input placeholder={"Data de prazo"}/>
                <button>Enviar</button>
            </div>
        )
    }
}