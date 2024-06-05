import React from 'react'
import MainText from '../ui/MainText'
import { Icon } from '@iconify/react'

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
        <div className="flex w-1/2 gap-x-5 lg:gap-x-10">
          <ul className="lg:min-w-[629px]">
            <li>
              <details>
                <summary className='relative'>How to adopt a pet? <Icon icon='ep:arrow-down-bold' width={18} className='absolute right-0 top-0' /></summary>
                <p className="max-w-[448px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore consequatur temporibus neque dicta laboriosam </p>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer