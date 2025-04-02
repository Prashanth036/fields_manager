import React from 'react'
import "../Styles/Header.css"
import header_image from "../assets/header_image.svg"

export const Header = () => {
  return (
    <div className="header-card">
        <h1 className="text-header">Fields Manager</h1> 
        <img src={header_image} className="header-image"/>
    </div>
  )
}
