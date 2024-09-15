import React from 'react';
import { Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    } from '../components/ui/carousel'; // 假設你有一個照片輪播的組件
import logo from '../components/logo.png';
import image1 from '../components/1.jpg';
import image2 from '../components/2.jpg';
import Image from 'next/image';

export default function HomePage() {
  const events = [
    { title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座' },
    { title: '登山健行活動', date: '2024-09-30', description: '台北山行活動' },
    { title: '科技講座', date: '2024-10-10', description: '最新科技趨勢' },
    { title: '音樂會', date: '2024-10-20', description: '校友音樂會' },
    // 添加更多活動
  ];

  return (
    <>
      <div className="bg-red-500 p-4 h-100">
      <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem className="flex justify-center items-center">
          <Image src={image1} alt="Logo" className="w-3/4 h-3/4 object-contain" />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <Image src={image2} alt="Logo" className="w-3/4 h-3/4 object-contain" />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <Image src={logo} alt="Logo" className="w-3/4 h-3/4 object-contain" />
        </CarouselItem>
      </CarouselContent>
    <CarouselNext />
      </Carousel>
      
      </div>
      
      <div className="bg-white p-4 grid grid-cols-4 gap-4">
        {events.map((event, index) => (
          <div key={index} className="border p-4">
            <h3 className="font-bold">{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-red-500 p-4 grid grid-cols-4 gap-4">
        {events.map((event, index) => (
          <div key={index} className="border p-4 bg-white">
            <h3 className="font-bold">{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}