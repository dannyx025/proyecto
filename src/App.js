import './App.css'

import React from 'react'
import TodoList from './todos/TodoList'
import { hot } from 'react-hot-loader'

const App = () => (
    <div className="App">
        <TodoList></TodoList>
    </div>
)

export default hot(module)(App)
