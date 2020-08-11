import React from 'react'
import { Hello } from './components'
import { hot } from 'react-hot-loader/root';

const App = () => (
  <div>
    <Hello/>
    <p>这是一个 egg + react 的全栈应用，前端基于webpack构建</p>
  </div>
)

export default hot(App)
