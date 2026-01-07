import MenuItem, {MenuItemProps} from "@/components/menuItem/index.tsx";
import Typography from "@/components/typography";
import {Link} from "@tanstack/react-router";
import {lazy} from "react";
interface MenuProps {
    title: string;
    menuItems?: MenuItemProps[]
    backgroundColor?: string;
}

const loadMenu = () =>
    import("@/components/menu/mobileMenu.tsx").then((module) => ({ default: module.MobileMenu}))

// Use Lazy to wrap client component
const MobileMenu = lazy(loadMenu)
const Menu = ({title, menuItems, backgroundColor="#EDEDED"}:MenuProps) => {
    if (!menuItems) return null

    const res = []
    for (let i = 0; i < menuItems?.length; i+= 3) {
        res.push(menuItems.slice(i, i + 3))
    }

    return (
        <header style={{backgroundColor: backgroundColor}} className={"fixed z-30 top-0 left-0 w-full flex items-center justify-between gap-10 px-6 lg:px-22 py-2"}>
            <Link to={"/"}>
                <Typography level={"3"} value={title}></Typography>
            </Link>
            <nav className={"hidden lg:flex items-center flex-1 justify-between"}>
                {res?.map((itemGroup, index) => {
                    return <div key={index} className={"flex gap-4"}>
                        {itemGroup?.map((item) => {
                            return <MenuItem
                                key={item.id}
                                {...item}
                            ></MenuItem>
                        })}
                    </div>
                })}
            </nav>
            <MobileMenu menuItems={menuItems}>

            </MobileMenu>
        </header>
    )
}

export default Menu