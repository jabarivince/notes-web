import { BrowserRouter as Router } from "react-router-dom";
import React, { Component } from 'react'
import Header from './components/partials/Header'
import Body from './components/partials/Body'
// import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Body />
      </Router>
    )
  }
}

export default App
