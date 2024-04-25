import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className='flex items-center justify-between container mx-auto'>
        <div>
      <h1>Movie App</h1>
        </div>
      <div>
        <CiSearch/>
      </div>
    </div>
  )
}

