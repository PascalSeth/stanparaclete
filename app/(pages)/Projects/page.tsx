import { Project } from '@/app/components/Cards'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='h-screen '>
      <Project/>
    </div>
  )
}

export default page