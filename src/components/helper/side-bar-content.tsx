import { MENU_ITEMS } from '@/constant'
import { cn } from '@/lib/utils'
import React from 'react'

const SideBarContent = () => {
  return (
    <div className="flex flex-col h-full text-primary">
      <div className="flex-1 flex justify-start mt-5">
        <div className="space-y-2">
          {MENU_ITEMS.map((route) => (
            <div
              key={route.id}
              className={cn(
                "text-black flex w-full justify-start cursor-pointer hover:font-semibold transition",
              )}
            >
              <div className="flex items-start flex-1 text-xl">
                {/* <route.icon className="h-5 w-5" /> */}
                {route.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBarContent