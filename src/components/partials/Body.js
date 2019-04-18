import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Home from '../pages/Home'
import Support from '../pages/Support'
import PageNotFound from '../pages/PageNotFound'

class Body extends Component {
  render() {
    return (
      <Container>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/privacy' component={PrivacyPolicy}/>
            <Route path='/support' component={Support}/>
            <Route component={PageNotFound}></Route>
          </Switch>
        </main>
      </Container>

    )
  }
}

export default Body
