import React from 'react'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<NavigationItems />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />)
  })

  it('Should be render 2 <NavigationItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2)
  })

  it('Should be render 3 <NavigationItem /> elements if authenticated', () => {
    // const wrapper = shallow(<NavigationItems auth />)
    wrapper.setProps({ auth: true })
    expect(wrapper.find(NavigationItem)).toHaveLength(3)
  })

})
