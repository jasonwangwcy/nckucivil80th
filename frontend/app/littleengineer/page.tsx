'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EventDetail() {
  const [eventsData, setEventsData] = useState<
    { title: string; date: string; description: string; image?: { src: string; width: number; height: number }[]; location: string; link:string }[]
  >([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const ids = ['2', '9']; 
      const fetchPromises = ids.map((id) => fetch(`/api/communities/${id}`).then(response => response.json()));
      
      const data = await Promise.all(fetchPromises);
      setEventsData(data);
    };

    fetchEvents();
  }, []);

  if (eventsData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 mt-20">
      {eventsData.map((eventData, index) => (
        <div key={index} className="mb-10">
          <h1 className="text-3xl font-bold mb-4">{eventData.title}</h1>
          {eventData.image && eventData.image.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {eventData.image.map((img, imgIndex) => (
                <Image 
                  key={imgIndex} 
                  src={img.src} 
                  alt={`Event Image ${imgIndex + 1}`} 
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
      ))}
    </div>
  );
}