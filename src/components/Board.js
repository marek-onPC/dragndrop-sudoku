import React, { PureComponent } from 'react'
import Number from '../components/Number'
import sudokuSets from '../modules/sudokuSets'
import updateSet from '../modules/updateSet'
import rulesChecker from '../modules/rulesChecker'
import finishChecker from '../modules/finishChecker'

export default class Board extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      boardLayout: sudokuSets(1),
      gameState: false
    }
  }

  dragoverEvent = (event) => {
    var dropZone = event.target
    event.preventDefault();

    dropZone.classList.add('--dragover')
  }

  dragleaveEvent = (event) => {
    var dropZone = event.target
    event.preventDefault();

    dropZone.classList.remove('--dragover')
  }

  dropEvent = (event) => {
    var dropZone = event.target
    event.preventDefault();

    if(dropZone.classList.contains('--initial')) {
      dropZone.classList.remove('--dragover')
    } else if (event.dataTransfer.getData('text/plain') == 0) {
      dropZone.classList.add('--zero', 'btn-outline-warning')
      dropZone.classList.remove('btn-warning')

      this.setState({
        boardLayout: updateSet(this.state.boardLayout, dropZone.id, event.dataTransfer.getData('text/plain'))
      });
    } else if (rulesChecker(this.state.boardLayout, event.dataTransfer.getData('text/plain'), dropZone.id)) {
      dropZone.classList.remove('--zero', 'btn-outline-warning')
      dropZone.classList.add('btn-warning')
      dropZone.innerHTML = event.dataTransfer.getData('text/plain')

      this.setState({
        boardLayout: updateSet(this.state.boardLayout, dropZone.id, event.dataTransfer.getData('text/plain')),
        gameState: finishChecker(this.state.boardLayout)
      });
    }

    dropZone.classList.remove('--dragover')
  }

  componentDidMount() {
    const dropZones = document.querySelectorAll('p[draggable="false"]')

    dropZones.forEach(dropZone => {
      if(dropZone.innerHTML !== '0') {
        dropZone.classList.add('--initial')
      }

      dropZone.addEventListener('dragover', this.dragoverEvent);
      dropZone.addEventListener('dragleave', this.dragleaveEvent);
      dropZone.addEventListener('drop', this.dropEvent);
    });
  };

  componentDidUpdate() {
    const dropZones = document.querySelectorAll('p[draggable="false"]')

    if(this.state.gameState === true ) {
      console.log('true')
      dropZones.forEach(dropZone => {
        dropZone.removeEventListener('dragover', this.dragoverEvent);
        dropZone.removeEventListener('dragleave', this.dragleaveEvent);
        dropZone.removeEventListener('drop', this.dropEvent)
      })
    }

    this.props.parentCallback("Game finished");
  }

  render() {
    return (
      <div className="board__layout d-flex flex-wrap">
        {
          this.state.boardLayout.map((boardSection, index) =>
          <div className="board__section d-flex flex-wrap align-content-center justify-content-center" key={ index }>
            { boardSection.map((boardRow) =>
              boardRow.map((boardNumber, index) =>
                <Number position={ boardNumber.id } value={ boardNumber.value } key={ index } draggable="false"/>
              )
              )}
          </div>
        )}
      </div>
    )
  }
}
