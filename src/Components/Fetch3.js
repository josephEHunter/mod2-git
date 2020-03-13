import React from "react"
import "./styles.css"


class Fetch3 extends React.Component{
  constructor(props){

    super(props)
    this.state={

      isloaded: false,
      isloadedE: false,
      data: " ",
      lat: this.props.lat,
      lon: this.props.lon,
      temp: " ",
      summary:" ",
      icon: " ",
      dataE:" ",
      showEvents: false,
      event: " "

    }

this.consoleTest2 = this.consoleTest2.bind(this)
this.fecthWeather = this.fecthWeather.bind(this)
this.eventsFetch = this.eventsFetch.bind(this)
this.showEventsFunc= this.showEventsFunc.bind(this)

  }

  consoleTest2 = () => {

    console.log(this.state.dataE)
}


eventsFetch = (props) => {

   fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&zip_code=10467&locale=*`)
  .then((response) => {
    return response.json();
  })

  .then((data) => {data._embedded.events.map(data => {
    this.setState({

      dataE:data,
      isEloaded:true,

    })
    this.fecthWeather()
  })
})
}
showEventsFunc=()=>{
  this.setState({
    showEvents: true
  })
}

fecthWeather = (props) =>{

  fetch(`https://api.darksky.net/forecast/70d0a8b65761147310d0bad71fcc366c/${this.props.lat},${this.props.lon}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    this.setState({
      isloaded:true,
      data:data,
      temp: data.currently.temperature,
      summary: data.currently.summary,
      icon: data.currently.icon

    })
  })
  .catch(err => {
  	console.log(err);
  });
}

/*  ajaxFetch() {
    {$.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/' + userInput
  }).then(
      (data)=>{
         $('#name').html(data.name);
         $('#type').html(data.weight);
         $('#num').html(data.order);
         $('#stat').html(data.height);
         $('#sprite').html(data.sprites.front_default);
      }
    )
  }
}
*/


  render(){
    if (this.state.isloaded===true && this.state.showEvents===false){
      return(
        <div className="weather">
        <h3> It is {this.state.summary}</h3>
        <h3>Temperature is {this.state.temp}</h3>
        <button onClick={() => {
          this.showEventsFunc()}}>
          Find events
          </button>

        </div>
      )
    }

    else if (this.state.showEvents === true && this.state.isloaded===true){
      return(
        <div>
        <div className="weather">
        <h3> It is {this.state.summary}</h3>
        <h3>Temperature is {this.state.temp}</h3>
        </div>

        <div className="events">
          <h3>Ticketmaster Shows</h3>

          <h3>{this.state.dataE.name} <img src={this.state.dataE.images[0].url}/></h3>
          <h3>{this.state.dataE.priceRanges[0].currency}</h3>
          <h3>${this.state.dataE.priceRanges[0].min} - ${this.state.dataE.priceRanges[0].max}</h3>
          <br/>
          <h3>{this.state.dataE.name} <img src={this.state.dataE.images[0].url}/></h3>
          <h3>{this.state.dataE.priceRanges[0].currency}</h3>
          <h3>${this.state.dataE.priceRanges[0].min} - ${this.state.dataE.priceRanges[0].max}</h3>
          <br/>
          <h3>{this.state.dataE.name} <img src={this.state.dataE.images[0].url}/></h3>
          <h3>{this.state.dataE.priceRanges[0].currency}</h3>
          <h3>${this.state.dataE.priceRanges[0].min} - ${this.state.dataE.priceRanges[0].max}</h3>
          <br/>
          <h3>{this.state.dataE.name} <img src={this.state.dataE.images[0].url}/></h3>
          <h3>{this.state.dataE.priceRanges[0].currency}</h3>
          <h3>${this.state.dataE.priceRanges[0].min} - ${this.state.dataE.priceRanges[0].max}</h3>
          <br/>
          <h3>{this.state.dataE.name} <img src={this.state.dataE.images[0].url}/></h3>
          <h3>{this.state.dataE.priceRanges[0].currency}</h3>
          <h3>${this.state.dataE.priceRanges[0].min} - ${this.state.dataE.priceRanges[0].max}</h3>
          <br/>
          <h3>{this.state.dataE.name} <img src={this.state.dataE.images[0].url}/></h3>
          <h3>{this.state.dataE.priceRanges[0].currency}</h3>
          <h3>${this.state.dataE.priceRanges[0].min} - ${this.state.dataE.priceRanges[0].max}</h3>
          <br/>
        </div>
          <div>
                  <div w-type="event-discovery" w-tmapikey="TUX32F9UdXxEJEGoyuiYr6ldIXz4nuPx" w-googleapikey="YOUR_GOOGLE_API_KEY" w-keyword="" w-theme="simple" w-colorscheme="light" w-width="350" w-height="600" w-size="25" w-border="0" w-borderradius="4" w-radius="25" w-period="week" w-layout="vertical" w-attractionid="" w-promoterid="" w-venueid="" w-affiliateid="" w-segmentid="" w-proportion="custom" w-titlelink="off" w-sorting="groupByName" w-id="id_ayvyu" w-source="" w-branding="Ticketmaster" w-latlong="34.0390107,-118.2672801"></div>
          </div>
        </div>
      )
    }
    else return(
      <div>
      <button onClick={
        ()=>{

        this.fecthWeather()
        this.eventsFetch()
        }
      }>
        getWeather
      </button>
      </div>
    )
  }
}


export default Fetch3
