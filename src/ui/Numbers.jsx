import React from 'react'

function Numbers({num, desc, i}) {
  return (
    <div data-aos="fade-left" data-aos-duration={i == 1 ? '800' : (i == 2 ? '1000': '')} className='flex flex-col items-center gap-4 lg:gap-8'>
      <span className='text-lg text-primary lg:text-4xl'>{num}</span>
      <p className="max-w-[163px] text-center text-sm text-secondary lg:text-lg">{desc}</p>
    </div>
  )
}

export default Numbers 
