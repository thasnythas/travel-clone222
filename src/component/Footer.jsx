import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
   <>
    <div
        style={{ height: '300px', width: '100%' }}
        className='d-flex justify-content-center align-items-center flex-column mt-5 bg-warning'
      >
        <div
          className='d-flex justify-content-evenly align-items-center mb-5 w-100'
          style={{ color: 'white' }}
        >
          <div style={{ width: '400px' }}>
            <h5>ROWTHER ROW Traveling Agency</h5>
            <h6 className='d-flex justify-content-center text-right'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, ex nihil.
            </h6>
          </div>

          <div className='d-flex flex-column'>
            <h4>
              <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: 'small', fontWeight: 'bold' }}>
                Home
              </Link>
            </h4>
            <h4>
              <Link to="/service1" style={{ textDecoration: 'none', color: 'white', fontSize: 'small', fontWeight: 'bold' }}>
                Service
              </Link>
            </h4>
            <h4>
              <Link to="Login1" style={{ textDecoration: 'none', color: 'white', fontSize: 'small', fontWeight: 'bold' }}>
                Login
              </Link>
            </h4>
            <h4>
              <Link to="/register" style={{ textDecoration: 'none', color: 'white', fontSize: 'small', fontWeight: 'bold' }}>
                Register
              </Link>
              </h4>
              <h4>
              <Link to="/details1" style={{ textDecoration: 'none', color: 'white', fontSize: 'small', fontWeight: 'bold' }}>
                details
              </Link>
              
            </h4>
          </div>

          <div className='d-flex flex-column'>
            <h3>Contact: 10987654</h3>
            <input type="text" placeholder="Email address" id="" name="" />
            <img
              src="https://thumbs.dreamstime.com/b/booking-ticket-online-reservation-travel-flight-concept-84467761.jpg"
              style={{ width: '120px' }}
              alt="Booking ticket online"
            />
            
          </div>
        </div>
      </div>
   
   
   </>
  )
}

export default Footer