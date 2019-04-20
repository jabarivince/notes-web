import React from 'react'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme'
import Support from '../../components/pages/Support'

configure({adapter: new Adapter()});

describe('<Support />', () => {
  let wrapper

  beforeEach(() => wrapper = shallow(<Support/>))

  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Support />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('form disabled by default', () => {
    expect(wrapper.state('disabled')).toBe(true)
  })

  test('form disabled when email invalid', () => {
    wrapper
    .find('#email-text-field')
    .simulate('change', {target: {name: "email", value: "email"}})

    expect(wrapper.state('disabled')).toBe(true);
  })

  test('form disabled when body invalid', () => {
    wrapper
    .find('#body-text-field')
    .simulate('change', {target: {name: "body", value: "body"}})

    expect(wrapper.state('disabled')).toBe(true);
  })

  test('form enable when body and email valid', () => {
    const precondition = wrapper.state('disabled')

    wrapper
    .find('#body-text-field')
    .simulate('change', {target: {name: "body", value: "body"}})

    wrapper
    .find('#email-text-field')
    .simulate('change', {target: {name: "email", value: "email@email.com"}})

    const postcondition = wrapper.state('disabled')

    expect(postcondition).toBe(!precondition)
  })

  test('form becomes disabled when going from valid to invalid state', () => {
    wrapper
    .find('#body-text-field')
    .simulate('change', {target: {name: "body", value: "body"}})

    wrapper
    .find('#email-text-field')
    .simulate('change', {target: {name: "email", value: "email@email.com"}})

    const precondition = wrapper.state('disabled')

    wrapper
    .find('#email-text-field')
    .simulate('change', {target: {name: "email", value: "invalid"}})

    const postcondition = wrapper.state('disabled')

    expect(postcondition).toBe(!precondition)
  })
})
