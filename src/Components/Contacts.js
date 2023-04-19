import React from 'react'
import ContactUserCard from './ContactUserCard'

function Contacts() {
    return (
        <>
            <div className='Contacts' style={{
                border: '1px solid black', padding: '10px', textAlign: 'center', justifyContent: 'center',
                display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3%'
            }}>
                <h3>Contacts</h3>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </div>
        </>

    )
}

export default Contacts