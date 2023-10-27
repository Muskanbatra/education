import React from 'react'
import { Card } from './Card'
import pic from "../assets/website.png"

export const Services = () => {

    const data = [
        {
            id: 1,
            image: pic,
            course: "Web Development"
        },
        {
            id: 2,
            image: pic,
            course: "Python"
        },
        {
            id: 3,
            image: pic,
            course: "c"
        },
        {
            id: 4,
            image: pic,
            course: "c++"
        },
        {
            id: 5,
            image: pic,
            course: "Java"
        },
        {
            id: 6,
            image: pic,
            course: "Sql"
        },

    ]

    return (

        <>
            <div className='services'>
                <div className='servicesheading'>
                    <h1>OUR SERVICES</h1>
                </div>

                <div className='card'>
                    {
                        data.map((item, index) => (
                            <Card data= {item} key={index}/>
                        )            
                       )
                    }

                </div>

            </div>
        </>

    )
}
