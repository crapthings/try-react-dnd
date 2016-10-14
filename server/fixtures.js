import _ from 'lodash'

import faker from 'faker'

const decks = ['react', 'meteor', 'node', 'npm', 'todos', 'test', 'graphql']

const project = {
  decks,
  title: faker.lorem.sentence(),
  desc: faker.lorem.sentences(),
  tasks: _.times(30, n => ({
    _id: Random.id(),
    title: faker.lorem.sentence(),
    completed: _.sample([true, false]),
    deck: _.sample(decks)
  }))
}

Meteor.startup(init)

function init () {
  Projects.remove({})
  !Projects.findOne() && Projects.insert(project)
}

console.log(JSON.stringify(project, null, 4))
