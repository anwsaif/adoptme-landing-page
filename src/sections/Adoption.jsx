import React, { useEffect, useRef, useState } from 'react'
import MainText from '../ui/MainText'
import { Icon } from '@iconify/react'
import AdoptionCard from '../ui/AdoptionCard'

function Adoption() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const [isLeft, setLeft] = useState(true)
  const [isRight, setRight] = useState(false)

  const snapRef = useRef(null)

  const data = [
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
    {name: 'Bruno', days: '180', age: '9 months', img: 'bruno.png'},
  ]

  const handleScroll = () => {
    if(snapRef.current){
      const { scrollLeft } = snapRef.current
      setScrollPosition(scrollLeft)
      console.log('Scrolled to: ' + scrollPosition)
    }
  }

  useEffect(() => {
    const container = snapRef.current
    if(container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const handleAdoptionPrev = () => {
    if(snapRef.current) {
      const container = snapRef.current
      const scrollAmout = container.clientWidth
      container.scrollTo({
        left: Math.max(0, container.scrollLeft - scrollAmout),
        behavior: 'smooth'
      })
    }
  }

  const handleAdoptionNext = () => {
    if (snapRef.current) {
      const container = snapRef.current;
      const scrollAmount = container.clientWidth; // Scroll by the visible width of the container
      container.scrollTo({
        left: Math.min(container.scrollWidth, container.scrollLeft + scrollAmount),
        behavior: 'smooth',
      });       
    }
  };

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
            <button onClick={handleAdoptionPrev}>
              <Icon icon={'ep:arrow-left-bold'} className={isLeft ? 'text-inactive':''} />
            </button>
            <button onClick={handleAdoptionNext}>
              <Icon icon={'ep:arrow-right-bold'} className={isRight ? 'text-inactive': ''} />
            </button>
          </div>
        </div>
        <div className="snap-x flex gap-x-4 lg:gap-x-9 snap-mandatory transition overflow-x-scroll whitespace-nowrap" ref={snapRef}>
          {data.map(({name, days, age, img}, i) => (
            <AdoptionCard key={i} name={name} days={days} age={age} img={img} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Adoption
