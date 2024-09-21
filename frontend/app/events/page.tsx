'use client';
import { useState, useEffect } from 'react';
import logo from '../../public/logo.png';//import EventCard from '../../components/EventCard';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
  const [events, setEvents] = useState<{ title: string; date: string; description: string, link: string }[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events'); 
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-700 my-4">系友會活動</h1>
      <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="border p-4">
               <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
               <Link href={`/events/${index + 1}`} legacyBehavior>
                  <a className="text-blue-500 hover:underline">{event.title}</a>
                </Link>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p>沒有活動可顯示</p>
        )}
      </div>
      <h1 className="text-3xl font-bold text-red-700 my-4">土木系活動</h1>
      <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="border p-4">
               <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
               <Link href={`/events/${index + 1}`} legacyBehavior>
                  <a className="text-blue-500 hover:underline">{event.title}</a>
                </Link>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p>沒有活動可顯示</p>
        )}
      </div>
      <h1 className="text-3xl font-bold text-red-700 my-4">系學會活動</h1>
      <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="border p-4">
               <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
              <h3 className="font-bold">
                <a href={event.link} className="text-blue-500 hover:underline">{event.title}</a>
              </h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p>沒有活動可顯示</p>
        )}
      </div>
    </div>
  );
}