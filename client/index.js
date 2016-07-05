import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/configure-store'

import App from './app.jsx'
import { HomeContainer } from './components/home.jsx'
import { ProjectsContainer } from './components/projects-page.jsx'
import { SingleProjectContainer } from './components/single-project.jsx'

const store = configureStore()

store.subscribe(() => {
  console.log('store', store.getState())
})

const router = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ HomeContainer } />
      <Route path='/projects' component={ ProjectsContainer } />
      <Route path='/single/:id' component={ SingleProjectContainer } />
    </Route>
  </Router>
)

render(
  <Provider store={ store }>
    { router }
  </Provider>,
  document.getElementById('app')
)