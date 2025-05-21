import React from 'react'
import NavBarItem from './NavBarItem'

export default function Navbar( {title, param} ) {
  return (
    <div className='flex bg-[var(--background)] text-[var(--primary-dark)] p-4 lg:text-lg justify-center gap-6'>
        <NavBarItem title="Trending" param="fetchTrending"/>
        <NavBarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
