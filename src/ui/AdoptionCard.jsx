import React from 'react'

function AdoptionCard() {
  return (
    <div className="hover:drop-shadow-primary hover:bg-[#FEFEFE] p-1 lg:p-2 transition max-w-[297px] snap-start shrink-0">
      <div className="relative bg-[url('/src/assets/adoptions/bruno.png')] bg-cover bg-no-repeat aspect-[281/333]">
        <button className='bg-primary text-white w-7/12 py-4 lg:py-8 rounded-[3px]'>Adopt</button>
        <span>180 days waiting</span>
      </div>
    </div>
  )
}

export default AdoptionCard