import React, { PureComponent } from 'react'
import Board from '../components/Board'

export default class Game extends PureComponent {
  render() {
    return (
      <div className="game">
        <Board></Board>
      </div>
    )
  }
}
