import { NextResponse } from 'next/server';

const events = [
  { id:'1', title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座', link:'https://imgur.com/a/I1pSv1W'},
  { id:'2', title: '登山健行活動', date: '2024-09-30', description: '台北山行活動', link:'https://imgur.com/a/I1pSv1W'},
  { id:'3', 
    title: '輪遊高雄港', 
    date: '民國113年3月24日',
    image:[
      {
      src: "/images/sailingks.jpg",
      width: 1920,
      height: 1080,
      },
      {
        src: "/images/sailingks2.jpg",
        width: 1920,
        height: 1080,
      },
      {
        src: "/images/sailingks3.jpg",
        width: 1920,
        height: 1080,
      },
      {
        src: "/images/sailingks4.jpg",
        width: 1920,
        height: 1080,
      },
      {
        src: "/images/sailingks5.jpg",
        width: 1920,
        height: 1080,
      },
      
  ], 
    description: '113年的春天已經悄悄從高雄開始，邀請各位學長姐來高雄搭乘遊港船，與系友及家人從海上視角欣賞各式船舶及軍艦，從愛河口看全台首座水平旋轉大港橋及珊瑚造型的海洋流行音樂中心，到亞洲新灣區欣賞最新的上億豪華遊艇及高雄展覽館，全程搭配精彩解說，讓你從海上一覽曾經是世界大三大港高雄港的風采。', 
    link:'https://imgur.com/a/I1pSv1W' },

  { id:'4', 
    title: '登山活動', 
    date: '', 
    image:[
      {
      src: "/images/hiking.jpg",
      width: 400,
      height: 600,
    }],
    description: '台北象山健行<br/>📆活動日期：2024年8月17日週六<br/>活動照片連結：<a href="https://www.facebook.com/share/p/4DPd2EjpX5geCJX8/?mibextid=K35XfP" target="_blank" rel="noopener noreferrer"> https://www.facebook.com/share/p/4DPd2EjpX5geCJX8/?mibextid=K35XfP </a><br/>高雄壽山健行<br/>📆日期：113/8/24(六)<br/>活動照片連結：<a href="https://www.facebook.com/share/p/bFKVK4ACk1yKknjt/?mibextid=K35XfP" target="_blank" rel="noopener noreferrer"> https://www.facebook.com/share/p/bFKVK4ACk1yKknjt/?mibextid=K35XfP </a><br/>台中東海大學健行<br/>🎯活動日期：113/8/31(六)<br/>活動照片連結：<a href="https://www.facebook.com/share/p/7q7kmaP9UorHD1MQ/?mibextid=K35XfP" target="_blank" rel="noopener noreferrer"> https://www.facebook.com/share/p/7q7kmaP9UorHD1MQ/?mibextid=K35XfP </a><br/>',
    location:'', 
    link:'https://imgur.com/a/I1pSv1W' },

  { id:'5', title: '高爾夫球聯誼賽', 
    date: '民國113年6月20日', 
    description: '👍成大土木系友高爾夫中部球敘圓滿成功<br/> <a href="https://www.facebook.com/share/p/JFvaqdGoJ5JjrJu4/?mibextid=K35XfP" target="_blank" rel="noopener noreferrer"> https://www.facebook.com/share/p/JFvaqdGoJ5JjrJu4/?mibextid=K35XfP </a>', 
    image:[
      {
      src: "/images/golf.jpg",
      width: 400,
      height: 600,
    }],
    link:'https://imgur.com/a/I1pSv1W'
  },
  { id:'6', 
    title: 'Oktoberfest 德國啤酒節', 
    date: '🥨時間：9月28日 (星期六) 12:00～16:00 (11:30開始報到)', 
    description: '🍺成大土木80週年系慶活動🍺 <br />9/28 Oktoberfest 德國啤酒節來囉!<br />🍻本活動由 「中華民國成大土木系友會」 及 「中華民國德國學術交流協會」 合辦。<br />🥨報名日期：50名，即日起至民國113年9月22日 (日) 23:59止，或額滿為止。<br />🥨活動費用：原價 900 元/人。<br />(1)系友會會員         600 元/人。<br />(2)教師職員            600 元/人。<br />(3)會員眷屬、系友 800 元/人。 <br />🍻附贈啤酒杯一只。<br />🍻報到領入場券，憑入場券可參加贊助摸彩。<br />🍺贊助單位：BMW台中汎德<br />🍺喝酒不開車，開車不喝酒。<br />🍺報名連結：<a href="https://forms.gle/9wseoQwWkf97RNsR9" target="_blank" rel="noopener noreferrer"> https://forms.gle/9wseoQwWkf97RNsR9 </a>', 
    image:[
    {
      src: "/images/beer1.jpg",
      width: 400,
      height: 600,
    },
    {
      src: "/images/beer2.jpg",
      width: 400,
      height: 600,
    }, 
    {
      src: "/images/beer3.jpg",
      width: 400,
      height: 600,
    }, 
    {
      src: "/images/beer4.jpg",
      width: 400,
      height: 600,
    },  
  ],
    location: '🥨地點：路德威手工啤酒餐廳（403台中市西區公益路36號）',
    link:'https://imgur.com/a/I1pSv1W'
  },
  
  {  id:'7', 
    title: '財經講座', 
    date: '113年10月19日', 
    description: '成土飛揚、八方十洲<br />80周年系慶系列活動--中區講座<br />重金邀請張金鶚得意門生、實價登錄始作俑者--成大統計系范垂爐學長以風趣的內容，為我們解說未來房產趨勢<br />講座題目:看不到盡頭的房價<br />主講人:范垂爐<br />時間:113年10月19日(六)  14:00~16:00(13:30報到)<br />地點:台中市北屯區文心路四段936號3樓_文心會議室_303室<br />費用:免費名額:限量30名<br />報名截止日期:113年9月30日<br />主辦:成大土木系友會聯絡人:李梓賢 <br />報名網址:<a href="https://forms.gle/3bEisbxUxmWicXTh9" target="_blank" rel="noopener noreferrer"> https://forms.gle/3bEisbxUxmWicXTh9 </a>',
    image:[
    {
      src: "/images/lecture.jpg",
      width: 400,
      height: 600,
    }],   
    link:'https://imgur.com/a/I1pSv1W'  },
  { id:'8', title: '帆遊安平港', 
    date: '民國113年11月10日', 
    description: '報名連結：<a href="https://i6gh8y.1shop.tw/ud0f61" target="_blank" rel="noopener noreferrer"> https://i6gh8y.1shop.tw/ud0f61 </a>', 
    image: [
      {
      src: "/images/sailboatdescription.png",
      width: 400,
      height: 600,
    }],
    link:'https://imgur.com/a/I1pSv1W'
  }
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const event = events.find((event) => event.id === params.id);
  
    if (event) {
      return NextResponse.json(event);
    } else {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
  }