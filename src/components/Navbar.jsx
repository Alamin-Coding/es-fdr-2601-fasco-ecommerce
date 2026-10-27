import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="container flex justify-between">
        <a href="#">FASCO</a>
        <div className="">
          <ul className='flex gap-5'>
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>Deals</li>
            <li><a href="#"></a>New Arrivals</li>
            <li><a href="#"></a>Packages</li>
            <li><a href="#"></a>Sign in</li>
            <li><a href="#"></a>Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar