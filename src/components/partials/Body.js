import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Home from '../pages/Home'
import Support from '../pages/Support'

class Body extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/privacy' component={PrivacyPolicy}/>
          <Route path='/support' component={Support}/>
        </Switch>
      </main>
    )
  }
}

export default Body;
