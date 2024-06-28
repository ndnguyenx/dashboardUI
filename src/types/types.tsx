export type SideNavItems = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItems[];
}

export type SideNavItemGroup = {
    title: string;
    menuList: SideNavItems[];
}