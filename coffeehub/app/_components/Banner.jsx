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
            <div className="container mx-auto max-w-7xl p-6 lg:px-8 ">
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
                    <SwiperSlide>
                        <div className="container">
                            {/* ***************** */}
                            <div className="grid grid-cols-2">
                                {/* ***************** */}
                                <div className="">
                                    {/* ***************** */}
                                    <div className=""></div>
                                    {/* ***************** */}
                                    <h1>
                                        Alowishus Delicious Coffee
                                        <Image src="/images/cafe.png" width={80} height={80} alt="Café" />
                                    </h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati quo veritatis laudantium a esse nihil assumenda, porro vero dicta.</p>
                                    {/* ***************** */}
                                    <div className="flex gap-4 py-6">
                                        <Button   variant="black" className= "p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal ">Download App</Button>
                                        <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal" variant="outline">Coffee Hub</Button>
                                    </div>
                                    {/* ***************** */}
                                </div>
                                {/* ***************** */}
                                <div className="">apfaofpm</div>
                            </div>
                            {/* ***************** */}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Banner;
