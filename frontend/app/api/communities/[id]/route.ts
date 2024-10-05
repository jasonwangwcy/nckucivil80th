import { NextResponse } from 'next/server';

const events = [
  { id:'1', 
    title: '系史及系友生活相片展', 
    date: '⚛️活動時間：民國113年11月9日  (星期六)  09:00～16:00', 
    image:[
      {
      src: "/images/studentlife.png",
      width: 400,
      height: 600,
    },
    {
      src: "/images/studentlife2.jpg",
      width: 400,
      height: 600,
    },
    {
      src: "/images/studentlife3.jpg",
      width: 400,
      height: 600,
    },
    {
      src: "/images/studentlife4.jpg",
      width: 400,
      height: 600,
    },
  ], 
    description: '把我們的回憶與系史同展、同藏',
    location:'⚛️活動地點：國立成功大學土木系館',
    link:'https://reurl.cc/g6Dop7'
  },

  { id:'2',title: '系友講堂', 
    date: '⚛️活動時間：民國113年11月9日  (星期六)  13:30～15:30', 
    image:[
      {
      src: "/images/lecture2.jpg",
      width: 400,
      height: 600,
    }],
    description: '教室A:資深學長回顧與分享<br/>教室B: 非典型土木人生<br/>教室C: 小小工程師手作體驗',
    location:'⚛️活動地點：國立成功大學土木系館。',
    link:''},

  { id:'3',title: '系慶同學會', 
    date: '⚛️活動時間：民國113年11月9日  (星期六)  14:00～16:00', 
    image:[
      {
      src: "/images/reunion.png",
      width: 400,
      height: 600,
    }],  
    description: '畢業整數級系友返系同學會教室<br/>A: 63級教室<br/>B: 83級教室<br/>C: 93級',
    location:'⚛️活動地點：國立成功大學土木系館。',
    link:''},

    { id:'4',title: '系慶餐會', 
      date: '🍻時間：113/11/9(六) 晚上18:00 開席', 
      image:[
        {
        src: "/images/party.jpg",
        width: 400,
        height: 600,
    }],  
      description: '史上第一次全球系友系慶大會師，席開130桌<br/>⚛️點擊報名',
      location:'：🍻地點：台南南紡購物中心雅悅會館<br/>📍台南市東區中華東路一段366號5樓',
      link:'https://reurl.cc/WNz0Y5'},

    { id:'5',title: '產業交流展', 
      date: '⚛️活動時間：民國113年11月9日  (星期六)  10:00～16:00', 
      image:[
        {
        src: "/images/ad1.jpg",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad2.jpg",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad3.jpg",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad4.jpg",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad5.jpg",
        width: 1920,
        height: 1800,
      },
    ],  
      description: '系友產業交流展覽，建立產學合作關係及專業互助的友誼圈<br/>產業交流報名廠商:<br/>樂土Lotos<br/>萬鼎工程服務股份有限公司<br/>誌興鋼構工程股份有限公司<br/>豐譽企業團隊<br/>堃成營造股份有限公司<br/>齊步綠能科技有限公司<br/>羅家偉WEiCAFE<br/>台義隔震設備有限公司<br/>環塑科技股份有限公司<br/>聯懿禾鑫弘豐外牆專家<br/>繽紛科技股份有限公司<br/>義力營造股份有限公司<br/>九春工業股份有限公司<br/>DNV立恩威國際驗證股份有限公司<br/>中興工程顧問股份有限公司<br/>統榮鋼鐵、東京鐵鋼<br/>宏義工程股份有限公司<br/>春原營造股份有限公司<br/>美商傑明工程顧問(股)台灣分公司<br/>....持續增加中<br/>',
      location:'⚛️活動地點：國立成功大學土木系館及圖書館前廣場，共計39攤',
      link:'https://forms.gle/uaXvFvnUQaRcT5Dq5'},

      { id:'6',title: '園遊會', 
        date: '⚛️活動時間：民國113年11月9日  (星期六)  11:00～14:00', 
        image:[
          {
          src: "/images/party2.png",
          width: 400,
          height: 600,
        }],  
        description: '胖卡餐車讓您回味記憶中的味道',
        location:'⚛️活動地點：國立成功大學土木系館前，共計6攤。<br/>⚛️費用：免費',
        link:''},

      { id:'7',title: '臨時郵局', 
        date: '⚛️活動時間：民國113年11月9日  (星期六)  11:00～16:00', 
        image:[
          {
          src: "/images/postoffice.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/postoffice2.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/postoffice3.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/postoffice4.jpg",
          width: 400,
          height: 600,
        },
      ],
        description: '⚛️ 80週年紀念郵戳、明信片、郵局商品販售<br/>⚛️寄給未來-未來信件活動：',
        location:'⚛️活動地點：園遊會攤位',  
        link:''},

      { id:'8',title: '系友OB球賽', 
        date: '🍻時間：113/11/9(六)席', 
        image:[
          {
            src: "/images/obschedule.png",
            width: 1200,
            height: 2400,
          }],  
        description: '一起回憶在球場奔馳的青春',
        location:'⚛️🍻地點：各球場',  
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