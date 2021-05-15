import React from 'react'

export default function Number(props) {
  return (
    <div className="board__number">
      { props.value !== 0 
      ? <p id={ props.position } className="btn btn-warning">{ props.value }</p>
      : <p id={ props.position } className="btn btn-outline-warning --zero">{ props.value }</p>
      }
    </div>
  )
}