import React, { PureComponent } from 'react'
import Number from '../components/Number'
import sudokuSets from '../modules/sudokuSets'
import updateSet from '../modules/updateSet'
import rulesChecker from '../modules/rulesChecker'

export default class Board extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      boardLayout: sudokuSets(1)
    }
  }

  componentDidMount() {
    const dropZones = document.querySelectorAll('p[draggable="false"]')

    dropZones.forEach(dropZone => {

      if(dropZone.innerHTML !== '0') {
        dropZone.classList.add('--initial')
      }

      dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropZone.classList.add('--dragover')
      });

      dropZone.addEventListener('dragleave', (event) => {
        event.preventDefault();
        dropZone.classList.remove('--dragover')
      });

      dropZone.addEventListener('drop', (event) => {
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
            boardLayout: updateSet(this.state.boardLayout, dropZone.id, event.dataTransfer.getData('text/plain'))
          });
        }

          dropZone.classList.remove('--dragover')
      });
    });
  };

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
