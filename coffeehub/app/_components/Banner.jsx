"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";

// módulos extras
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Banner = () => {
    return (
        <>
            <div className="bg-gray-100 mx-auto p-6 lg:px-8 ">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="cursor-pointer">
                        <div className="container md:pt-20 md:pb-10">
                            {/* ***************** */}
                            <div className="grid grid-cols-2 w-full max-w-5xl mx-auto">
                                {/* ***************** */}
                                <div className="relative">
                                    {/* ***************** */}
                                    <h1 className="text-8xl font-bold py-4">
                                        Alowishus Delicious Coffee
                                    </h1>
                                    <div className="absolute top-56 mt-1 right-30">
                                        <Image src="/images/cafe.png" width={80} height={80} alt="Café" />
                                    </div>
                                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati quo veritatis laudantium a esse nihil assumenda, porro vero dicta.</p>
                                    {/* ***************** */}
                                    <div className="flex gap-4 py-6">
                                        <Button variant="black" className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Download App</Button>
                                        <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" variant="outline">Coffee Hub</Button>
                                    </div>
                                    {/* ***************** */}
                                </div>
                                {/* ***************** */}
                                <div className="relative">
                                    <Image src="/images/hero1.png" width={600} height={600} alt="Café" />
                                    <div className="absolute top-5 right-5">
                                        <Image src="/images/cafe.png" width={120} height={120} alt="Café" />
                                    </div>
                                </div>
                            </div>
                            {/* ***************** */}
                        </div>
                    </SwiperSlide >
                    {/*******************/}
                    <SwiperSlide className="cursor-pointer">
                        <div className="container md:pt-20 md:pb-10">
                            {/* ***************** */}
                            <div className="grid grid-cols-2 w-full max-w-5xl mx-auto">
                                {/* ***************** */}
                                <div className="relative">
                                    {/* ***************** */}
                                    <h1 className="text-8xl font-bold py-4">
                                        Alowishus Delicious Coffee
                                    </h1>
                                    <div className="absolute top-56 mt-1 right-30">
                                        <Image src="/images/cafe.png" width={80} height={80} alt="Café" />
                                    </div>
                                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati quo veritatis laudantium a esse nihil assumenda, porro vero dicta.</p>
                                    {/* ***************** */}
                                    <div className="flex gap-4 py-6">
                                        <Button variant="black" className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Download App</Button>
                                        <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" variant="outline">Coffee Hub</Button>
                                    </div>
                                    {/* ***************** */}
                                </div>
                                {/* ***************** */}
                                <div className="relative">
                                    <Image src="/images/coffee-mid.png" width={600} height={600} alt="Café" />
                                </div>
                            </div>
                            {/* ***************** */}
                        </div>
                    </SwiperSlide>
                    {/*******************/}
                    <SwiperSlide className="cursor-pointer">
                        <div className="container md:pt-20 md:pb-10">
                            {/* ***************** */}
                            <div className="grid grid-cols-2 w-full max-w-5xl mx-auto">
                                {/* ***************** */}
                                <div className="relative">
                                    {/* ***************** */}
                                    <h1 className="text-8xl font-bold py-4">
                                        Alowishus Delicious Coffee
                                    </h1>
                                    <div className="absolute top-56 mt-1 right-30">
                                        <Image src="/images/cafe.png" width={80} height={80} alt="Café" />
                                    </div>
                                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati quo veritatis laudantium a esse nihil assumenda, porro vero dicta.</p>
                                    {/* ***************** */}
                                    <div className="flex gap-4 py-6">
                                        <Button variant="black" className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Download App</Button>
                                        <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide" variant="outline">Coffee Hub</Button>
                                    </div>
                                    {/* ***************** */}
                                </div>
                                {/* ***************** */}
                                <div className="relative">
                                    <Image src="/images/alowishus-coffee.png" width={1000} height={1000} alt="Café" />
                               <div className="absolute top-5 right-5">
                                        <Image src="/images/cafe.png" width={120} height={120} alt="Café" />
                                    </div>
                                </div>
                            </div>
                            {/* ***************** */}
                        </div>
                    </SwiperSlide>
                    {/*******************/}
                </Swiper>
            </div>
        </>
    );
};

export default Banner;
