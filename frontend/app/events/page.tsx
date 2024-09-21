'use client';
import { useState, useEffect } from 'react';
import logo from '../../public/logo.png';//import EventCard from '../../components/EventCard';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
  const [events, setEvents] = useState<{ title: string; date: string; description: string, link: string }[]>([]);
  const [departments, setDepartments] = useState<{ title: string; date: string; description: string, link: string }[]>([]);
  const [associations, setAssociations] = useState<{ title: string; date: string; description: string, link: string }[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events'); 
      
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    };

    const fetchDepartments = async () => {
      const response = await fetch('/api/department');
      if (response.ok) {
        const data = await response.json();
        setDepartments(data);
      }
    };

    const fetchAssociations = async () => {
      const response = await fetch('/api/association');
      if (response.ok) {
        const data = await response.json();
        setAssociations(data);
      }
    };

    fetchEvents();
    fetchDepartments();
    fetchAssociations();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-700 my-4">系友會活動</h1>
      <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.length > 0 ? (
          events.slice().reverse().map((event, index) => (
            <div key={index} className="border p-4">
               <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
               <Link href={`/events/${events.length - index}`} legacyBehavior>
                  <a className="text-blue-500 hover:underline block text-center">{event.title}</a>
                </Link>
              <p className='text-center'>{event.date}</p>
            </div>
          ))
        ) : (
          <p>沒有活動可顯示</p>
        )}
      </div>
      <h1 className="text-3xl font-bold text-red-700 my-4">土木系活動</h1>
        <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {departments.length > 0 ? (
          departments.slice().reverse().map((department, index) => (
            <div key={index} className="border p-4">
               <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
               <Link href={`/department/${departments.length - index}`} legacyBehavior>
                  <a className="text-blue-500 hover:underline block text-center">{department.title}</a>
                </Link>
              <p className='text-center'>{department.date}</p>
            </div>
          ))
        ) : (
          <p>沒有活動可顯示</p>
        )}
      </div>
      <h1 className="text-3xl font-bold text-red-700 my-4">系學會活動</h1>
      <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {associations.length > 0 ? (
          associations.slice().reverse().map((association, index) => (
            <div key={index} className="border p-4">
               <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
               <Link href={`/association/${associations.length - index}`} legacyBehavior>
                  <a className="text-blue-500 hover:underline block text-center">{association.title}</a>
                </Link>
              <p className='text-center'>{association.date}</p>
            </div>
          ))
        ) : (
          <p>沒有活動可顯示</p>
        )}
      </div>
    </div>
  );
}