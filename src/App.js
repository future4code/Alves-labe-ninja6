import React, { Component } from 'react'
import ServicesDetailPage from './pages/ServicesDetailPage/ServicesDetailPage'
import ServicesListPage from './pages/ServicesListPage/ServicesListPage'
import ServicesSignupPage from './pages/ServicesSignupPage/ServicesSignupPage'
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage'






export default class App extends Component {

  state = {
    page: "service",
  }

  selectPage = () => {
    switch (this.state.page){
      case "service":
        return <ServicesListPage/>
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
        {this.selectPage()}
      </div>
    )
  }
}
