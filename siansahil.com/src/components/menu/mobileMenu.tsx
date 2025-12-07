'use client'
import {useState} from "react";
import {MenuIcon, XIcon} from "lucide-react";

export const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <div className={"lg:hidden flex hover:cursor-pointer "}>
                <div onClick={()=> setShowMenu(false) } style={ showMenu ? { display: 'flex' } : {  display: 'none'} }>
                    <XIcon />
                </div>
                <div onClick={()=> setShowMenu(true) } style={ !showMenu ? { display: 'flex' } : {  display: 'none'} }>
                    <MenuIcon />
                </div>
            </div>
        </div>
    )
}

