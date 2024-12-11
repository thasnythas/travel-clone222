import React from 'react';
import { Link } from 'react-router';
import "./Header.css"

function Header() {
  return (
       <>
        <div className='container'>
      <nav>
        <ul>
          <h2>
            <img 
              src="https://img.freepik.com/premium-vector/travel-agency-logo-vector-white-background_1277164-7684.jpg?size=626&ext=jpg" 
              width="80px" 
              alt="Logo" 
            />
            ROWTHER ROWO Travel
          </h2>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Details1'>Details</Link></li>
          <li><Link to='/login1'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/service1'>Service</Link></li>
          <form className='mt-3'>
            <input 
              type="text" 
              placeholder="Enter a search" 
              className="form-control"
              style={{ borderColor: 'black' }}
            />
          </form>
        </ul>
      </nav>
    </div>
      
   
   </>
  )
}

export default Header