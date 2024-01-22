import React from 'react'
import NavBarItem from './NavBarItem'

export default function Navbar( {title, param} ) {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
        <NavBarItem title="Trending" param="fetchTrending"/>
        <NavBarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
