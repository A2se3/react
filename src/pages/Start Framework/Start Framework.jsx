import React from 'react';
import startFramework from './../../assets/avataaars.svg';

export default function StartFramework() {
    return (
        <div className=' frame  '>
            <img className=' image  ' src={startFramework} alt="" />

            <h1 className='text-white'>Start Framework</h1>
            <div className='flex justify-center items-center '>
                <div className='line  '></div>
                <i className='fa-solid fa-star text-white'></i>
                <div className='linee  '></div>
            </div>
            <div className='text-white py-2'>Graphic Artist - Web Designer - Illustrator</div>
        </div>



    )
}
