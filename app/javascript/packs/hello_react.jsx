import React from 'react'
import { render } from 'react-dom'
import Hello from '../components/hello_react'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
