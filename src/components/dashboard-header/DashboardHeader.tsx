'use client'
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { VscThreeBars } from "react-icons/vsc";


export default function DashboardHeader() {
  const {toggleCollapse, invokeToggleCollapse} = useSidebarToggle();
  const handleSidebarToggle = () => {
      invokeToggleCollapse();
  }
  const headerNormalStyle = 'fixed bg-[#31353d] w-full z-0 px-4 shadow-sm shadow-slate-500/40 pl-[20rem]';
  const headerCollapseStyle = !toggleCollapse ? 'sm:pl-[20rem]' : 'sm:pl-[5.6rem]';
  return (
    <header className={`${headerNormalStyle} ${headerCollapseStyle}`}>
      <div className='flex items-center justify-between h-16'>
        <button onClick={handleSidebarToggle} className='order-2 sm:order-1 bg-[#343840] text-[#6e768e] hover:bg-white ml-3 rounded-md w-[30px] h-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex justify-center items-center'>
          <VscThreeBars />
        </button>
        <div className='order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center'>
          <span className='font-semibold text-sm'>D</span>
        </div>
      </div>
    </header>
  )
}
