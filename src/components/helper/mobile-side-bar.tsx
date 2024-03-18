import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import SideBarContent from './side-bar-content'

const MobileSideBar = () => {
  return (
    <section className='sm:hidden flex-1'>
      <Sheet>
        <SheetTrigger className='pr-4 text-white'>
          <Menu />
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className='text-left text-3xl'>Welcome!</SheetTitle>
          </SheetHeader>
          <SideBarContent />
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileSideBar