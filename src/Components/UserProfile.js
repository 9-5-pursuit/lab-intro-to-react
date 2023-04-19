import React from 'react'

function UserProfile() {
    return (
        <div className='UserProfile'>
            <div id='box' style={{ border: '1px solid black', padding: '1em', margin: '3%', display: 'flex' }}>
                <img src='/profile.png' alt="profile" width="175" />
                <div style={{ margin: '3%' }}>
                    <h2>Jordan Walke</h2>
                    <h3>React Creator</h3>
                    <p>Lorem ipsem</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile