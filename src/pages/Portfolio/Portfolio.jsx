import React from 'react'
import portfolio from './../../assets/poert1.png';
import port2 from './../../assets/port2.png';
import port3 from './../../assets/port3.png';
import { useState } from 'react'

import styles from './Portfolio.module.css'


export default function Portfolio() {
    console.log(styles);


    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);


    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className={`style.container py-4`}>
            <div className=' text-black py-4'>


                <h1 className='text-black'>portfolio component</h1>
                <div className='flex justify-center items-center '>
                    <div className='line bg-black '></div>
                    <i className='fa-solid fa-star text-black'></i>
                    <div className='linee bg-black '></div>
                </div>

            </div>

            <div className="imgs   ">
                <ul className=' container flex  justify-between items-center gap-5'>
                    <li onClick={() => openModal(portfolio)}>
                        <div className='test  '>
                            <img className=' imges  ' src={portfolio} alt="" />
                            <div className='layer  '>
                                <i className="text-white fa-solid fa-plus fa-6x "></i>
                            </div>
                        </div>



                    </li>

                    <li onClick={() => openModal(port2)}>
                        <div className='test  '>
                            <img className=' imges  ' src={port2} alt="" />
                            <div className='layer  '>
                                <i className="text-white fa-solid fa-plus fa-6x "></i>
                            </div>
                        </div>

                    </li>

                    <li onClick={() => openModal(port3)}>
                        <div className='test  '>
                            <img className=' imges  ' src={port3} alt="" />
                            <div className='layer  '>
                                <i className="text-white fa-solid fa-plus fa-6x "></i>
                            </div>
                        </div>

                    </li>

                </ul>
                <ul className='container  flex  justify-between items-center gap-5 '>
                    <li onClick={() => openModal(portfolio)}>
                        <div className='test  '>
                            <img className=' imges  ' src={portfolio} alt="" />
                            <div className='layer  '>
                                <i className="text-white fa-solid fa-plus fa-6x "></i>
                            </div>
                        </div>

                    </li>
                    <li onClick={() => openModal(port2)}>
                        <div className='test  '>
                            <img className=' imges  ' src={port2} alt="" />
                            <div className='layer  '>
                                <i className="text-white fa-solid fa-plus fa-6x "></i>
                            </div>
                        </div>

                    </li>

                    <li onClick={() => openModal(port3)} >
                        <div className='test  '>
                            <img className=' imges  ' src={port3} alt="" />
                            <div className='layer  '>
                                <i className="text-white fa-solid fa-plus fa-6x "></i>
                            </div>
                        </div>

                    </li>

                </ul>





            </div>


            {isOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={currentImage} alt="Full view" className={styles.modalImage} />
                        <button onClick={closeModal} className={styles.closeButton}>Close</button>
                    </div>
                </div>
            )}





        </div >

    )
}
