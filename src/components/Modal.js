import React from 'react'
import Number from '../components/Number'
import { Link } from "react-router-dom";

export default function Modal(props) {
  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <h3 className="text-center mb-3">You won!</h3>
            <h6 className="text-center mb-5">Choose Sudoku set!</h6>
            <div className="d-flex justify-content-center mb-5">
              <Link to="/game?set=1" onClick={ props.parentGameStateReset }><Number position={ 1 } value={ 1 } draggable="false"/></Link>
              <Link to="/game?set=2" onClick={ props.parentGameStateReset }><Number position={ 2 } value={ 2 } draggable="false"/></Link>
              <Link to="/game?set=3" onClick={ props.parentGameStateReset }><Number position={ 3 } value={ 3 } draggable="false"/></Link>
              <Link to="/game?set=4" onClick={ props.parentGameStateReset }><Number position={ 4 } value={ 4 } draggable="false"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
