import React, { useState }  from 'react'
import Number from '../components/Number'

export default function Clipboard() {
  const [clipboard] = useState([
    { id: 'clip0', value: 0 },
    { id: 'clip1', value: 1 },
    { id: 'clip2', value: 2 },
    { id: 'clip3', value: 3 },
    { id: 'clip4', value: 4 },
    { id: 'clip5', value: 5 },
    { id: 'clip6', value: 6 },
    { id: 'clip7', value: 7 },
    { id: 'clip8', value: 8 },
    { id: 'clip9', value: 9 },
  ])

  return (
    <div className="board__clipboard d-flex align-content-center justify-content-center">
      {
        clipboard.map((clipboardNumber, index) => 
          <Number position={ clipboardNumber.id } value={ clipboardNumber.value } key={ index }/>
        )
      }
    </div>
  )
}