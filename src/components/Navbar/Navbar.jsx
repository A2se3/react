import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className=" nav2 bg-gray-600  ">
            <div className="container  flex py-4 justify-between items-center   ">
                <ul className='nav0 text-white  cursor-pointer '>
                    <li>
                        <NavLink className='text-white no-underline ' to="">Start Framework</NavLink>
                    </li>
                </ul>

                <ul className=' nav1 text-white flex justify-between mb-0  space-x-8  '>

                    <li>
                        <NavLink className='text-white no-underline  ' to="about">About</NavLink>
                    </li>
                    <li >
                        <NavLink className='text-white no-underline ' to="Portfolio">Portfolio</NavLink>
                    </li>
                    <li >
                        <NavLink className='text-white no-underline ' to="contact">Contact</NavLink>
                    </li>


                </ul>






                

            </div>
        </nav>
    )
}
