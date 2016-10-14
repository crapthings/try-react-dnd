import React, { Component } from 'react'
import update from 'react/lib/update'
import Card from './Card'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import randomColor from 'randomcolor'

const deckStyle = () => ({
  backgroundColor: randomColor({
    luminosity: 'dark',
  }),
})

const style = {
  width: 400
}

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props)
    const cards = _.map(props.cards, (card, idx) => ({
      id: idx,
      ...card
    }))
    this.moveCard = this.moveCard.bind(this)
    this.state = {
      cards,
    }
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }))
  }

  render() {
    const { cards } = this.state

    const { deck } = this.props

    return (
      <div className={this.props.className} style={deckStyle()}>
        <div className='padded color-white'>{deck}</div>
        {cards.map((card, i) => {
          return (
            <Card key={card.id}
              index={i}
              id={card.id}
              text={card.title}
              moveCard={this.moveCard} />
          )
        })}
      </div>
    )
  }
}
