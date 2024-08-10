import React from 'react'

export default function Footer() {
    return (
        <div className='text-white '>
            <div className=' footer flex  justify-around items-center'>

                <div className='text-center text-white w-1/3 pt-5'>
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>

                </div>

                <div className='text-center text-white w-1/3'>
                    <h2>AROUND THE WEB</h2>
                    <div className='icons '>
                        <i className="fa-brands fa-facebook mx-1 icon"></i>
                        <i className="fa-brands fa-twitter mx-1 icon"></i>
                        <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                        <i className="fa-solid fa-globe mx-1 icon"></i>
                    </div>
                </div>

                <div className='text-center text-white pt-3 w-1/3'>
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme
                        created by Route</p>
                </div>
            </div>
            <div className='flex  justify-around items-center bg-gray-800 p-4'>
                <p>
                    Copyright © Your Website 2021
                </p>


            </div>





        </div>



    )
}
