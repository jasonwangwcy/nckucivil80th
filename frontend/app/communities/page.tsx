'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import banner4 from '../../public/banner4.jpg'

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState<{ title: string; date: string; description: string, link: string, image: string }[]>([]);
  const fetchCommunities = async () => {
    const response = await fetch('/api/communities'); 
    if (response.ok) {
      const data = await response.json();
      setCommunities(data);
    }
  };
  useEffect(() => {
    fetchCommunities();
  }, []);
    return (
      <div>
        <Image src={banner4} alt="banner 4" className='mt-20'></Image>
        <h1 className="text-3xl font-bold text-red-700 my-4">系慶活動</h1>
        <div className="bg-white p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {communities.slice().reverse().map((event, index) => (
            <div key={index} className="border p-4 bg-white">
              <Image src={event.image} alt="Event Image" className="w-full h-48 object-cover mb-2" />
              <Link href={`/communities/${communities.length-index }`} legacyBehavior>
                  <a className="text-blue-500 hover:underline block text-center">{event.title}</a>
                </Link>
              <p className='text-center'>{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }