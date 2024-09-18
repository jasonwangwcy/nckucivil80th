'use client';
import { useState, useEffect } from 'react';
//import EventCard from '../../components/EventCard';

export default function EventsPage() {
  const [events, setEvents] = useState<{ title: string; date: string; description: string, link: string }[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events'); // 修改 API 路徑
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
      <div className="bg-white p-4 grid grid-cols-4 gap-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="border p-4">
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
      <h1 className="text-3xl font-bold text-red-700 my-4">土木系活動</h1>
      <h1 className="text-3xl font-bold text-red-700 my-4">系學會活動</h1>
    </div>
  );
}