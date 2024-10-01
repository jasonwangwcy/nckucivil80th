'use client'
import React, { useState, useEffect } from 'react';
import { Carousel,
    CarouselContent,
    CarouselItem,
    } from '../components/ui/carousel'; 

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


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/carousel'); // 調用 API
        if (response.ok) {
          const data = await response.json();
          setImages(data); // 設置圖片數據
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

  return (
    <>
    <div className="mt-20 flex flex-col-reverse md:flex-row mt-20 md:h-full lg:h-full overflow-hidden">
      <div className='display: w-full md:w-full '>
      <div className='w-full hidden md:block'>
      <Table className="w-full mx-auto text-center">
        <TableHeader>
          <TableRow>
             <TableHead className="font-bold text-center">系慶活動</TableHead>
          </TableRow>
        </TableHeader>
    <TableBody>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/1" legacyBehavior>
            <a className="hover:underline">系史及系友生活相片展</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/5" legacyBehavior>
            <a className="hover:underline">產業交流展</a>
          </Link>
        </TableCell>
       </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/6" legacyBehavior>
            <a className="hover:underline">園遊會</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/7" legacyBehavior>
            <a className="hover:underline">臨時郵局</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/2" legacyBehavior>
            <a className="hover:underline">系史展覽</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/3" legacyBehavior>
            <a className="hover:underline">系友返校同學會</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/8" legacyBehavior>
            <a className="hover:underline">系友OB球賽</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/4" legacyBehavior>
            <a className="hover:underline">系慶千人餐會</a>
          </Link>
        </TableCell>
      </TableRow>
    </TableBody>
    </Table>  
      </div>
      <details className="w-full block md:hidden">
    <summary className="font-bold bg-gray-200 p-4 rounded cursor-pointer">
      點擊展開系慶活動
    </summary>
      <Table className="w-full mx-auto text-center">
    <TableBody>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/1" legacyBehavior>
            <a className="hover:underline">系史及系友生活相片展</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/5" legacyBehavior>
            <a className="hover:underline">產業交流展</a>
          </Link>
        </TableCell>
       </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/6" legacyBehavior>
            <a className="hover:underline">園遊會</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/7" legacyBehavior>
            <a className="hover:underline">臨時郵局</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/2" legacyBehavior>
            <a className="hover:underline">系史展覽</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/3" legacyBehavior>
            <a className="hover:underline">系友返校同學會</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/8" legacyBehavior>
            <a className="hover:underline">系友OB球賽</a>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
      <TableCell className="font-medium">
          <Link href="/communities/4" legacyBehavior>
            <a className="hover:underline">系慶千人餐會</a>
          </Link>
        </TableCell>
      </TableRow>
    </TableBody>
    </Table>  
    </details>
      </div>
      <div className="bg-red-100 p-4 h-50 md:h-full lg:h-full overflow-hidden">
      <Carousel className="h-full w-full relative">
        <CarouselContent className="h-full">
          {images.map((item) => (
            <CarouselItem key={item.id} className="flex justify-center items-center min-h-full">
              <Image
                src={item.image.src}
                alt={`Image ${item.id}`}
                width={item.image.width}
                height={item.image.height}
                className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 h-auto object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </div>
      
      </div>
      <h1 className="text-3xl font-bold text-red-700 my-4">最新活動</h1>
      <div className="bg-white p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.length > 0 ? (
          events.slice(-4).reverse().map((event, index) => (
            <div key={index} className="border p-4">
              <Image src={event.image} alt="Event Image" className="w-full h-48 object-cover mb-2" />
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
            <Image src={event.image} alt="Event Image" className="w-full h-48 object-cover mb-2" />
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