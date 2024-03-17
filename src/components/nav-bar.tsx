import React from 'react'
import Container from './helper/container'
import Link from 'next/link'
import MainNav from './helper/main-nav'
import MobileSideBar from './helper/mobile-side-bar'


const NavBar = ({
}) => {
  return (
    <Container>
      <div className="flex flex-row-reverse sm:flex-row  relative px-4 sm:px-6 lg:px-8 h-16 items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-xl">Alex</p>
        </Link>
        <MainNav />
        <MobileSideBar />


      </div>
    </Container>
  )
}

export default NavBar