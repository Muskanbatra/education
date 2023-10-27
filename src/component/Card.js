import React from 'react'

export const Card = ({data}) => {
    return (
        <>
            <div>
                <div className='cardimg'>
                    <img src={data.image} alt='imagecard'/> 

                </div>

                <div>
                   {data.course}
                </div>

                <div><button>lEARN NOW</button></div>
            </div>
        </>
    )
}
