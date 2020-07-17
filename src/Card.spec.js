import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import toJson from 'enzyme-to-json'

import Card from './Card'

describe('<Card />', () => {
    it('should trigger its `onClick` prop when clicked', () => {
        const onClick = sinon.spy()
        const wrapper = shallow(
            <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
        )

        wrapper.simulate('click')
        expect(onClick).to.have.been.calledWith(0)
    }) 

    it('should match its reference snapshot', () => {
        const onClick = sinon.spy()
        const wrapper = shallow(
            <Card card="💖" feedback="hidden" index={0} onClick={onClick} />
        )
        
        expect(toJson(wrapper, {noKey: false, mode: 'deep'})).to.matchSnapshot() // I had use the helper toJson (in which 2nd argument is optional)
    })
})