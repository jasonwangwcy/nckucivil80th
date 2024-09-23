import { NextResponse } from 'next/server';

const events = [
  { id:'1', 
    title: '學生生活相片展', 
    date: '', 
    image:{
      src: "/images/studentlife.png",
      width: 400,
      height: 600,
    }, 
    link:'https://www.ncku.edu.tw/'
  },
  { id:'2',title: '系史展覽', 
    date: '', 
    image:{
      src: "/images/history.jpg",
      width: 400,
      height: 600,
    },  
    link:''},
  { id:'3',title: '系慶同學會', 
    date: '', 
    image:{
      src: "/images/reunion.png",
      width: 400,
      height: 600,
    },  
    link:''},
  { id:'4',title: '系慶餐會', 
    date: '', 
    image:{
      src: "/images/party.jpg",
      width: 400,
      height: 600,
    },  
    link:''},
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const event = events.find((event) => event.id === params.id);
  
    if (event) {
      return NextResponse.json(event);
    } else {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
  }