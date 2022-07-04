
import React, { Component } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { theme } from '../../coonstants/theme';
import { Button } from '@mui/material';
import { Card, CardContent } from '@material-ui/core';

import moment from "moment"; 



const CardContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    p {
        margin : 4px 0;
    }
`;

// const AddTocartButton = styled.button`
//     align-self : center;
//     margin-top : 4px


// `;
   


export default class ServiceCard extends Component {
  render() {

    const service = this.props.service
  
       return <CardContainer>

        <ThemeProvider theme={theme}>
        
        <Card>
          <CardContent>
         <p>{service.title}</p>
         <p>Até {moment(service.dueDate).format('DD/MM/YYYY')} por R${service.price},00</p>
         </CardContent>
          
          <Button variant="contained" color="primary" onClick={() => this.props.adicionarAoCarrinho(service.id)} >
                                Adicionar ao carrinho
          </Button>
        
         </Card>
         
         </ThemeProvider>
     </CardContainer>
    
  }
}
