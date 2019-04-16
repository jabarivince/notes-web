import React, { Component } from 'react'
import privacyPolicy from '../assets/json/privacy-policy.json'
const policy = privacyPolicy.policy

class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>{privacyPolicy.title}</h3>
          <p>{privacyPolicy.summary}</p>
        </div>

        <h3>Notice</h3>
        <p>{policy.notice}</p>

        <h3>Choice</h3>
        <p>{policy.choice}</p>

        <h3>Access</h3>
        <p>{policy.access}</p>

        <h3>Security</h3>
        <p>{policy.security}</p>

        <h3>Redress</h3>
        <p>{policy.redress}</p>
      </div>
    );
  }
}

export default PrivacyPolicy;
