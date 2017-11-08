import React from 'react'
import PropTypes from 'prop-types'

import './dark.scss'

const Hello = props => (
  <div>
    <div className='big-div'>
      Hello {props.name}!
    </div>

    <div className='big-div dark'>
      WATCH OUT, {props.name}!
    </div>
  </div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

export default Hello
