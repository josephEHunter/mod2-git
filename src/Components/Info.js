import React from "react"
import Render1 from "./Render1"
import Fetch2 from "./Fetch2"
import Fetch3 from "./Fetch3"
import Render3 from "./Render3"
import FoodPlaces from "./FoodPlaces"

class Info extends React.Component{
  constructor(){
    super()
    this.state={}

  }
  render(){
    return(
      <div>
      <h1>Info</h1>


      <Fetch2 />
      <FoodPlaces />
      <Render1 />
      <Render3 />
      <p>Movies comming soon...</p>
      <p>Parks comming soon...</p>
      </div>
    )
  }
}

export default Info
