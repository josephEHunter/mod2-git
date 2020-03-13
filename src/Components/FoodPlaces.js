import React from 'react'

class FoodPlaces extends React.Component {
  constructor(){
    super()
    this.state={
      isloaded: false,
      data: " ",

    }

    this.consoleTest = this.consoleTest.bind(this)
    this.changeBorough = this.changeBorough.bind(this)

  }

  consoleTest(){
    console.log(this.state.data)
  }
  changeBorough(){
    this.setState({
      isloaded: true
    })
  }

  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/ud4g-9x9z.json?borough=Bronx/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {data.map(data => {

        this.setState({
          data: data
        })
    })
  })
}
  render(){
    if (this.state.isloaded === true){
    return(
      <div>
      <h2>Healty Eats Near You</h2>
      <div>

      </div>
      <div>
      <p className="storeName">{this.state.data.store_name}</p>
      <p>{this.state.data.street_adress}{this.state.data.address}, {this.state.data.borough}</p>
      </div>
      <br/>

      <div>
      <p className="storeName">{this.state.data.store_name}</p>
      <p>{this.state.data.street_adress}{this.state.data.address}, {this.state.data.borough}</p>
      </div>
      <br/>


      <div>
      <p className="storeName">{this.state.data.store_name}</p>
      <p>{this.state.data.street_adress}{this.state.data.address}, {this.state.data.borough}</p>
      </div>
      <br/>


      <div>
      <p className="storeName">{this.state.data.store_name}</p>
      <p>{this.state.data.street_adress}{this.state.data.address}, {this.state.data.borough}</p>
      </div>
      <br/>


      <div>
      <p className="storeName">{this.state.data.store_name}</p>
      <p>{this.state.data.street_adress}{this.state.data.address}, {this.state.data.borough}</p>
      </div>
      <br/>

      </div>
    )
  }
  else{
    return(
      <div>


      <button value="bronx" onClick={this.changeBorough}>Get food?</button>

      </div>
    )
  }
  }
}
  export default FoodPlaces
