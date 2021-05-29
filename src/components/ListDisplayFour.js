import React from 'react'

export default function ListDisplayFour(props) {
  return (
    <div>
    <h1>LIST Four</h1>
    <div class="grid-container">
      {
        props.list.map((x) =>
        {
          if (x.listId === 4 && x.name !== null && x.name !== "") { return <p>{x.name}</p> }
    })
      }
      </div>
    </div>
  )
}
