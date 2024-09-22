'use client'
import React, { useState, useEffect } from 'react';
import { Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    } from '../components/ui/carousel'; 

import logo from '.././public/logo.png';
import c1 from '.././public/a2.jpg';
import c2 from '.././public/a4.jpg';
import c3 from '.././public/a7.jpg';
import c4 from '.././public/a8.jpg';
import c5 from '.././public/aa.jpg';
import c6 from '.././public/dance.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [events, setEvents] = useState<{ title: string; date: string; description: string, link: string }[]>([]);
  const [communities, setCommunities] = useState<{ title: string; date: string; description: string, link: string }[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events'); 
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    };

    const fetchCommunities = async () => {
      const response = await fetch('/api/communities'); 
      if (response.ok) {
        const data = await response.json();
        setCommunities(data);
      }
    };

    fetchEvents();
    fetchCommunities();
  }, []);

  return (
    <>
      <div className="bg-red-100 p-4 h-50 md:h-96 lg:h-auto overflow-hidden">
        <Carousel className="h-full relative">
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselContent className="h-full">
            <CarouselItem className="flex justify-center items-center min-h-full">
              <Image src={c1} alt="Logo" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-contain transform scale-110" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center min-h-full">
              <Image src={c2} alt="Logo" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-contain transform scale-110" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center min-h-full">
              <Image src={c3} alt="Logo" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-contain transform scale-110" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center min-h-full">
              <Image src={c4} alt="Logo" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-contain transform scale-110" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center min-h-full">
              <Image src={c5} alt="Logo" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-contain transform scale-110" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center min-h-full">
              <Image src={c6} alt="Logo" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-contain transform scale-110" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <h1 className="text-3xl font-bold text-red-700 my-4">最新活動</h1>
      <div className="bg-white p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.length > 0 ? (
          events.slice(-4).reverse().map((event, index) => (
            <div key={index} className="border p-4">
              <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
              <h3 className="font-bold text-center">
                <Link href={`/events/${events.length - index }`} legacyBehavior>
                  <a className="text-blue-500 hover:underline">{event.title}</a>
                </Link>
              </h3>
              <p className="text-center">{event.date}</p>
            </div>
          ))
        ) : (
          <p>沒有活動可顯示</p>
        )}
      </div>
      <h1 className="text-3xl font-bold text-red-700 my-4 ">系列活動</h1> 
      <div className="bg-red-100 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {communities.slice(-4).reverse().map((event, index) => (
          <div key={index} className="border p-4 bg-white">
            <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
            <h3 className="font-bold text-center">
            <Link href={`/communities/${communities.length - index }`} legacyBehavior>
                <a className="text-blue-500 hover:underline">{event.title}</a>
              </Link>
            </h3>
            <p className="text-center">{event.date}</p>
          </div>
        ))}
      </div>
    </>
  );
}