import React from 'react'
import MainText from '../ui/MainText'

function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex flex-col items-center lg:gap-x-10 justify-between gap-y-12 px-3 py-9 lg:gap-y-24 lg:px-4 lg:py-[4.5rem] xl:px-0">
        <MainText 
          title={'frequently asked questions'}
          slogan={'Adopt the pet that has waited too long'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sim dolor sit amet, consectetur adipisci.'}
          className='text-center items-center'
        />
      </div>
    </footer>
  )
}

export default Footer