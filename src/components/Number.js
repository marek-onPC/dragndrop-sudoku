import React from 'react'

export default function Number(props) {
  return (
    <div className="board__number">
      { props.value !== 0 
      ? <button id={ props.position } type="button" className="btn btn-warning">{ props.value }</button>
      : <button id={ props.position } type="button" className="btn btn-outline-warning --zero">{ props.value }</button>
      }
    </div>
  )
}
