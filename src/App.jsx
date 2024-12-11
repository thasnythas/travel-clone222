
import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Home from './pages/Home'
import Details from './pages/Details'
import Register from './pages/Register'
import Service from './pages/Service'
import Login from './pages/Login'

function App() {
  

  return (
    <>
    <Header/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Details1" element={<Details />} />
<Route path= "/register"element={<Register />} />
<Route path="/service1" element={<Service />} />
<Route path="/login1" element={<Login />} />

</Routes>


<Footer/>
     </>
  )
}

export default App
