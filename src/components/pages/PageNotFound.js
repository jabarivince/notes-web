import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Sorry, we do not have page you were looking for</p>

        <Row style={{justifyContent: 'center'}}>
          <Button
            component={NavLink} to="/"
            variant="contained"
            color="primary">
            Back to home page
          </Button>
        </Row>
      </div>
    )
  }
}

export default PageNotFound
