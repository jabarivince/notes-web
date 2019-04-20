import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MailIcon from '@material-ui/icons/Mail'
import AlertService from '../../services/AlertService'
import SupportService from '../../services/SupportService'
import EmailValidator from 'email-validator'

class Support extends Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: true,
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      body: "",

      fields: {
        email: {
          valid: false,
          errorText: 'Email but be valid. Example: first.last@email.com'
        },
        comments: {
          valid: false,
          errorText: 'This field must not be empty'
        }
      }
    }

    this.message = "Share your feedback with us, and we'll get back to you soon!"
  }

  handleChange = (name) => (event) => {
    this.setState(
      {[name]: event.target.value},
      this.formIsDisabled
    )
  }

  send = () => {
    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.lastName,
      subject: this.state.subject,
      body: this.state.body
    }

    SupportService
    .sendFeedback(payload)
    .then(this.showSuccess)
    .catch(this.handleError)
  }

  showSuccess = (response) => {
    AlertService
    .success(response)
    .then(this.clearForm)
  }

  handleError = (error) => {
    AlertService
    .error(error)
  }

  clearForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      body: ''
    })

    this.form.reset()
  }

  formIsDisabled = () => {
    const emailIsValid = EmailValidator.validate(this.state.email)
    const bodyIsValid = this.isTruthy(this.state.body)

    this.setState({
      disabled: !(emailIsValid && bodyIsValid)
    })
  }

  isTruthy = (arg) => {
    if (arg) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <p>{this.message}</p>

        <form autoComplete="off" ref={element => this.form = element}>
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
            helperText={this.state.fields.email.errorText}
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
            helperText={this.state.fields.comments.errorText}
            onChange={this.handleChange('body')}
          />

          <Row style={{justifyContent: 'center'}}>
            <Button
              disabled={this.state.disabled}
              variant="contained"
              color="primary"
              onClick={this.send}>
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
