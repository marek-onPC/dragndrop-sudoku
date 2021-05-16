import React from 'react'

export default function Number(props) {
  return (
    <div className="board__number">
      { props.value !== 0 
      ? <p id={ props.position } className="btn btn-warning" draggable={ props.draggable }>{ props.value }</p>
      : <p id={ props.position } className="btn btn-outline-warning --zero" draggable={ props.draggable }>{ props.value }</p>
      }
    </div>
  )
}