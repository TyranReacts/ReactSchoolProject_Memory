import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai' 

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
})


