import React from 'react'
import ContactUserCard from './ContactUserCard'

function Contacts() {
  return (
    <>
    <h2>Contacts</h2>
    <ul>
        <li>{ContactUserCard}</li>
        <li>{ContactUserCard}</li>
        <li>{ContactUserCard}</li>
    </ul>
    </>
  )
}

export default Contacts