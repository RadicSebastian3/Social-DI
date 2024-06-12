import React from 'react'
import Image from 'next/image'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
   <div>
    <h1>404</h1>
    <div>
    <p>Oops, not found page</p>
    <span>Back to Home</span>
    <Link to="/">Tap here to go back home</Link>
    </div>
   </div>
  )
}
