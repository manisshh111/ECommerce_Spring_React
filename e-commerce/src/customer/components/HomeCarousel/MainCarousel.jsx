import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const MainCarousel = () => {

    const items= MainCarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt=''/>)




  return (
    <div className='-z-10'>
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite

    />
    </div>
    
  )
}

export default MainCarousel
