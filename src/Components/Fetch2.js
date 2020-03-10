import React from 'react'
import Render2 from "./Render2"
import Fetch3 from "./Fetch3"

class Locations extends React.Component {
  constructor(){
    super()
    this.state={
      isloaded: false,
      stuff: " ",
      ip: " ",
      country: " ",
      region: " ",
      lat: undefined,
      lon: undefined,
    }

    this.consoleTest = this.consoleTest.bind(this)
  }

  consoleTest(){
    console.log(this.state)
  }

  componentDidMount() {
    fetch('http://free.ipwhois.io/json/8.8.4.4')
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        this.setState({
          isloaded: true,
          stuff: data,
          ip: data.ip,
          country: data.country,
          region: data.region,
          lat: data.latitude,
          lon: data.longitude
        })
      })
  }

  render(){
    if (this.state.isloaded === true){
    return(
      <Render2 region={this.state.region} country={this.state.country} ip={this.state.ip}
      lat ={this.state.lat} lon = {this.state.lon}/>

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
