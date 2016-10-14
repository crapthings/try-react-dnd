import randomColor from 'randomcolor'

import Draggable from 'react-draggable'

import Test from './Container'

const Card = ({ _id, title }) => <Draggable>
  <div key={_id} className='mglr mgb padded ui-card'>
    {title}
  </div>
</Draggable>

const Deck = ({ deck, project }) => <div key={deck} className='inline-block vertical-align-top ui-deck' style={deckStyle()}>
  <div className='padded color-white'>{deck}</div>
  {_.filter(project.tasks, { deck })
    .map(({ _id, title, ...task }) => <Card _id={_id} title={title} />)}
</div>

const deckStyle = () => ({
  backgroundColor: randomColor({
    luminosity: 'dark',
  }),
})

const defaultComp = ({ decks, ...project }) => <div className='no-wrap'>
  {/*decks.map(deck => <Deck deck={deck} project={project} />)*/}
  {decks.map(deck => <Test key={deck} className='inline-block vertical-align-top ui-deck' deck={deck} cards={_.filter(project.tasks, { deck })} />)}
</div>

const defaultTracker = (props, onData) => {
  const project = Projects.findOne() || {}
  project._id && onData(null, project)
}

C.project = Container(defaultTracker)(defaultComp)
