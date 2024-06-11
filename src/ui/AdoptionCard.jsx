import React from 'react'

function AdoptionCard(props) {
  const {name, days, age, img} = props
  const imgSrc = `/src/assets/adoptions/${img}`
  return (
    <div className="flex w-full max-w-[297px] shrink-0 snap-start flex-col items-center p-1 transition hover:bg-[#FEFEFE] hover:drop-shadow-primary lg:p-2">
      <div className={`flex items-center group flex-col justify-end bg-cover bg-no-repeat aspect-[281/333] w-full`} style={{"backgroundImage": `url(${imgSrc})`}}>
        <button className='mb-[5em] w-1/3 rounded-[3px] bg-primary py-2 text-white hover:-translate-y-2 hover:!bg-primary hover:!text-white group-hover:opacity-100 lg:w-2/3 lg:py-4 lg:opacity-0'>Adopt</button>
        <span className='text-base text-white transition duration-200 hover:text-dark lg:text-xl'>{days} days waiting</span>
      </div>
      <div className='my-2 flex flex-col gap-2 text-center text-sm text-dark lg:my-4 lg:gap-4 lg:text-lg'>
        <span>{name}</span>
        <span>{age} old</span>
      </div>
    </div>
  )
}

export default AdoptionCard
