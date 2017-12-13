import React from 'react'

import Note from '../components/Note'

/* eslint-disable react/prefer-stateless-function  */
export default class App extends React.Component {
  shouldComponentUpdate() {
    return true
  }

  render() {
    const text = 'Hello there!'
    const buttonText = 'click me pretty please'

    return (
      <div style={{ textAlign: 'center' }}>
        <Note>
          {text}
          <br />
          <button kind="primary" type="button">
            {buttonText}
          </button>
        </Note>
      </div>
    )
  }
}
