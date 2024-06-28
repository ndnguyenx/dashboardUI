import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import React, { ReactNode } from 'react'

export default function DashboardWrapper({children} : {children: ReactNode }) {
  const {toggleCollapse} = useSidebarToggle();
  const normalWrapperStyle = 'bg-slate-50 flex-grow text-black p-2 mt-16 pl-[20.4rem]'
  const collapsedWrapperStyle = !toggleCollapse ? 'sm:pl-[20.4rem]' : 'sm:pl-[5.6rem]';
  return (
    <div className={`${normalWrapperStyle} ${collapsedWrapperStyle}`}>
      {children}
    </div>
  )
}
