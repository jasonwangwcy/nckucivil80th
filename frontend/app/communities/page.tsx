'use client';
import logo from '../../components/logo.png';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState<{ title: string; date: string; description: string, link: string }[]>([]);
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
      <div className="bg-white p-4 grid grid-cols-4 gap-4">
        {communities.map((event, index) => (
          <div key={index} className="border p-4 bg-white">
            <Image src={logo} alt="Event Image" className="w-full h-48 object-cover mb-2" />
            <h3 className="font-bold">
              <a href={event.link} className="text-blue-500 hover:underline">{event.title}</a>
            </h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    );
  }