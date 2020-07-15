import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from './App'
import GuessCount from './GuessCount'
import Card from './Card'

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />)

        //expect(wrapper).to.contain(<GuessCount guesses={0} />) // Difference: Comparing two different types of values. Expected undefined but received object.
        expect(wrapper.contains(<GuessCount guesses={0} />)).to.equal(true)
    })

    it('contains 36 cards', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('Card')).to.have.length(36)
    })

    it('GuessCount has props guesses equal to 0', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('GuessCount').props().guesses).to.equal(0)
    })
    /* 
    // I have to install chai-react-element to make this assertion work
    it('has element of type GuessCount', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).to.have.elementOfType('GuessCount')
    })
    */
})