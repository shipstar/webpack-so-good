import React from 'react'
import { render } from 'react-dom'
import Counter from '../components/counter'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Counter />,
    document.body.appendChild(document.createElement('div')),
  )
})
