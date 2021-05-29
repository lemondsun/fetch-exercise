import React from 'react'

export default function ListDisplayOne(props) {
  return (
    <div>
    <h1>LIST ONE</h1>
      <div class="grid-container">
        {
          props.list.map((x) =>
          {
            if (x.listId === 1 && x.name !== null && x.name !== "") { return <p>{x.name}</p> }
      })
        }
        </div>
        </div>
  )
}
