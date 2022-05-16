/**
 * @jest-environment jsdom
 * */

import React from "react"
import { Dropdown } from "../Dropdown"
import { shallow } from 'enzyme'

import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('Dropdown', () => {
  test('Рендер компонента Dropdown', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button>Test</button>} />)
    expect(wrapper).toBeDefined()
    // expect(wrapper.find('#button')).toBeDefined()
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy()
  })

  test('Рендер компонента Dropdown (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button>Test</button>} />)
    expect(wrapper).toMatchSnapshot()
  })
})
