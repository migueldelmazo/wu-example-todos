import React from 'react'
import ReactDom from 'react-dom'
import wu from 'wu'
import TodosView from './TodosView'

// import ToDos business logic
import './todos'

// start Wu
wu.start()

// render main view
ReactDom.render(<TodosView />, document.getElementById('root'))
