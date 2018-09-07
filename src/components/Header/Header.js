import React from 'react'
import './Header.css'
import logo from './logo.png'

export default function Header(props){
    return(
        <div className="Header">
            <img className="logo" src={logo} alt=""/>
        </div>

    )


}