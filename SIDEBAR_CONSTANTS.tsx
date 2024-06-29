import { SideNavItemGroup } from "@/types/types";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaListUl, FaRegEnvelope } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { LuKanbanSquare } from "react-icons/lu";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
    {
        title: 'Dashboard',
        menuList: [
            {
                title: 'Dashboard',
                path: '/',
                icon: <BsHouseDoor size={20}/>
            },
        ]
    },
    {
        title: 'Manage',
        menuList: [
            {
                title: 'Products',
                path: '/products',
                icon: <LuKanbanSquare size={20}/>,
                submenu: true,
                subMenuItems: [
                    {title: 'All', path: '/products'},
                    {title: 'New', path: '/products/new'}
                ]
            },
            {
                title: 'Orders',
                path: '/orders',
                icon: <FaListUl size={20}/>
            },
            {
                title: 'Feedbacks',
                path: '/feedbacks',
                icon: <FaRegEnvelope size={20}/>
            },
        ]
    },
    {
        title: 'Others',
        menuList: [
            {
                title: 'Account',
                path: '/account',
                icon: <GoGear size={20}/>
            },
            {
                title: 'Help',
                path: '/help',
                icon: <FaRegQuestionCircle size={20}/>
            },
        ]
    }
]