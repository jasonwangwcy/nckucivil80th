import { NextResponse } from 'next/server';

const latestevents = [
  { id:'1', 
    title: '周邊商品預購', 
    date: '', 
    description: '跨文化講座',
    image:{
      src: "/images/redshirt.png",
      width: 400,
      height: 600,
    },  
    link:'https://reurl.cc/4dqK6R'
  },
  { id:'2', 
    title: '回憶插畫明信片', 
    date: '', 
    description: '跨文化講座',
    image:{
      src: "/images/a7.jpg",
      width: 400,
      height: 600,
    },  
    link:'https://forms.gle/xNZ7M9v4GHNL8hKz6'},

  { id:'3', 
    title: '卓越基金募款', 
    date: '', 
    description: '最新科技趨勢',
    image:{
      src: "/images/donation.jpg",
      width: 400,
      height: 600,
    }, 
    link:'https://reurl.cc/xvp46z' 
  },

  { id:'4', 
    title: '系慶餐會報名', 
    date: '', 
    description: '', 
    image:{
      src: "/images/party.jpg",
      width: 400,
      height: 600,
    },
    link:'https://reurl.cc/WNz0Y5' },

];

export async function GET() {
  return NextResponse.json(latestevents); 
}