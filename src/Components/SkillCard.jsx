import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({url, name}) => {
  return ( 
    <motion.div className='relative mt-4 ml-2 group'>
      <div className='px-1 py-1 cursor-pointer h-20 w-20 mr-4 mb-4 border-2 border-gray-300 rounded-lg bg-white flex flex-col  items-center transition-all duration-200 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <img src={url} alt="" className='w-full h-full rounded-lg'/>
            <span className='absolute left-0 hidden font-semibold -top-5 group-hover:block'>{name}</span>
        </div>
    </motion.div>
  )
}

export default SkillCard
