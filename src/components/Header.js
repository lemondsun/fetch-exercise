import React from 'react'

export default function Header(props) {
  return (
    <div class='header'>
    <img class='logo' src={props.logo} alt='company-emblem' />
    <h1 id='project-title'>Coding Excercise</h1>
    </div>
  )
}
