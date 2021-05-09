import React from 'react'

export default function Number(props) {
  return (
    <div className="board__number">
      { props.position 
      ? <button id={ props.position } type="button" className="btn btn-warning">{ props.value }</button>
      : <button id={ props.position } type="button" className="btn btn-outline-warning"> </button>
      }
    </div>
  )
}
