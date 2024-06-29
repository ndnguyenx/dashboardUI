'use client'
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { VscThreeBars } from "react-icons/vsc";
import UserNav from '../UserNav/UserNav';
import { ThemeSwitcher } from '../ThemeSwitcher/theme-switcher';


export default function DashboardHeader() {
  const {toggleCollapse, invokeToggleCollapse} = useSidebarToggle();
  const handleSidebarToggle = () => {
      invokeToggleCollapse();
  }
  const headerNormalStyle = 'fixed bg-sidebar w-full z-50 px-4 shadow-sm shadow-slate-500/40 pl-[20rem]';
  const headerCollapseStyle = !toggleCollapse ? 'sm:pl-[20rem]' : 'sm:pl-[5.6rem]';
  return (
    <header className={`${headerNormalStyle} ${headerCollapseStyle}`}>
      <div className='flex items-center justify-between h-16'>
        <button onClick={handleSidebarToggle} className='order-2 sm:order-1 bg-sidebar text-sidebar-muted-foreground hover:bg-foreground hover:text-background ml-3 rounded-md w-[30px] h-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex justify-center items-center'>
          <VscThreeBars />
        </button>
        <div className='flex items-center justify-between order-1 sm:order-2'>
          <div className='p-2 mb-2'>
            <ThemeSwitcher></ThemeSwitcher>
          </div>
          <div className='h-10 w-10 rounded-full bg-bg-sidebar-muted flex items-center justify-center text-center'>
          <UserNav />
        </div>
        </div>
      </div>
    </header>
  )
}
