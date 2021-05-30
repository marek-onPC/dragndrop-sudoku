import React, { PureComponent } from 'react'
import Board from '../components/Board'
import Clipboard from '../components/Clipboard'

export default class Game extends PureComponent {
  handleCallback = (childData) => {
    console.log(childData)
  }

  render() {
    return (
      <div className="game">
        <Clipboard></Clipboard>
        <Board parentCallback={ this.handleCallback }></Board>
      </div>
    )
  }
}
