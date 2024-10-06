'use client'
import React, { useState, useEffect } from 'react';
import { Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    } from '../components/ui/carousel'; 
import Autoplay from 'embla-carousel-autoplay'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    } from "@/components/ui/table"
    
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [events, setEvents] = useState<{ title: string; date: string; description: string, link: string, image: string }[]>([]);
  const [communities, setCommunities] = useState<{ title: string; date: string; description: string, link: string, image: string }[]>([]);
  const [images, setImages] = useState<{ id: string; image: { src: string; width: number; height: number } }[]>([]);
  const [latestevents, setLatestevents] = useState<{ title: string; date: string; description: string, link: string, image: string }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/carousel'); 
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

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

  useEffect(() => {
    const fetchLatestevents = async () => {
      try {
        const response = await fetch('/api/latestevents'); 
        if (response.ok) {
          const data = await response.json();
          setLatestevents(data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchLatestevents();
  }, []);

  return (
    <>
    <div className="mt-20 flex flex-col-reverse md:flex-row mt-20 md:h-full lg:h-90 overflow-hidden">
      <div className='w-full md:w-1/2 '>
      <div className='w-full '>
      <Table className="w-full mx-auto text-center">
        <TableHeader>
          <TableRow>
             <TableHead className="font-bold text-center ">日期</TableHead>
             <TableHead className="font-bold text-center ">系慶活動</TableHead>
          </TableRow>
        </TableHeader>
    <TableBody>
    <TableRow>
      <TableCell className="font-medium">2024年11/9（六） 11:00～11:30</TableCell>
      <TableCell className="font-medium">開幕儀式</TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">2024年11/9（六） 09:00～16:00</TableCell>
      <TableCell className="font-medium">
          <Link href="/communities/1" legacyBehavior>
            <a className="hover:underline">系史及系友生活相片展</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">2024年11/9（六） 10:00～16:00</TableCell>
      <TableCell className="font-medium">
          <Link href="/communities/5" legacyBehavior>
            <a className="hover:underline">產業交流展</a>
          </Link>
        </TableCell>
       </TableRow>
      <TableRow>
      <TableCell className="font-medium">2024年11/9（六） 11:00～14:00</TableCell>
      <TableCell className="font-medium">
          <Link href="/communities/6" legacyBehavior>
            <a className="hover:underline">園遊會</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">2024年11/9（六） 11:00～16:00</TableCell>
      <TableCell className="font-medium">
          <Link href="/communities/7" legacyBehavior>
            <a className="hover:underline">臨時郵局</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">2024年11/9（六） 14:00～16:00</TableCell>
      <TableCell className="font-medium">
          <Link href="/communities/3" legacyBehavior>
            <a className="hover:underline">系友返校同學會</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">2024年11/9（六） 13:00～16:00</TableCell>
      <TableCell className="font-medium">
          <Link href="/communities/8" legacyBehavior>
            <a className="hover:underline">系友OB球賽</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">2024年11/9（六） 17:00～21:00</TableCell>
      <TableCell className="font-medium">
          <Link href="/communities/4" legacyBehavior>
            <a className="hover:underline">系慶千人餐會</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">2024年11/9（六） 13:30～15:30</TableCell>
      <TableCell className="font-medium">
          <Link href="/communities/2" legacyBehavior>
            <a className="hover:underline">系友講堂</a>
          </Link>
        </TableCell>
      </TableRow>
    </TableBody>
    </Table>  
      </div>
      </div>
      <div className="bg-red-100 p-4 h-50 w-full md:w-1/2 lg:h-90 overflow-hidden">
      <Carousel 
       plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}className="h-full w-full relative ">
        <CarouselContent className="h-full">
          {images.map((item) => (
            <CarouselItem key={item.id} className="flex justify-center items-center min-h-full">
              <Image
                src={item.image.src}
                alt={`Image ${item.id}`}
                width={item.image.width}
                height={item.image.height}
                className="w-full sm:w-2/3 md:w-1/2 lg:w-5/6 h-auto object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">◀</CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">▶</CarouselNext>
      </Carousel>
      </div>
      </div>

      <h1 className="text-3xl font-bold text-red-700 my-4 ">最新活動</h1> 
      <div className=" p-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {latestevents.map((event, index) => (
              <div key={index} className="bg-white">
            <Link href={event.link} legacyBehavior>
          <div className="aspect-w-16 aspect-h-9">
            <Image 
            src={event.image} 
            alt="Event Image" 
            className="w-full object-cover mb-2 h-24 sm:h-24 md:h-48" 
               />
             </div>
              </Link>
            <h3 className="font-bold text-center">
              <Link href={event.link} legacyBehavior>
           <a className="text-blue-500 hover:underline text-sm sm:text-base">{event.title}</a>
           </Link>
               </h3>
              <p className="hidden sm:block text-center">{event.date}</p>
                </div>
                ))}
      </div>
      
     
      <h1 className="text-3xl font-bold text-red-700 my-4 ">系慶活動</h1> 
      <div className="bg-red-100 p-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {communities.map((event, index) => (
              <div key={index} className="bg-white">
            <Link href={`/communities/${index + 1}`} legacyBehavior>
          <div className="aspect-w-16 aspect-h-9">
            <Image 
            src={event.image} 
            alt="Event Image" 
            className="w-full object-cover mb-2 h-24 sm:h-24 md:h-48" 
               />
             </div>
              </Link>
            <h3 className="font-bold text-center">
              <Link href={`/communities/${index + 1}`} legacyBehavior>
           <a className="text-blue-500 hover:underline text-sm sm:text-base">{event.title}</a>
           </Link>
               </h3>
              <p className="hidden sm:block text-center">{event.date}</p>
                </div>
                ))}
                </div>

                <h1 className="text-3xl font-bold text-red-700 my-4">系列活動</h1>
          <div className="bg-white p-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {events.length > 0 ? (
               events.slice(-4).reverse().map((event, index) => (
              <div key={index} className="bg-white">
               <Link href={`/events/${events.length - index}`} legacyBehavior>
                <div className="aspect-w-16 aspect-h-9">
                  <Image 
                  src={event.image} 
                  alt="Event Image" 
                  className="w-full object-cover mb-2 h-24 sm:h-24 md:h-48" 
                   />
                 </div>
                  </Link>
               <h3 className="font-bold text-center">
               <Link href={`/events/${events.length - index}`} legacyBehavior>
               <a className="text-blue-500 hover:underline text-sm sm:text-base">{event.title}</a>
                </Link>
                </h3>
             <p className="hidden sm:block text-center">{event.date}</p>
             </div>
             ))
            ) : (
           <p>沒有活動可顯示</p>
                  )}
        </div>    
    </>
   );
}