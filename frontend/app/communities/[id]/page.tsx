'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function EventDetail({ params }: { params: { id: string } }) {
  const [eventData, setEventData] = useState<{ title: string; date: string; description: string;  image?: { src: string; width: number; height: number }[]; location: string; link:string} | null>(null);
  const { id } = params;

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`/api/communities/${id}`); 
      if (response.ok) {
        const data = await response.json();
        setEventData(data);
      }
    };

    fetchEvent();
  }, [id]);

  if (!eventData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">{eventData.title}</h1>
      {eventData.image && eventData.image.length > 0 ? (
        <div className="grid gap-4 sm:flex sm:flex-wrap">
          {eventData.image.map((img, index) => (
            <Image 
              key={index} 
              src={img.src} 
              alt={`Event Image ${index + 1}`} 
              width={img.width} 
              height={img.height} 
              className="w-auto h-48 object-cover mb-4" 
            />
          ))}
        </div>
      ) : (
        <p>No images available.</p>
      )}
      <p>{eventData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: eventData.location }} />
      <div dangerouslySetInnerHTML={{ __html: eventData.description }} />
      <p>
        <a href={eventData.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {eventData.link}
        </a>
      </p>
    </div>
  );
}