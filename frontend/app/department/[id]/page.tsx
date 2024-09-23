'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EventDetail({ params }: { params: { id: string } }) {
  const [eventData, setEventData] = useState<{ title: string; date: string; description: string, image: string } | null>(null);
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
      <Image src={eventData.image} alt="Event Image" className="w-auto h-48 object-cover mb-4" />
      <p className="text-gray-600 mb-2">{eventData.date}</p>
      <p>{eventData.description}</p>
    </div>
  );
}