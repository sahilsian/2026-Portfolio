'use client'
import {MenuIcon, XIcon} from "lucide-react";
import {useMobileMenu} from "@/hooks/useMobileMenu.ts";

export const MobileMenu = ({items:[]}) => {
    const { isMobileMenu, toggleMobileMenu } = useMobileMenu();
    return (
        <div>
            <div className={"lg:hidden flex hover:cursor-pointer "}>
                <div onClick={toggleMobileMenu} style={ isMobileMenu ? { display: 'flex' } : {  display: 'none'} }>
                    <XIcon />
                </div>
                <div onClick={toggleMobileMenu} style={ !isMobileMenu ? { display: 'flex' } : {  display: 'none'} }>
                    <MenuIcon />
                </div>
            </div>
        </div>
    )
}

