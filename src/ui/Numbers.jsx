import React from 'react'

function Numbers({num, desc}) {
  return (
    <div className='flex flex-col gap-4 lg:gap-8 items-center'>
      <span className='text-lg text-primary lg:text-4xl'>{num}</span>
      <p className="text-secondary text-sm lg:text-lg text-center max-w-[163px]">{desc}</p>
    </div>
  )
}

export default Numbers 