import React from "react"
import {render} from "react-dom"
import {createStore} from "redux"

const initialState = {
  result: " ",
  lastValues: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD"
        state = {
          ...state,
          result: state.result + action.payload
        }
      break;
    case "SUBTRACT";
        state= {
          ...state,
          result: state.result - action.payload
      break;
  }
  return state;
}

const store = createStore(reducer,1)

store.subscribe(()=>{
  console.log("Store updated", store.getState())
})

store.dispatch({
  type: "ADD",
  payload: 10
})
