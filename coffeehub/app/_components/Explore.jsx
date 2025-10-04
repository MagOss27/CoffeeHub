import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Explore = () => {
    return (
        <>
            <div className="bg-gray-50">
                <div className='container py-20 '>
                    {/* ************************** */}
                    <div className="grid grid-cols-6 text-center py-10 md:py-16">
                        <div className='col-start-2 col-span-4'>
                            <h1 className='text-5xl font-bold'>Explore Our Alowishus</h1>
                            <p className='py-2 text-gray-500 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptatem, consectetur cumque magni dicta quaerat dolore, sint ex cum dolorem blanditiis ullam officia incidunt soluta expedita! Cum asperiores quisquam sunt?</p>
                        </div>
                    </div>
                    {/* ************************** */}
                    <div className="grid grid-cols-3 gap-14 w-4/5 mx-auto">
                        <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all ">
                            <h1 className='text-3xl font-semibold text-gray-700'>Our Catering</h1>
                            <p className='py-2 text-gray-500 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className="text-center">
                                <Image src="/images/icon1.png" alt='cafe' width={200} height={200} className='py-6 ' />
                                <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" variant="black">Order Cathering</Button>
                            </div>
                        </div>
                        {/* ************************** */}
                        <div className="shadow-lg hover:shadow-xl  cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-al ">
                            <h1 className='text-3xl font-semibold text-gray-700'>The Food</h1>
                            <p className='py-2 text-gray-500 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className="text-center">
                                <Image src="/images/icon2.png" alt='cafe' width={200} height={200} className='py-6 ' />
                                <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" variant="black">Order Cathering</Button>
                            </div>
                        </div>
                        {/* ************************** */}
                        <div className="shadow-lg hover:shadow-xl  cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-al ">
                            <h1 className='text-3xl font-semibold text-gray-700'>The Gelato</h1>
                            <p className='py-2 text-gray-500 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className="text-center">
                                <Image src="/images/icon3.png" alt='cafe' width={200} height={200} className='py-6 ' />
                                <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" variant="black">Order Cathering</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore
