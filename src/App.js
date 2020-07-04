import React, {Component} from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, {FAKE_HOF} from './HallOfFame'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {
  /*
  static defaultProps = {
    cards: []
  }

  Sinon pour le binding du this, le prof ne préfère pas faire ça dans le constructuer : 
    this.handleCardClick = this.handleCardClick.bind(this);
    ... car apparemment ce n'est pas très lisible, le constructeur étant au début de la classe...
  */

  cards = this.generateCards();

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
  handleCardClick = card => {
    console.log(card, 'clicked', this);
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0;
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        {this.cards.map((card, index) => (
          <Card 
            card={card} 
            feedback="visible" 
            key={index}
            onClick={this.handleCardClick}
            //onClick={card => this.handleCardClick(card)} /> // on donne l'impression à Card qu'il reçoit une propriété différente à chaque fois et qu'il a besoin de se re-renderer
          />
        ))}
        {won && <HallOfFame entries={FAKE_HOF} />}
      </div>
    )
  }
}

export default App