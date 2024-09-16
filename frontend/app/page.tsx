import React from 'react';
import { Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    } from '../components/ui/carousel'; 
import logo from '../components/logo.png';
import image1 from '../components/1.jpg';
import image2 from '../components/2.jpg';
import image3 from '../components/3.jpg';
import image4 from '../components/4.jpg';
import Image from 'next/image';

export default function HomePage() {
  const events = [
    { title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座' },
    { title: '登山健行活動', date: '2024-09-30', description: '台北山行活動' },
    { title: '科技講座', date: '2024-10-10', description: '最新科技趨勢' },
    { title: '音樂會', date: '2024-10-20', description: '校友音樂會' },
  ];

  return (
    <>
      <div className="bg-red-100 p-4 h-80 overflow-hidden">
      <Carousel className="h-full relative">
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselContent className="h-full">
        <CarouselItem className="flex justify-center items-center h-full">
          <Image src={image1} alt="Logo" className="w-1/4 h-1/4 object-contain" />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center h-full">
          <Image src={image2} alt="Logo" className="w-1/4 h-1/4 object-contain" />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center h-full">
          <Image src={image3} alt="Logo" className="w-1/4 h-1/4 object-contain" />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center h-full">
          <Image src={image4} alt="Logo" className="w-1/4 h-1/4 object-contain" />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center h-full">
          <Image src={logo} alt="Logo" className="w-1/4 h-1/4 object-contain" />
        </CarouselItem>
      </CarouselContent>
      </Carousel>
      
      </div>
      <h1 className="text-3xl font-bold text-red-700 my-4">最新活動</h1>
      <div className="bg-white p-4 grid grid-cols-4 gap-4">
        {events.map((event, index) => (
          <div key={index} className="border p-4">
            <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
            <h3 className="font-bold">
              <a href={`#event-${index}`} className="text-blue-500 hover:underline">{event.title}</a>
            </h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold text-red-700 my-4">系列活動</h1>
      <div className="bg-red-100 p-4 grid grid-cols-4 gap-4">
        {events.map((event, index) => (
          <div key={index} className="border p-4 bg-white">
            <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
            <h3 className="font-bold">
              <a href={`#event-${index}`} className="text-blue-500 hover:underline">{event.title}</a>
            </h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}