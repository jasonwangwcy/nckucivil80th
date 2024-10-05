'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EventDetail({ params }: { params: { id: string } }) {
  const [eventData, setEventData] = useState<{ title: string; date: string; description: string; image?: { src: string; width: number; height: number }[]; location: string } | null>(null);
  const { id } = params;

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`/api/events/${id}`);
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
        <div className="flex flex-wrap gap-4">
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

      <p className="mb-2">{eventData.date}</p>
      <p className="mb-2">{eventData.location}</p>
      <div className="description" dangerouslySetInnerHTML={{ __html: eventData.description }}></div>
    </div>
  );
}