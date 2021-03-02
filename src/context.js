import React, { useContext, useEffect, useReducer } from "react"

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH
} from "./actions"
import reducer from "./reducer"

// API Endpoint of the application
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?"

// Initial state of the Application
const initialState = {}

// AppContext - Instance of Context API
const AppContext = React.createContext()

// AppProvider  - A component derived from AppContext (AppConsumer is the other)
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

// Global state
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
