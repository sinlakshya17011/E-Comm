import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img src={assets.logo} className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                      Lorem Ipsum is dummy text  of the printing and typesetting idustry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an umknown printer took a gallery of type and scrambles it to make a type specimen book.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col text-gray-600 gap-1 '>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col text-gray-600 gap-1'>
                      <li>+1-625-482-0362</li>
                      <li>forever@foryougmail.com</li>
                  </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@forever.com - ALL Right Reserved </p>
            </div>
        </div>
    )
}

export default Footer