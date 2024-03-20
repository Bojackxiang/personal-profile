'use client'

import React from 'react'
import Container from './helper/shared-container'
import { BannerAutoWriter } from './helper/banner-auto-writer'
import BannerPhotoAndDetials from './helper/banner-photo-details'
import BannerCVDownload from './helper/banner-cv-download'
import BannerScrollIcon from './helper/banner-scroll-icon'

const Banner = () => {
  return (

    <div className='min-h-screen pt-14 '>

      <Container classNames="max-w-7xl bg-transparent flex justify-center mt-10 sm:mt-20">
        <BannerAutoWriter />
      </Container>

      <Container classNames="max-w-4xl mt-10 sm:mt-20">
        <BannerPhotoAndDetials />
      </Container>

      <Container classNames="max-w-4xl mt-10 sm:mt-20">
        <BannerCVDownload />
      </Container>

      <Container classNames="max-w-4xl mt-10 sm:mt-[120px]">
        <BannerScrollIcon />
      </Container>
    </div>

  )
}

export default Banner