import React from 'react'

export default function ListDisplayFour(props) {
  return (
    <div class='list-container'>
    <h1 class='list-title'>LIST Four</h1>
    <div class="grid-container">
        {
          //Here I map all items and display only the items with the correct list id and name requirements.
        props.list.map((x) =>
        {
          if (x.listId === 4 && x.name !== null && x.name !== "") { return <div class='item-box'><p>{x.name}</p></div> }
    })
      }
      </div>
    </div>
  )
}
