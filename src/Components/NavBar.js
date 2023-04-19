import React from 'react'

function NavBar(props) {
  return (
    <div className='NavBar' style={{backgroundColor: 'green', padding: '5px', display: 'flex', justifyContent: 'right'}}>
      <button onClick={props.handleClick}>What is Pursuit?</button>
      <button>Create An Account</button>
      <button>SignIn</button>
    </div>
  )
}

export default NavBar