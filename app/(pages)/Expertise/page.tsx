import React from 'react'
import FirstSection from '../../components/first-section/page'
import ThirdSection from '../../components/third-section/page'
import Carousel from '@/app/components/carousel'
import SecondSection from '@/app/components/second-section/page'

type Props = {}

function Expertise({}: Props) {
  return (
    <div>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Carousel/>
    </div>
  )
}

export default Expertise