import React from "react";
import './Menu.css'
import { Link } from 'react-router-dom'
// import Post from './postData'


function Menu( {menus} ){
    return(
        <>
            {menus.map ( (menu, id) =>{
                return (
                    <Link key={id} to={menu.url}
                    className='menu-item'>{menu.name}</Link>
                )
            })}
        </>
    )
}


export default Menu