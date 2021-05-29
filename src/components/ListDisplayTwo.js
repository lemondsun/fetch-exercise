import React from 'react'


export default function ListDisplayTwo(props) {
  return (
    <div class='list-container'>
    <h1 class='list-title'>LIST TWO</h1>
    <div class="grid-container">
      {
        props.list.map((x) =>
        {
          if (x.listId === 2 && x.name !== null && x.name !== "") { return <div class='item-box'><p>{x.name}</p></div> }
    })
      }
      </div>
      
    </div>
  )
}
