import React from 'react'

function AdoptionCard(props) {
  const {name, days, age, img} = props
  const imgSrc = `/src/assets/adoptions/${img}`
  return (
    <div className="hover:drop-shadow-primary hover:bg-[#FEFEFE] p-1 lg:p-2 transition max-w-[297px] snap-start shrink-0">
      <div className={`relative bg-cover bg-no-repeat aspect-[281/333]`} style={{"backgroundImage": `url(${imgSrc})`}}>
        <button className='bg-primary text-white w-7/12 py-4 lg:py-8 rounded-[3px]'>Adopt</button>
        <span>{days} days waiting</span>
      </div>
    </div>
  )
}

export default AdoptionCard