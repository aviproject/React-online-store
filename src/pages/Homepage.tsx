import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <Link to='/productlist'><h1>Go to Online Store App</h1></Link>
    </div>
  )
}

export default Homepage
