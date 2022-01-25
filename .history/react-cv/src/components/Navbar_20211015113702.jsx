import React from 'react'
import link from "react-dom"
import { FaBars } from 'react-icons/fa';

export function Navbar () {
    return (
        <div>
            <div className="navbar">
                <link to="#" className="menuBars">
                    <FaBars />
                </link>
            </div>
        </div>
    )
}