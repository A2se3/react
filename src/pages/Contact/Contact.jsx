import React from 'react'

export default function Contact() {
    return (
        <div className='container' >
            <div className=' text-black pt-3 pb-5 '>

                <h1 className='text-black'>conatct section</h1>
                <div className='flex justify-center items-center '>
                    <div className='line bg-black '></div>
                    <i className='fa-solid fa-star text-black'></i>
                    <div className='linee bg-black '></div>
                </div>

            </div>
            <div className='w-3/5 mx-auto '>
                <form >

                    <div className='pb-4'>
                        <div class="relative">
                            <input type="text" id="floating_outlined"
                                class="block px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border focus:outline-none focus:ring-0 focus:border-none peer"
                                placeholder="UserName " />
                            <label
                                for="floating_outlined"
                                class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                UserName
                            </label>
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div class="relative">
                            <input type="number" id="floating_outlined"
                                class="block px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-none peer"
                                placeholder="UserAge " />
                            <label
                                for="floating_outlined"
                                class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                UserAge
                            </label>
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div class="relative">
                            <input type="email" id="floating_outlined"
                                class="block px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-none peer"
                                placeholder="UserEmail " />
                            <label
                                for="floating_outlined"
                                class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                UserEmail
                            </label>
                        </div>
                    </div>

                    <div className='pb-4'>
                        <div class="relative">
                            <input type="password" id="floating_outlined"
                                class="block px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-none peer"
                                placeholder="UserPassword " />
                            <label
                                for="floating_outlined"
                                class="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                UserPassword
                            </label>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="text-white flex justify-start items-start bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   ">Send Message</button>

                </form>
            </div>


        </div>
    )
}
