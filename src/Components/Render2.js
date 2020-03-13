import React from "react"
import Fetch3 from "./Fetch3"



class Render2 extends React.Component{

  consoleTest2 = () => {
  console.log("this is from render2")
  console.log(this.props.lat)
}
  render(){

  return(
    <div>
    <h1>ip adress:{this.props.ip}</h1>
    <h3>Country:{this.props.country}</h3>
    <h3>State:{this.props.region}</h3>

    <Fetch3 lat={this.props.lat} lon={this.props.lon} city={this.props.city} zip={this.props.zip}/>


    </div>
  )
}
}
export default Render2
