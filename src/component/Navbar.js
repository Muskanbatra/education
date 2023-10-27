import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div className='nav'>

                <div className='logo'>
                    <span>LEARNER'S</span>
                </div>

                <div className='tab'>
                    <div> <span>Home</span> </div>
                    <div> <Link to = {"/services"}>Services</Link> </div>
                    <div> <span>About</span> </div>
                    <div> <span>Contact</span> </div>
                </div>

               
            </div>
            
        </>

    )
}
