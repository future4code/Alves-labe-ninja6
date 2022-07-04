import React, { Component } from 'react'
import axios from 'axios'
import ServicesDetailPage from './pages/ServicesDetailPage/ServicesDetailPage'
import ServicesListPage from './pages/ServicesListPage/ServicesListPage'
import ServicesSignupPage from './pages/ServicesSignupPage/ServicesSignupPage'
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage'
import { ThemeProvider } from '@mui/material'
import { theme } from './coonstants/theme'




export default class App extends Component {

  state = {
    page: "service",
    serviceList: [],
    jobDetails: {}
  }

  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    axios.get(url, {
      headers: {
        Authorization:  "0252c6f3-bf44-463a-acb7-47f30fccdf02"
      }
    })
      .then((res) => this.setState({ serviceList: res.data.jobs }))
      .catch((err) => console.log(err.response))
  }

  getJobById = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    axios.get(url, {
      headers: {
        Authorization:  "0252c6f3-bf44-463a-acb7-47f30fccdf02"
      }
    })
      .then((res) =>  this.setState({ jobDetails: res.data }))
      .catch((err) => console.log(err.response))
  }

  addToCart = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    const body = {
      "taken": true
    }
  }

  selectPage = () => {
    switch (this.state.page){
      case "service":
        return <ServicesListPage
          serviceList={this.state.serviceList}
          getAllJobs={this.getAllJobs}
        />
      case "detail":
        return <ServicesDetailPage/>
      case "signup":
        return <ServicesSignupPage/>
      case "cart":
        return <ShoppingCartPage/>
      default:
        return <ServicesListPage/>

    }
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
        {this.selectPage()}
        </ThemeProvider>
      </div>
    )
  }
}
