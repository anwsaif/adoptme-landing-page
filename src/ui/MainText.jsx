import React from 'react'
import Title from './Title'
import Slogan from './Slogan'
import Description from './Description'

function MainText({title, slogan, description, descClass}) {
  return (
    <div className='flex flex-col gap-y-3 lg:gap-y-6'>
      {title && <Title title={title} />}
      {slogan && <Slogan slogan={slogan} />}
      {description && <Description text={description} className={descClass} />}
    </div>
  )
}

export default MainText