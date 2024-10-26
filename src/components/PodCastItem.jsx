import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { PlayerContext } from '../contex/PlayerContext';

const PodCastItem = ({name,image,desc,id}) => {
   const {playById} = useContext(PlayerContext)
  return (
    <div onClick={()=>playById(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded ' src={image} alt="" />  
        <p className='font-bold mt-2 mb-1'>{name}</p>    
        <p className='text-slate-200 text-sm '>{desc}</p>    
    </div>
  )
}

export default PodCastItem
