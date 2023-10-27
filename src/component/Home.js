import React, { useEffect } from 'react'
import image from '../assets/n.avif'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate()
    const  handleNavigate =()=>{
        navigate('/login')
    }

    return (
        <>
            <div className='container'>
                <div className='para'>
                    <div className='head'> <h1>Build Your Skills With</h1>
                        <div className='heading'>
                            <h1>LEARNER'S</h1>
                        </div>
                    </div>

                    <div className='heading2'>
                        <span>Start learning from World's best teachers</span>
                    </div>
                    <div className='homebutton'>
                        <button onClick={handleNavigate} >Start Learning</button>
                    </div>
                </div>

                <div className='image'>
                    <img src={image}></img>
                </div>

            </div>
            <div className='footer'>
                <p> All Rights Reserved | Terms and Conditions</p>

            </div>
        </>
    )
}
