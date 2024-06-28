'use client'
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { SideNavItems } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

export const SidebarMenuItems = ({ item }: {item : SideNavItems }) => {

    const {toggleCollapse} = useSidebarToggle();
    const pathName = usePathname();
    const activeLinkStyle =' rounded-md text-white light:text-black light:bg-[#efefef] bg-[#3a3f48]';
    const styleMenu ="flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white rounded-md transiton duration-200" ;
    const  navMenuDropdownItem = " text-[#6e768e] py-2 px-4 hover:text-white transiton duration-200";
    const [subMenuOpen, setSubMenuOpne] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpne(!subMenuOpen)
    };

    return (
        <>
            {
                item.submenu
                    ?(<div className="rounded-md min-w-[18px]">
                        <a className={`${styleMenu} ${pathName.includes(item.path) ? activeLinkStyle: ''}`} onClick={toggleSubMenu}>
                            {item.icon}
                            {
                                !toggleCollapse &&
                                <>
                                    <span className="ml-3 text-base leading-6 font-semibold">{item.title}</span>
                                    <FaChevronRight className={`${subMenuOpen ? 'rotate-90': ''} ml-auto stroke-2 text-xs`}/>
                                </>
                            }
                        </a>
                        {subMenuOpen && !toggleCollapse && <div className="bg-[#3a3f48] border-l-4">
                            <div className="grid gap-y-2 px-10 py-3 leading-5  ">
                                {
                                    item.subMenuItems.map((subItem, index) =>{
                                        return (
                                            <Link key={index} href={subItem.path} className={`${navMenuDropdownItem} ${subItem.path === pathName ? 'text-white':''}`}>
                                                <span>{subItem.title}</span>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        }
                    </div>)
                    :(<Link href={item.path} className={`${styleMenu} ${item.path === pathName ? activeLinkStyle: ''}`}> 
                        {item.icon}
                        {!toggleCollapse && <span className="ml-3 leading-6 font-semibold">{item.title}</span>}  
                      </Link>)
            }
        </>
    )
}