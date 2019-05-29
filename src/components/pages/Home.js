import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import GetAppIcon from '@material-ui/icons/GetApp'
import '../../styles/pages/Home.css'
import mainscreen from '../../assets/img/screenshots/main.jpg'
import notesWithLinks from '../../assets/img/screenshots/links.jpg'
import activeNotes from '../../assets/img/screenshots/active.jpg'


function getWelcome() {
  return (
    <div>
      <h3>Welcome to the Note App!</h3>
      <p>A basic note-taking app that you can download by tapping below!</p>
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

function getScreenShots() {
  return (
    <div>
      <h3 align="center">Screenshots from the Note App </h3>
    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={150} totalSlides={3}>
    <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <Slider>
        <Slide index={0}> 
          <img src={mainscreen} alt={'main screen'} className='icon centered'/>
          <p align="center">Main Screen</p>
        </Slide>

        <Slide index={1}> 
          <img src={notesWithLinks} alt={'notes with hyperlinks'} className='icon centered'/>
          <p align="center">Hyperlinks</p>
        </Slide>

        <Slide index={2}> 
          <img src={activeNotes} alt={'actvive notes'} className='icon centered'/>
          <p align="center">Typing Notes</p>
        </Slide>
      </Slider>
      </CarouselProvider>
    </div>
    
  )
}

function getRows() {
  const rows = [
    getWelcome(),
    getButton(),
    getScreenShots()
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
