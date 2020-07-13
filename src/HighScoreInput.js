import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './HighScoreInput.css'

import { saveHOFEntry } from './HallOfFame'

class HighScoreInput extends Component {
    state = {winner: ''}

    // Arrow fx for binging
    handleWinnerUpdate = event => {
        this.setState({ winner: event.target.value.toUpperCase() })
    }

    // Arrow fx for binding
    persistWinner = event => {
        event.preventDefault()
        const newEntry = { guesses: this.props.guesses, player: this.state.winner}
        saveHOFEntry(newEntry, this.props.onStored)
    }

    render() {
        return (
            <form className="highScoreInput" onSubmit={this.persistWinner}>
                <p>
                    <label>
                        Bravo! Enter your name:
                    </label>
                    <input 
                        autoComplete="given-name" 
                        type="text" 
                        onChange={this.handleWinnerUpdate}
                        value={this.state.winner}  
                    />
                    <button type="submit">I won!</button>
                </p>
            </form>
        )
    }
}

HighScoreInput.propTypes = {
    guesses: PropTypes.number.isRequired,
    onStored: PropTypes.func.isRequired
}



export default HighScoreInput