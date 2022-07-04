import { Grid } from '@material-ui/core';
import React, { Component } from 'react'
import styled from 'styled-components'
import ServiceCard from './ServiceCard';

const ServicesContainer = styled.div`
    border: 1px solid blue;
`;

const ServicesHeader = styled.div`
    display: flex;
    align-items : center;
    justify-content: space-between;
    padding: 0 16px;
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`;



export default class ServicesListPage extends Component {


    
state = {
    minValue: "",
    maxValue: "",
    serviceSearch: "",
    order: "title"
}

onChangeInputMinValue = (e) => {
    this.setState({ minValue: e.target.value })
}

onChangeInputMaxValue = (e) => {
    this.setState({ maxValue: e.target.value })
}

onChangeInputServiceSearch = (e) => {
    this.setState({ serviceSearch: e.target.value })
}

onChangeSelectOrder = (e) => {
    this.setState({ order: e.target.value })
}

  


  componentDidMount(){
    this.props.getAllJobs()
  }

  
  render() {

    const servicos = this.props.serviceList.filter((service) => {
        return service.title.toLowerCase().includes(this.state.serviceSearch.toLowerCase()) || service.description.toLowerCase().includes(this.state.serviceSearch.toLowerCase())
    })
        .filter((service) => {
            return this.state.minValue === "" || service.price >= this.state.onChangeInputMinValue
        })

    .filter((service) => {
        return this.state.maxValue === "" || service.price <= this.state.maxValue
    })

    .sort((service, service2) => {
        switch (this.state.ordenacao) {
            case "title":
                return service.title.localeCompare(service2.title)
                break;
            case "lower value":
                return service.price - service2.price
                break;
            case "bigger value":
                return service2.price - service.price
                break;
            case "term":
                return new Date(service.dueDate).getTime() - new Date(service2.dueDate).getTime()
            default:
                return "no order"
        }
    })
    .map((item) => {
        return (
            <ServiceCard key={service.id}>
                <h3 onClick={() => this.props.mudarPaginaDetalhe(service.id)}>{service.title}</h3>
                <p>{service.description}</p>
                <p>Até {moment(item.dueDate).format('DD/MM/YYYY')} por R${item.price},00</p>
                
               
                    
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" onClick={() => this.props.adicionarAoCarrinho(item.id)} >
                        Adicionar ao carrinho
                        </Button>
                    </ThemeProvider>
               
            </ServiceCard>
        )
    })


      return (

        <div>

        <FilterContainer>
            <div>
                <input
                    placeholder="Valor Mínimo"
                    onChange={this.onChangeInputMinValue}
                />
                <input
                    placeholder="Valor Máximo"
                    onChange={this.onChangeInputMaxValue}
                />
                <input
                    placeholder="Busca por título ou descrição"
                    onChange={this.onChangeInputServiceSearch}
                />
            </div>
            <div>
                <select
                    onChange={this.onChangeSelectOrder}
                    value={this.state.order}
                >
                    <option value="no order">Sem Ordenação</option>
                    <option value="lower value">Menor Valor</option>
                    <option value="biger value">Maior Valor</option>
                    <option value="Title">Título</option>
                    <option value="term">Prazo</option>
                </select>
            </div>
        </FilterContainer>

        <ServicesContainer>{servicos}</ServicesContainer>

    </div>


      )
    
    
  }
}
