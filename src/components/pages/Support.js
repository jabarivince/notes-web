import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MailIcon from '@material-ui/icons/Mail'
import HTTPService from '../../services/HttpService'

class Support extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      body: ""
    }

    this.message = "Share your feedback with us, and we'll get back to you soon!"
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  send = () => {
    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.lastName,
      subject: this.state.subject,
      body: this.state.body
    }

    HTTPService.send(payload)
  }

  render() {
    return (
      <div>
        <p>{this.message}</p>

        <form autoComplete="off">
          <TextField
            fullWidth
            id="first-name-text-field"
            label="First Name"
            margin="normal"
            onChange={this.handleChange('firstName')}
          />

          <TextField
            fullWidth
            id="last-name-text-field"
            label="Last Name"
            margin="normal"
            onChange={this.handleChange('lastName')}
          />

          <TextField
            required
            fullWidth
            id="email-text-field"
            label="Email"
            margin="normal"
            onChange={this.handleChange('email')}
          />

          <TextField
            fullWidth
            id="subject-text-field"
            label="Subject"
            margin="normal"
            onChange={this.handleChange('subject')}
          />

          <TextField
            required
            fullWidth
            id="body-text-field"
            label="Comments"
            margin="normal"
            multiline={true}
            rows={5}
            rowsMax={10}
            variant="outlined"
            onChange={this.handleChange('body')}
          />

          <Row style={{justifyContent: 'center'}}>
            <Button variant="contained" color="primary" onClick={this.send}>
              Send
              <MailIcon></MailIcon>
            </Button>
          </Row>
        </form>
      </div>

    );
  }
}

export default Support
