import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Listing from './Pages/Listing'
import Listings from './Pages/Listings'
import Login from './Pages/Login'
import EditListing from './Pages/Edit'
import { ToastContainer, toast } from 'react-toastify';
import { useTheme } from "./context/ThemeContext";
import AddNewPlace from './Pages/AddNewPlace'
import { useEffect, useState } from 'react'


const App = () => {
  const { isDark, toggleTheme } = useTheme();
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])




  return (
    <div>
      <ToastContainer />


      <Navbar />
      {

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listing' element={<Listings />} />
          <Route path='/about' element={<About />} />
          <Route path='/edit' element={<EditListing token={token} />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/listing/:listId' element={<Listing />} />
          <Route path='/listing/:listId/edit' element={<EditListing token={token} />} />
          <Route path='/addNewPlace' element={<AddNewPlace token={token} />} />
        </Routes>
      }

    </div>
  )
}

export default App
