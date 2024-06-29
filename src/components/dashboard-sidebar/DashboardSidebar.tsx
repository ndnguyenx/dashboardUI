import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logos/bat-logo.png"
import { SIDENAV_ITEMS } from '../../../SIDEBAR_CONSTANTS'
import { SidebarMenuItems } from './sidebar-items/SidebarItems'
import SidebarGroup from './sidebar-group-item/sidebar-group'
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle'
import '@/components/dashboard-sidebar/Sidebar.scss'

export default function DashboardSidebar() {
  const {toggleCollapse} = useSidebarToggle();
  const normalStyle = 'sidebar overflow-y-auto overflow-x-auto fixed bg-sidebar text-gray-500 z-[9999] h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]'
  const checkCollapsedStyle = toggleCollapse ? 'sm:w-[5.4rem] sm:left-0 left-[-100%]' : 'w-[20rem]';
  return (
    <aside className={`${normalStyle} ${checkCollapsedStyle}`}>
      <div className='sidebar-top flex relative items-center py-5 px-3.5 gap-1'>
        <Image src={logo} alt='logo' width={70} height={30} ></Image>
        {!toggleCollapse && <h3 className='logo-title pl-2 font-serif text-2xl text-sidebar-foreground min-w-max'>
          Batcave
        </h3>}
      </div>
      <nav className='flex flex-col gap-2 mt-4 transition duration-300 ease-in-out'>
        <div className='flex flex-col gap-2 px-4'>
          {
              SIDENAV_ITEMS.map((item, index) =>{
                return <SidebarGroup key={index} menuGroup={item} />
              })
          }
        </div>
      </nav>
    </aside>
  )
}
