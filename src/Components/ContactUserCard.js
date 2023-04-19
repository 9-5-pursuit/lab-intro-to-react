import React from 'react'

function ContactUserCard() {
    return (
        <>
            <div className='ContactUserCard' style={{
                border: '1px solid black', padding: '10px', textAlign: 'center', justifyContent: 'center',
                display: 'flex', alignItems: 'center', marginTop: '2%'
            }}>
                <img src='/profile.png' alt="profile" width="50%" style={{borderRadius: '50%'}}/>
                <div>
                <h2>Jordan Walke</h2>
                <h3>React Creator</h3>
                <p>Lorem ipsem</p>
                </div>
            </div>
        </>

    )
}

export default ContactUserCard