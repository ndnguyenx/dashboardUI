import React from 'react'
import { SideNavItemGroup } from '@/types/types'
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle'
import { SidebarMenuItems } from '../sidebar-items/SidebarItems'

export default function SidebarGroup({menuGroup}: {menuGroup: SideNavItemGroup}) {
    const {toggleCollapse} = useSidebarToggle();
    const menuGroupStyle = ' py-4 tracking-[0.1rem] font-medium uppercase text-sm text-sidebar-foreground';
    return (
        <>
           <h3 className={menuGroupStyle}>{!toggleCollapse ? menuGroup.title : <div className="border-t border-sidebar-foreground w-full"></div>}</h3>
           {
            menuGroup.menuList?.map((item, index) => {
                return <SidebarMenuItems key={index} item={item}/>
            })
           }
        </>
    )
}
