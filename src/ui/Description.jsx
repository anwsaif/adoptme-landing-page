import React from 'react'

function Description({text, className}) {
  return (
    <div className={"text-secondary lg:text-xl max-w-[690px] " + className}>{text}</div>
  )
}

export default Description