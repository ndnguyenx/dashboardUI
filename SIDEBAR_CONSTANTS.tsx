import { SideNavItemGroup } from "@/types/types";
import { BsHouseDoor, BsQuestionCircleFill } from "react-icons/bs";
import { FaEnvelope, FaGear, FaListUl } from "react-icons/fa6";
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
                icon: <FaEnvelope size={20}/>
            },
        ]
    },
    {
        title: 'Others',
        menuList: [
            {
                title: 'Account',
                path: '/account',
                icon: <FaGear size={20}/>
            },
            {
                title: 'Help',
                path: '/help',
                icon: <BsQuestionCircleFill size={20}/>
            },
        ]
    }
]