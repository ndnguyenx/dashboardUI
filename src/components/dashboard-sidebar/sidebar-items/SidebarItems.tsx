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
    const [subMenuOpen, setSubMenuOpne] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpne(!subMenuOpen)
    };

    const activeLinkStyle = `text-sidebar-foreground hover:text-sidebar-foreground bg-sidebar-muted`;
    const styleMenu = `flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 hover:text-sidebar-foreground hover:bg-sidebar-muted rounded-md transition duration-200 ${toggleCollapse ? 'justify-center' : ''}`;
    const  navMenuDropdownItem = " text-sidebar-foreground py-2 px-4 hover:text-muted-foreground transiton duration-200";
    const dropdownMenuHeaderLink = `${styleMenu} ${subMenuOpen ? 'bg-sidebar-muted rounded-b-none' : ''}`;

    return (
        <>
            {item.submenu?(
                <div className="rounded-md min-w-[18px]">
                        <a className={`${dropdownMenuHeaderLink} ${pathName.includes(item.path) ? activeLinkStyle : ''}`} onClick={toggleSubMenu}>
                            {item.icon}
                            {!toggleCollapse &&
                                <>
                                    <span className="ml-3 text-base leading-6 font-semibold">{item.title}</span>
                                    <FaChevronRight className={`${subMenuOpen ? 'rotate-90': ''} ml-auto stroke-2 text-xs`}/>
                                </>
                            }
                        </a>
                        {subMenuOpen && !toggleCollapse && <div className="bg-sidebar-muted border-l-4">
                            <div className="grid gap-y-2 px-10 py-3 leading-5  ">
                                    {item.subMenuItems?.map((subItem, index) =>{
                                        return (
                                            <Link key={index} href={subItem.path} className={`${navMenuDropdownItem} ${subItem.path === pathName ? 'text-sidebar-muted-foreground font-medium' : 'text-sidebar-foreground'}`}>
                                                <span>{subItem.title}</span>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        }
                    </div>
                    ):
                    (<Link href={item.path} className={`${styleMenu} ${item.path === pathName ? activeLinkStyle: ''}`}> 
                        {item.icon}
                        {!toggleCollapse && <span className="ml-3 leading-6 font-semibold">{item.title}</span>}  
                      </Link>)
            }
        </>
    )
}