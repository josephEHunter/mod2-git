import React from 'react'
import About from "./Components/About"
import Info from "./Components/Info"
import Home from "./Components/Home"
import {render} from "react-dom"
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom"
import './App.css';




class App extends React.Component {
  constructor(){
    super()

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
          region: data.region
        })
      })
  }


  render(){
  return (
    <Router>
  <div className="routes">
    <nav>
      <ul>

        <li>
        <Link to ="/Home">Home </Link>
        </li>


        <li>
        <Link to ="/About">About </Link>
        </li>


        <li>
        <Link to ="/Info"> Info </Link>
        </li>


      </ul>
    </nav>


  <Switch>


  <Route exact path="/" component={Home}/>

  <Route path="/Home" component={Home}/>


  <Route path="/About" component={About}/>

  <Route path="/Info" component={Info}/>

  </Switch>

    </div>

</Router>
  );
}
}
export default App;
