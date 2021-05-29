import React from 'react'

export default function ListDisplayTwo(props) {
  return (
    <div>
    <h1>LIST TWO</h1>
    <div class="grid-container">
      {
        props.list.map((x) =>
        {
          if (x.listId === 2 && x.name !== null && x.name !== "") { return <p>{x.name}</p> }
    })
      }
      </div>
      
    </div>
  )
}
