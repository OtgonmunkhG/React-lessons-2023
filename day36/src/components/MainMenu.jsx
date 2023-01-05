
import React from "react"
import SubMenu from "./SubMenu"
import { Navbar } from "react-bootstrap"
import menus from '../data/menus'



export default function MainMenu () {

    const subMenus = menus.map(subMenu => {
        return(
            <SubMenu 
            title={subMenu.title} 
            postion={subMenu.position}
            children={subMenu.children}
            />
        )
    })
    return(
        <div>
            here is Main Menu
            <Navbar bg="light" expand="lg">
                {subMenus}
            </Navbar>
            
        </div>
    )
}
