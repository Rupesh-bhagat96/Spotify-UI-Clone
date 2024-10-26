import React from 'react'
import { Navbar } from './Navbar'
import PodCastItem from './PodCastItem'
import { podCastData } from '../assets/assets'

const DisplayPodcast = () => {
  return (
    <div>
      <Navbar/>
      <div className='mb-4'>
      <div className='flex overflow-auto'>
            {
             podCastData.map((item,index)=>(<PodCastItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))
            }
      </div>
    </div>
    </div>
  )
}

export default DisplayPodcast
