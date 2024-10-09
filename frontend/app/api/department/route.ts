import { NextResponse } from 'next/server';

const events = [
  { id:'1', 
    title: '敬請期待！', 
    date: '', 
    description: '跨文化講座', 
    image:{
      src: "/images/commingsoon.png",
      width: 400,
      height: 600,
    },  
    link:'https://www.ncku.edu.tw/'},
]

export async function GET() {
  return NextResponse.json(events); 
}