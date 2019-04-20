import React, { Component } from 'react'
import privacyPolicy from '../../assets/json/privacy-policy.json'

const policy = privacyPolicy.policy
const sections = [
  {title: privacyPolicy.title,body: privacyPolicy.summary},
  {title: 'Notice', body: policy.notice},
  {title: 'Choice', body: policy.choice},
  {title: 'Access', body: policy.access},
  {title: 'Security', body: policy.security},
  {title: 'Redress', body: policy.redress}
]

function policySection(key, section) {
  return (
    <div key={key}>
      <h3>{section.title}</h3>
      <p>{section.body}</p>
    </div>
  )
}

function getSections() {
  return sections.map((section, index) => {
    return policySection(index, section)
  })
}

class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        {getSections()}

        { /* TODO: Use NavLink + ScrollTop to not replace <a>*/ }
        {/* https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition */}
        <p>Visit our <a href='/support'>support page.</a></p>
      </div>
    )
  }
}

export default PrivacyPolicy
