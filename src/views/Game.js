import React, { PureComponent } from 'react'
import Board from '../components/Board'
import Clipboard from '../components/Clipboard'

export default class Game extends PureComponent {
  render() {
    return (
      <div className="game">
        <Clipboard></Clipboard>
        <Board></Board>
      </div>
    )
  }
}
