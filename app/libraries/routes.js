const views = [
  require('../views/dashboard'),
  require('../views/start'),
  require('../views/watch'),
  require('../views/preview')
]

const routes = {}
views.forEach(v => { routes[v.pathname] = { name: v.name, component: v } })

export default routes
