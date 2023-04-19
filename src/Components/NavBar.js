import React from 'react'

function NavBar() {
  return (
    <div className='navBar' style={{backgroundColor: 'green', padding: '5px', display: 'flex', justifyContent: 'right'}}>
      <button>What is Pursuit?</button>
      <button>Create An Account</button>
      <button>SignIn</button>
    </div>
  )
}

export default NavBar