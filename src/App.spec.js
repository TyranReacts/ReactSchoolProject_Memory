import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
// import toJson from 'enzyme-to-json'
import sinon from 'sinon'

import App, { SYMBOLS }  from './App'

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.find('Card')).to.have.length(36)
    })

    it('should match its reference snapshot', () => {
        const mock = sinon
            .stub(App.prototype, 'generateCards') // replacing generateCards'implementation 
            .returns([...SYMBOLS.repeat(2)]) // so that it returns the same table with no random cards
        
        try {
            const wrapper = shallow(<App />)
            expect(wrapper).to.matchSnapshot() // even without the helper toJson I get the same result
        } finally {
            mock.restore() 
        }
    })
})
