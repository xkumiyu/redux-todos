import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import App from './components/App'

let store = createStore(todo)

import { addTodo } from './actions'
store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))

console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
