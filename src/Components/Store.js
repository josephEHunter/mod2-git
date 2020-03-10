import React from "react"
import Render1 from "./Render1"
import Fetch2 from "./Fetch2"
import Fetch3 from "./Fetch3"
import Render3 from "./Render3"

class Store extends React.Component{
  constructor(){
    super()
    this.state={}

  }
  render(){
    return(
      <div>
      <h1>Store</h1>


      <Fetch2 />
      <Render1 />
      <Render3 />
      </div>
    )
  }
}

export default Store
