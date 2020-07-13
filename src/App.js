import React, {Component} from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame from './HallOfFame'
import HighScoreInput from './HighScoreInput'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSECS = 750

class App extends Component {
  /*
  static defaultProps = {
    cards: []
  }

  Sinon pour le binding du this, le prof ne préfère pas faire ça dans le constructuer : 
    this.handleCardClick = this.handleCardClick.bind(this);
    ... car apparemment ce n'est pas très lisible, le constructeur étant au début de la classe...
  */

  constructor(props) {
    super(props);
    this.state = {
      cards: this.generateCards(),
      currentPair: [],
      guesses: 0,
      hallOfFame: null,
      matchedCardIndices: []
    }
  }

  generateCards() {
    const result = []
    const size = SIDE * SIDE;
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop();
      result.push(card, card);
    }
    return shuffle(result);
  }

  // @autobind ce décorateur fourni par un module n'est pas encore disponible dans CRA
  // arrow fx for binding !important
  handleCardClick = index => {
    const { currentPair } = this.state;
    if(currentPair.length === 2)
      return;
    if(currentPair.length === 0) {
      this.setState({
        currentPair: [index]
      });
      return;
    }

    this.handleNewPairClosedBy(index);      
  }

  getFeedbackForCard(index) {
    const {currentPair, matchedCardIndices} = this.state;
    const indexMatched = matchedCardIndices.includes(index);

    if(currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden';
    }

    if(currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched';
    }

    return indexMatched ? 'visible' : 'hidden';
  }

  handleNewPairClosedBy(index) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state;
    const newPair = [currentPair[0], index];
    const newGuesses = guesses + 1;
    const matched = newPair[0] !== index && cards[newPair[0]] === cards[newPair[1]];
    this.setState({currentPair: newPair, guesses: newGuesses});
    if(matched) {
      this.setState({matchedCardIndices: [...matchedCardIndices, ...newPair]})
    }

    setTimeout(() => this.setState({currentPair: []}), VISUAL_PAUSE_MSECS)
  }

  // Arrow fx for binding
  displayHallOfFame = (hallOfFame) => {
    this.setState({ hallOfFame })
  }

  render() {
    const { cards, guesses, hallOfFame, matchedCardIndices } = this.state;
    const won = matchedCardIndices.length === cards.length;
    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card, index) => (
          <Card 
            card={card} 
            feedback={this.getFeedbackForCard(index)}
            key={index}
            index={index}
            onClick={this.handleCardClick}
            //onClick={card => this.handleCardClick(card)} /> // on donne l'impression à Card qu'il reçoit une propriété différente à chaque fois et qu'il a besoin de se re-renderer
          />
        ))}
        
        {won && 
          (hallOfFame ? (
            <HallOfFame entries={hallOfFame} />
          ) : (
            <HighScoreInput guesses={guesses} onStored={this.displayHallOfFame} />
          ))
        }
      </div>
    )
  }
}

export default App
