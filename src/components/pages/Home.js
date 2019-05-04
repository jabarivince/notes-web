import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import GetAppIcon from '@material-ui/icons/GetApp'
import '../../styles/pages/Home.css'
import icon from '../../assets/img/icon.png'

function getWelcome() {
  return (
    <div>
      <h3>Welcome to the Note App!</h3>
      <p>A basic note-taking app that you can download by tapping below!</p>
      <img src={icon} alt={'notes icon'} className='icon centered'/>
    </div>
  )
}

function getButton() {
  return (
    <div className="d-flex justify-content-center">
      <Button variant="contained" color="primary" disabled>
        Get the app
        <GetAppIcon className='centered'></GetAppIcon>
      </Button>
    </div>
  )
}

function getRows() {
  const rows = [
    getWelcome(),
    getButton()
  ]

  return rows.map((row, index) => {
    return (
      <div key={index}>
        <Row>
          <Col md={12}>
            {row}
          </Col>
        </Row>
      </div>
    )
  })
}

class Home extends Component {
  render() {
    return getRows()
  }
}

export default Home
