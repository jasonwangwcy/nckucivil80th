import { NextResponse } from 'next/server';

const images = [
    {
        id:'1', 
        image:{
      src: "/images/card2.png",
      width: 800,
      height: 600,
    }, 
    },
    {
        id:'2', 
        image:{
      src: "/images/card.png",
      width: 800,
      height: 600,
    }, 
    },
    {
        id:'3', 
        image:{
      src: "/images/a2.jpg",
      width: 800,
      height: 600,
    }, 
    },
    {
        id:'4', 
        image:{
      src: "/images/a4.jpg",
      width: 800,
      height: 600,
    }, 
    },
    {
        id:'5', 
        image:{
      src: "/images/a7.jpg",
      width: 800,
      height: 600,
    }, 
    },
    {
        id:'6', 
        image:{
      src: "/images/aa.jpg",
      width: 800,
      height: 600,
    }, 
    }

]

export async function GET() {
    return NextResponse.json(images); 
  }