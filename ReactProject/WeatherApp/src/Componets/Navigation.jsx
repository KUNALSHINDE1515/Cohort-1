import React from 'react'

function Navigation() {
    return (
        <>
        <nav className='contaier'>
        <div className="logo conra">
          <img src="/brand_logo.png" alt="logo" />
        </div>

        <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
        </>
    )
}

export default Navigation
