import { Icon } from '@iconify/react'
import React from 'react'

function Loading() {
  return (
    <div className='flex h-[100dvh] w-screen items-center justify-center'>
      <span className='h-20 w-20 animate-pulse text-primary'>
        <Icon icon={'mdi:paw'} className='h-full w-full' />
      </span>
    </div>
  )
}

export default Loading
