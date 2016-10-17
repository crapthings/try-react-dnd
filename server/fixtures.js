import _ from 'lodash'

import faker from 'faker'

import randomColor from 'randomcolor'

const decks = ['react', 'meteor', 'node', 'npm', 'todos', 'test', 'graphql']

const _decks = _.map(decks, deck => ({
  name: deck,
  color: randomColor({
    luminosity: 'dark',
  })
}))

const project = {
  decks: _decks,
  title: faker.lorem.sentence(),
  desc: faker.lorem.sentences(),
  tasks: _.times(30, n => ({
    _id: Random.id(),
    title: faker.lorem.sentence(),
    completed: _.sample([true, false]),
    deck: _.sample(_decks).name,
  }))
}

Meteor.startup(init)

function init () {
  Projects.remove({})
  !Projects.findOne() && Projects.insert(project)
}

console.log(JSON.stringify(project, null, 4))
