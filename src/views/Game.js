import React, { PureComponent } from 'react'
import Board from '../components/Board'
import Clipboard from '../components/Clipboard'
import Modal from '../components/Modal'

export default class Game extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      endGame: false,
      pageKey: Math.random()
    }
  }

  gameStateCheck = (gameState) => {
    this.setState({ endGame: gameState })
  }

  gameStateReset = () => {
    this.setState({ endGame: false })
    this.setState({ pageKey: Math.random() })
  }

  render() {
    return (
      <div className="game" key={ this.state.pageKey }>
        <Clipboard></Clipboard>
        <Board parentGameStateCheck={ this.gameStateCheck }></Board>
        { this.state.endGame == true &&
          <Modal parentGameStateReset={ this.gameStateReset }></Modal>
        }
      </div>
    )
  }
}
