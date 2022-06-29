import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../coonstants/urls'

export default class ServicesListPage extends Component {
  state = {
      servicesList: []
  }

  componentDidMount(){
    this.getAllJobs()
  }



  getAllJobs = () => {
      axios.get(`${BASE_URL}/jobs`, {
      headers: {
        Authorization: "0252c6f3-bf44-463a-acb7-47f30fccdf02"
      }
    })
      .then((res) => {
        console.log(res.data.results)
        this.setState({ servicesList: res.data.jobs })
      })
      .catch((err) => {
        console.log("erro", err)
      })
  }
  render() {
    return (
      <div>ServicesListPage</div>
    )
  }
}
