import React from 'react'
import MainText from '../ui/MainText'

function Adoption() {
  return (
    <section id="adoption">
      <div className="container mx-auto flex flex-col gap-y-11 px-3 py-9 lg:gap-y-20 lg:px-4 xl:px-0 lg:py-[4.5rem]">
        <MainText 
          title={'adoption pet'}
          slogan={'Adopt the pet that has waited too long'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consectetur adipisci.'}
        />
      </div>
    </section>
  )
}

export default Adoption