import { NextResponse } from 'next/server';

const events = [
  { id:'1', 
    title: '系史及系友生活相片展', 
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
    { id:'5',title: '產業交流展', 
      date: '', 
      image:{
        src: "/images/openhouse.jpg",
        width: 400,
        height: 600,
      },  
      link:''},
      { id:'6',title: '園遊會', 
        date: '', 
        image:{
          src: "/images/party.jpg",
          width: 400,
          height: 600,
        },  
        link:''},
      { id:'7',title: '臨時郵局', 
        date: '', 
        image:{
          src: "/images/postoffice.png",
          width: 400,
          height: 600,
        },  
        link:''},
        { id:'8',title: '系友OB球賽', 
          date: '', 
          image:{
            src: "/images/ob.png",
            width: 400,
            height: 600,
          },  
          link:''},

];

export async function GET() {
  return NextResponse.json(events); 
}