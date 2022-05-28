import React from 'react'
import logo from './img/logo512.png';
import logo1 from './img/logo192.png';

export default function Header() {
  return (
    <>
    <div className='flex'>
        <img alt="img" src={logo} className="h-10 w-10 ml-2 mt-2"/>
        <div className='flex items-center h-10 w-10 ml-2 mt-2'>
            <img alt='img' src={logo1} className="mx-3"/>
            <h1>Notes</h1>
        </div>
    </div>
    </>
  )
}
