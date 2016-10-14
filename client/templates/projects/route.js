FlowRouter.route('/', {
  action () {
    Mount(C.layout, {
      component: () => <C.home />
    })
  },
  name: 'home'
})

FlowRouter.route('/projects/:_id', {
  action () {
    Mount(C.layout, {
      component: () => <C.project />
    })
  },
  name: 'project'
})
