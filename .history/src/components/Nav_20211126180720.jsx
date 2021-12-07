import React from 'react'
import { Link, useLocation } from "react-router-dom"

import { Contact } from '../Pages/Contact';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { SkillsPage } from '../Pages/SkillsPage';



export default function Nav() {

    const params = useLocation();

    let add = () => {
        console.log("work2");
        let classSelected = document.querySelector(".ShowMySkill");
        console.log('test');
        classSelected.classList.remove("d-none");
    } 

    let target = () => {
        console.log('try it');
        

        if (params.pathname == "/skills" || params.pathname == "/skills") {
            console.log("work");
            add();
        } else {
            console.log("not yet");
        }
    }

    console.log(params.pathname);
    
    return (
            <section className="sec-4">
                <div className="menu">
                    <div className="navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" onClick={target}> Home </Link>
                                </li>
                                <li>
                                    <Link to="/contact${test}`" onClick={target}> Contact </Link>
                                </li>
                                <li>
                                    <Link to="/about" onClick={target}> About </Link>
                                </li>
                                <li>
                                    <Link to="/skills" onClick={target}> Skills </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
    )
}