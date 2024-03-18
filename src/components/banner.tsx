'use client'

import React from 'react'
import Container from './helper/container'
import { BannerAutoWriter } from './helper/banner-auto-writer'
import BannerPhotoAndDetials from './helper/banner-photo-details'

const Banner = () => {
  return (

    <div className='min-h-screen pt-14 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: 'url("/banner-background.jpeg")' }}>

      <Container classNames="max-w-7xl bg-transparent flex justify-center mt-10 sm:mt-20">
        <BannerAutoWriter />
      </Container>

      <Container classNames="max-w-4xl mt-10 sm:mt-20">
        <BannerPhotoAndDetials />
      </Container>
    </div>

  )
}

export default Banner