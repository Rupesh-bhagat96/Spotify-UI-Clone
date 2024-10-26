import React from 'react'
import { assets } from '../assets/assets'
import { useLocation, useNavigate, Link } from 'react-router-dom'

export const Navbar = () => {
  const Navigate = useNavigate()
  const path =useLocation().pathname
  const isAlbumActive =  path.includes("album")
  
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>Navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>Navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4 '>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'><a href="https://www.spotify.com/de-en/download/windows/" target='_blank'>Install App</a></p>
          <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>R</p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className={path==="/"?'bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' : 'bg-black px-4 py-1 rounded-2xl cursor-pointer' }><Link to="/"> All</Link></p>
        <p className={path==="/music"?'bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' : 'bg-black px-4 py-1 rounded-2xl cursor-pointer'}><Link to="/music"> Music </Link></p>
          {
            isAlbumActive?<p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'> Album </p> :""
          }
        <p className={path==="/podcast"?'bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' : 'bg-black px-4 py-1 rounded-2xl cursor-pointer' }><Link to="/podcast"> Podcast</Link></p>
      </div>
    </>
  )
}


