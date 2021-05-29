import React from 'react'

export default function ListDisplayThree(props) {
  return (
    <div>
    <h1>LIST THREE</h1>
    <div class="grid-container">
      {
        props.list.map((x) =>
        {
          if (x.listId === 3 && x.name !== null && x.name !== "") { return <p>{x.name}</p> }
    })
      }
      </div>
    </div>
  )
}
