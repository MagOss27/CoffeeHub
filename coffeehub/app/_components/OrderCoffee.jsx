import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function OrderCoffee() {
    return (
        <>
            <div className="bg-gray-50 md:py-16"></div>
            <div className="container">
                <div className="grid grid-cols-2 gap-20 items-center mx-auto  max-w-7xl ">
                    <div className="">
                        <Image src="/images/coffee-mid.png" alt='cafe' width={600} height={600} />
                    </div>
                    <div className='pe-40'>
                        <h1 className='text-5xl font-bold'>Order Your Favourite Coffee</h1>
                        <p className='py-8 text-gray-500 text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, itaque consectetur! Labore nemo nulla nihil ad obcaecati aliquam aliquid culpa accusamus odio. Incidunt, consequuntur culpa.
                        </p>
                        <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" variant="black">
                            Order Now
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OrderCoffee
