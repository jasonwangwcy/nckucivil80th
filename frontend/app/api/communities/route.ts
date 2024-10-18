import { NextResponse } from 'next/server';

const events = [
  { id:'1', 
    title: '系史及系友生活相片展', 
    date: '民國113年11月9日  (星期六)  09:00～16:00', 
    image:{
      src: "/images/studentlife.png",
      width: 400,
      height: 600,
    }, 
    link:'https://www.ncku.edu.tw/'
  },
  { id:'2',title: '系友講堂', 
    date: '民國113年11月9日  (星期六)  13:30～15:30', 
    image:{
      src: "/images/lecture2.jpg",
      width: 400,
      height: 600,
    },
    link:''},
  { id:'3',title: '系慶同學會', 
    date: '民國113年11月9日  (星期六)  14:00～16:00', 
    image:{
      src: "/images/reunion.png",
      width: 400,
      height: 600,
    },  
    link:''},
  { id:'4',title: '系慶餐會', 
    date: '民國113年11月9日  (星期六)  18:00', 
    image:{
      src: "/images/party.jpg",
      width: 400,
      height: 600,
    },  
    link:''},
 { id:'5',title: '產業交流展', 
  date: '民國113年11月9日  (星期六)  09:00～16:00', 
   image:{
     src: "/images/openhouse.jpg",
     width: 400,
     height: 600,
   },  
   link:''},
  { id:'6',title: '園遊會', 
     date: '民國113年11月9日  (星期六)  11:00～14:00', 
     image:{
       src: "/images/party2.png",
       width: 400,
       height: 600,
     },  
     link:''},
   { id:'7',title: '臨時郵局', 
     date: '民國113年11月9日  (星期六)  11:00～16:00', 
     image:{
       src: "/images/postoffice4.jpg",
       width: 400,
       height: 600,
     },  
     link:''},
  { id:'8',title: '系友OB球賽', 
    date: '民國113年11月9日 (星期六) 13:00～16:00 ', 
       image:{
         src: "/images/ob.png",
         width: 400,
         height: 600,
       },  
       link:''},
   { id:'9',title: '小工程師手作教室', 
     date: '民國113年11月9日 (星期六) 13:30~15:30', 
      image:{
        src: "/images/smallengineer.jpg",
          width: 400,
          height: 600,
        },  
       link:''},
     
    { id:'10', 
        title: '開幕儀式', 
         date: '民國113年11月9日  (星期六)  11:00-11:30', 
         image:{
          src: "/images/openning.png",
            width: 400,
            height: 600,
          },   
          link:''
       },
      { id:'11', 
        title: '八十系慶魔幻拍貼機', 
        date: '民國113年11月9日  (星期六)  13:00-16:00', 
        image:{
          src: "/images/photobooth6.jpg",
            width: 400,
            height: 600,
          },  
        link:''
      },

];

export async function GET() {
  return NextResponse.json(events); 
}