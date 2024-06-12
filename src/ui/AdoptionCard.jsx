import React from 'react'

function AdoptionCard(props) {
  const {name, days, age, img} = props
  const imgSrc = `/src/assets/adoptions/${img}`
  return (
    <div className="group flex w-full max-w-[297px] shrink-0 snap-start flex-col items-center p-1 transition hover:bg-[#FEFEFE] hover:drop-shadow-primary lg:p-2">
      <div className={`flex items-center  flex-col justify-end relative bg-cover z-0 bg-no-repeat aspect-[281/333] w-full`} style={{"backgroundImage": `url(${imgSrc})`}}>
        <div className='absolute z-10 h-full w-full bg-gradient-to-b from-white/0 to-black opacity-100 transition-opacity duration-200 group-hover:opacity-0'></div>
        <div className='absolute z-10 h-full w-full bg-gradient-to-b from-white/20 from-[13%] to-white/[.74] to-[81%] opacity-0 transition-opacity duration-200 group-hover:opacity-100'></div>
        <button className='z-20 mb-[5em] w-1/3 rounded-[3px] bg-primary py-2 text-white hover:-translate-y-2 hover:!bg-primary hover:!text-white group-hover:opacity-100 lg:w-2/3 lg:py-4 lg:opacity-0'>Adopt</button>
        <span className='z-20 mb-2 text-base text-white transition duration-200 group-hover:text-dark lg:mb-4 lg:text-xl'>{days} days waiting</span>
      </div>
      <div className='my-2 flex flex-col gap-1 text-center text-sm text-dark lg:my-4 lg:gap-2 lg:text-lg'>
        <span>{name}</span>
        <span>{age} old</span>
      </div>
    </div>
  )
}

export default AdoptionCard
