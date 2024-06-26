import React from 'react'
import Title from './Title'
import Slogan from './Slogan'
import Description from './Description'

function MainText({title, slogan, description, descClass = '', className = ''}) {
  return (
    <div data-aos="fade-up" className={'flex flex-col gap-y-3 lg:gap-y-6 ' + className}>
      {title && <Title title={title} />}
      {slogan && <Slogan slogan={slogan} />}
      {description && <Description text={description} className={descClass} />}
    </div>
  )
}

export default MainText
