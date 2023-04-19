import React from 'react';

import ContactUserCard from './ContactUserCard.js'

function Contacts() {
    return (
        <div className='contacts'>
        <h3>Contacts</h3>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        </div>
    )
}

export default Contacts;