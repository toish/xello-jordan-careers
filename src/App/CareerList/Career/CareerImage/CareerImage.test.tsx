
import * as React from 'react'
import { shallow, render } from 'enzyme'

import CareerImage from './CareerImage'

it('renders without crashing', () => {
  const wrapper = shallow(<CareerImage image="" />)
  expect(wrapper).toMatchSnapshot()
})

it('renders a low-res image', () => {
  const wrapper = render(<CareerImage image="test" />)
  expect(wrapper.find('.CareerImage__image').attr('style')).toBe(`background-image:url(test?quality=70&maxWidth=500)`)
})

it('renders a high-res image', () => {
  const wrapper = shallow(<CareerImage image="test" />)
  wrapper.find('.CareerImage__modeToggleButton').first().simulate('click')
  expect(wrapper.find('.CareerImage__image').props().style).toEqual({backgroundImage: `url(test)`})
})