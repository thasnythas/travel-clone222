import React from 'react'

function Login() {
  return (
  <>
  <div className='d-flex justify-content-center align-items-center vh-100 mt-5 p-5'>
  <div className='card shadow-lg p-4' style={{ width: "400px",height:"500px" }}>
    <h1 className='text-center mb-3'>Login</h1>
    <form>
      <div className='mb-3'>
        <label htmlFor="email" className='form-label'>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className='form-control'
          placeholder='Enter your email'
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor="password" className='form-label'>Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          className='form-control'
          placeholder='Enter your password'
          required
        />
      </div>
   
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

export default Login