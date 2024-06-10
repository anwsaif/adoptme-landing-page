import React from 'react'
import MainText from '../ui/MainText'
import { Icon } from '@iconify/react'
import AdoptionCard from '../ui/AdoptionCard'

function Adoption() {
  const handleAdoptionNext = () => {
    console.log('next')
  }
  const handleAdoptionPrev = () => {
    console.log('prev')
  }
  return (
    <section id="adoption">
      <div className="container mx-auto flex flex-col gap-y-11 px-3 py-9 lg:gap-y-20 lg:px-4 lg:py-[4.5rem] xl:px-0">
        <MainText 
          title={'adoption pet'}
          slogan={'Adopt the pet that has waited too long'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consectetur adipisci.'}
        />
        <div className="flex items-center justify-end gap-x-5 lg:gap-x-10">

          <button className='flex items-center gap-x-14 rounded-[3px] bg-white p-4 drop-shadow-primary lg:gap-x-36'>
            Filters
            <Icon icon={'mi:filter'} />
          </button>
          <div className="flex justify-between gap-x-9 lg:gap-x-16">
            <button onClick={handleAdoptionNext}>
              <Icon icon={'ep:arrow-left-bold'}/>
            </button>
            <button onClick={handleAdoptionPrev}>
              <Icon icon={'ep:arrow-right-bold'}/>
            </button>
          </div>
        </div>
        <div className="snap-x flex gap-x-4 lg:gap-x-9 snap-mandatory transition overflow-x-scroll whitespace-nowrap">
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
        </div>
      </div>
    </section>
  )
}

export default Adoption
