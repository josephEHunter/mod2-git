import React from "react"
import {applyMiddleware, createStore} from "redux"
import axios from "axios"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import Render1 from "./Render1"

class Fetch1 extends React.Component{
  constructor(){
    super()
    this.state={
      fetching: false,
      fetched: false,
      user: " ",
      error:null
    }
  }

}
const reducer = (state={}, action) => {
  switch (action.type) {
    case " FETCH_USERS_START ": {
      return{...setState, fetching: true}
      break;
    }
    case " FETCH_USERS_ERROR ": {
      return{...setState, fetching: false, error: action.payload}

      break;
    }
    case " RECEIVE_USERS ": {
      return{...setState, fetching: false, fetched: true, users: action.payload}

      break;
    }
  }
  return state
}

const middleware = applyMiddleware(promise(), thunk, logger())
const store = createStore(reducer, middleware)

store.dispatch({
  type: "FETCH_USERS",
  payload:axios.get("http://rest.learncode.acadamy/api/wstern/users")

})

return(
<Render1 user={this.state.user} />
)
}
export default Fetch1
