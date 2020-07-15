import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai' // to replace 'expect' of jest

import App from './App'
//import GuessCount from './GuessCount'

describe('<App />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div') 	
		ReactDOM.render(<App />, div)
	})

	it('compares 2 objects', () => {
		expect({name: 'Joe'}).to.equal({name: 'Jane'})
	})

	it('is nulle', () => {
		expect(null).to.be.nul(); // thanks to dirty chai I can write properties like methods, which triggers TypeError if there is a typo
	})
})


