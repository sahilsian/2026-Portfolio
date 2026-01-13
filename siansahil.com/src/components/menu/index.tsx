import MenuItem, {MenuItemProps} from "@/components/menuItem/index.tsx";
import Typography from "@/components/typography";
import {Link} from "@tanstack/react-router";
import {lazy} from "react";
import RouterButton from "@/components/routerButton";
interface MenuProps {
    title: string;
    menuItems?: MenuItemProps[]
    backgroundColor?: string;
}

const loadMenu = () =>
    import("@/components/menu/mobileMenu.tsx").then((module) => ({ default: module.MobileMenu}))

const MobileMenu = lazy(loadMenu)
const Menu = ({title, menuItems, backgroundColor="#EDEDED"}:MenuProps) => {
    if (!menuItems) return null

    return (
        <header style={{backgroundColor: backgroundColor}} className={"fixed z-40 top-0 left-0 w-full flex items-center justify-between gap-10 px-6 lg:px-22 py-2"}>
            <div className={'flex gap-10'}>
                <Link to={"/"}>
                    <Typography level={"3"} value={title}></Typography>
                </Link>
                <nav className={"hidden lg:flex items-center flex-1 gap-4 mb-2"}>
                    {menuItems?.map((item) => {
                        return <MenuItem
                            key={item.id}
                            {...item}
                        ></MenuItem>
                    })}
                </nav>
            </div>
            {/*<div>*/}
            {/*    <RouterButton button={}></RouterButton>*/}
            {/*</div>*/}

            <MobileMenu menuItems={menuItems}>

            </MobileMenu>
        </header>
    )
}

export default Menu