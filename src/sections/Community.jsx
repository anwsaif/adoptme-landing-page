import React from 'react'
import MainText from '../ui/MainText'

function Community() {
  return (
    <section id="community">
      <div className="container flex flex-col gap-y-11 lg:gap-y-20 mx-auto py-9 lg:px-4 xl:px-0 px-3">
        <div className="flex justify-between gap-x-10 flex-col lg:flex-row lg:gap-x-24">
          <MainText title={'our mission for pet'} slogan={'Let’s Choose and Adopt your New Lovely Pet'} />
          <MainText description={`You need to see some pets in Adoptme. We have the friend that's you need to have. We also have the equipment you need to take care of it.`} descClass={'mt-auto'} />
        </div>
        <div className="flex flex-col lg:flex-row gap-x-12 lg:gap-x-24">
          <img src="/src/assets/community.png" alt="Community" />
          <MainText title={'adoptme community'} slogan={'Connect with adoptme across the country'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consec'} />
        </div>
      </div>
    </section>
  )
}

export default Community