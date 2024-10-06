import { NextResponse } from 'next/server';

const events = [
  { id:'1', 
    title: '台中東海大學健行', 
    date: '民國113年8月31日', 
    description: '跨文化講座', 
    image:{
      src: "/images/taichunghiking1.jpg",
      width: 400,
      height: 600,
    },
    link:'https://imgur.com/a/I1pSv1W'
  },

  { id:'2', 
    title: '高雄壽山健行', 
    date: '民國113年8月24日', 
    description: '台北山行活動', 
    image:{
      src: "/images/kaosiunghiking1.jpg",
      width: 400,
      height: 600,
    },
    link:'https://imgur.com/a/I1pSv1W'
  },

  { id:'3', 
    title: '輪遊高雄港', 
    date: '2024-3-24', 
    description: '最新科技趨勢',
    image:{
      src: "/images/sailingks.jpg",
      width: 400,
      height: 600,
    }, 
    link:'https://imgur.com/a/I1pSv1W' 
  },

  { id:'4', 
    title: '台北象山健行', 
    date: '民國113年8月17日', 
    description: '', 
    image:{
      src: "/images/hiking.jpg",
      width: 400,
      height: 600,
    },
    link:'https://imgur.com/a/I1pSv1W' },

  { id:'5', title: '高爾夫球聯誼賽', 
    date: '民國113年6月20日', 
    description: '', 
    image:{
      src: "/images/golf.jpg",
      width: 400,
      height: 600,
    },
    link:'https://imgur.com/a/I1pSv1W'
  },
  { id:'6', 
    title: 'Oktoberfest 德國啤酒節', 
    date: '民國113年9月28日', 
    description: '台北山行活動', 
    image:{
      src: "/images/beer1.jpg",
      width: 400,
      height: 600,
    }, 
    link:'https://imgur.com/a/I1pSv1W'
  },
  { id:'7', 
    title: '財經講座', 
    date: '113年10月19日', 
    description: '(confetti cup)成土飛揚、八方十洲(confetti cup)80周年系慶系列活動--中區講座重金邀請張金鶚得意門生、實價登錄始作俑者--成大統計系范垂爐學長以風趣的內容，為我們解說未來房產趨勢(open book)講座題目:看不到盡頭的房價(groom)主講人:范垂爐(Feb 14)時間:113年10月19日(六)  14:00~16:00(13:30報到)(cabin)地點:台中市北屯區文心路四段936號3樓_文心會議室_303室費用:免費名額:限量30名報名截止日期:113年9月30日主辦:成大土木系友會聯絡人:李梓賢 報名網址:https://forms.gle/3bEisbxUxmWicXTh9',
    image:{
      src: "/images/lecture.jpg",
      width: 400,
      height: 600,
    },  
    link:'https://imgur.com/a/I1pSv1W' 
  },
  { id:'8', title: '帆遊安平港', 
    date: '民國113年11月10日', 
    description: '', 
    image:{
      src: "/images/sailboat.png",
      width: 400,
      height: 600,
    },
    link:'https://imgur.com/a/I1pSv1W',
  }
];

export async function GET() {
  return NextResponse.json(events); 
}