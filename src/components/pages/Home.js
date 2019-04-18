import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import GetAppIcon from '@material-ui/icons/GetApp'
import '../../styles/pages/Home.css'
import icon from '../../assets/img/icon.png'

class Home extends Component {

  render() {
    return (
      <div>
        <p>Welcome to the Note App!</p>
        <img src={icon} alt={'notes icon'} className='icon centered'/>
        <p>A basic note-taking app that you can download by tapping below!</p>

        <Row style={{justifyContent: 'center'}}>
          <Button variant="contained" color="primary" disabled={true}>
            Get the app
            <GetAppIcon className='centered'></GetAppIcon>
          </Button>
        </Row>
      </div>
    )
  }
}

export default Home
