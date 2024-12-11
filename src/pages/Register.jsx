import React from 'react'

function Register() {
  return (
    <>
<div className=' d-flex justify-content-center align-items-center vh-100 mt-5 '>
<div className=' card shadow-lg p-4' style={{ width:"400px"}}>
<h1 className='text-center mb-3'>Registeration</h1>
<form>
<div className='mb-3'>
<label htmlFor="email" className='form-label'>Email:</label>
<input type="email"name="email"id="email" className='form-control'
placeholder='enter your email' required/></div>
<div className='mb-3'>
<label htmlFor="name" className='form-label'>Name:</label>
<input type="name"name="name"id="name" className='form-control'
placeholder='enter you name' required/></div>

<div className='mb-3'>
<label htmlFor="password" className='form-label'>password:</label>
<input type="password"name="password"id="password" className='form-control'
placeholder='enter you password' required/></div>
<div className='mb-3'>
  <label htmlFor='conform password' className=" form-label">conform:</label>
  <input type="conform password"name="conform password"id="password" className='form-control'
placeholder='conform password' required/></div>
<div className="d-grid pt-4">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
             

            </div>













</form>







</div>




     </div>


    </>
  )
}

export default Register