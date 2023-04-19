import React from 'react'

function UserProfile() {
  return (
    <div className='UserProfile'>
        <div id='box' style={{border: '1px solid black', padding: '10px', margin: '3%' }}>
            <img src='/profile.png' alt="profile"/>
            <h2>Jordan Walke</h2>
            <h3>React Creator</h3>
            <p>Lorem ipsem</p>
        </div>
    </div>
  )
}

export default UserProfile