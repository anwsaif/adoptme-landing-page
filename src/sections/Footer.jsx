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
        <div className="flex w-full gap-x-5 lg:w-1/2 lg:gap-x-10">
          <ul className="w-full lg:min-w-[629px]">
            <li>
              <details>
                <summary className=''>How to adopt a pet? 
                </summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore consequatur temporibus neque dicta laboriosam </p>
              </details>
            </li>
            <li>
              <details>
                <summary>How long does the process take to adopt?</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quaerat.</p>
              </details>
            </li>
            <li>
              <details>
                <summary>How much should i spend to adopt?</summary>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit rem consequuntur, doloremque dolores aut?</p>
              </details>
            </li>
            <li>
              <details>
                <summary>Where is my nearest adoption place?</summary>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nihil qui hic ullam blanditiis perspiciatis vero, mollitia ipsam.</p>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer