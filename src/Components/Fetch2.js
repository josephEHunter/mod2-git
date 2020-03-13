import React from 'react'
import Render2 from "./Render2"
import Fetch3 from "./Fetch3"

class Locations extends React.Component {
  constructor(){
    super()
    this.state={
      isloaded: false,
      dataf2: " ",
      ip: " ",
      country: " ",
      region: " ",
      lat: undefined,
      lon: undefined,
      city: " "
    }

    this.consoleTest = this.consoleTest.bind(this)
  }

  consoleTest(){
    console.log(this.state.dataf2)
  }
/*
  // componentDidMount() {
  //   fetch('http://free.ipwhois.io/json/')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //
  //       this.setState({
  //         isloaded: true,
  //         dataf2: data,
  //         ip: data.ip,
  //         country: data.country,
  //         region: data.region,
  //         lat: data.latitude,
  //         lon: data.longitude,
  //         city: data.city
  //       })
  //       console.log(this.state.dataf2)
  //     })
  // }
*/

    componentDidMount() {
      fetch('http://ip-api.com/json/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {

          this.setState({
            isloaded: true,
            dataf2: data,
            ip: data.query,
            country: data.country,
            region: data.region,
            lat: data.lat,
            lon: data.lon,
            city: data.city,
            zip: data.zip
          })
          console.log(this.state.dataf2)
        })
    }


  render(){
    if (this.state.isloaded === true){
    return(

      <Render2 region={this.state.region} country={this.state.country} ip={this.state.ip}
      lat ={this.state.lat} lon = {this.state.lon} city={this.state.city} zip={this.state.zip}/>
    )
  }
  else{
    return(
      <p>loading</p>
    )
  }
  }
}
  export default Locations
