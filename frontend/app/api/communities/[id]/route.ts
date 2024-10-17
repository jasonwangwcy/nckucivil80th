import { NextResponse } from 'next/server';

const events = [
  { id:'1',title: '小工程師手作教室', 
    date: '活動時間：民國113年11月9日  (星期六)  13:30～15:30', 
    image:[
      {
      src: "/images/smallengineer2.jpg",
      width: 400,
      height: 600, 
      },
      {
        src: "/images/smallengineer3.jpg",
        width: 400,
        height: 600, 
        },
      {
          src: "/images/smallengineer4.jpg",
          width: 400,
          height: 600, 
          },
      {
      src: "/images/smallengineer5.jpg",
      width: 400,
      height: 600, 
      },
      {
        src: "/images/smallengineer6.jpg",
        width: 400,
        height: 600, 
        },
  ],  
    description:'從動手做開始<br/>闖關方式，拍照打卡上傳，設關主說明輔導<br/>拉張系統<br/>液壓夾爪<br/>滾珠軌道<br/>風力仿生獸<br/>萬年曆',
    location:'⚛️活動地點：國立成功大學土木系館。',
    link:''},
  { id:'2',title: '系友講堂', 
    date: '⚛️活動時間：民國113年11月9日  (星期六)  13:30～15:30', 
    image:[
      {
      src: "/images/lecture3.png",
      width: 400,
      height: 600,
    },
    {
      src: "/images/lecture4a.png",
      width: 400,
      height: 600,
    },
    {
      src: "/images/openmic1c.png",
      width: 400,
      height: 600,
    },
    {
      src: "/images/openmic2.jpg",
      width: 400,
      height: 600,
    },
    {
      src: "/images/openmic3.jpg",
      width: 400,
      height: 600,
    },
  ],
    description: '教室A: 資深學長回顧與分享<br/>教室B: 非典型土木人生--- Open Mic短講<br/>',
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
        date: '⚛️活動時間：民國113年11月9日  (星期六)  10:30-13:00', 
        image:[
          {
          src: "/images/fair1.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/fair2.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/fair3.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/fair4.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/fair5.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/fair6.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/fair7.jpg",
          width: 400,
          height: 600,
        },
        {
          src: "/images/fair8.jpg",
          width: 400,
          height: 600,
        },
      ],  
        description: '🎉預約系慶免費台南小吃園遊券<br/>🥗11月9日系館前<br/>🚐七攤胖卡餐車讓您勾起記憶中的味蕾<br/>🥗預約資格:「本系教職員」、「已畢業系友」及「參與活動工作人員之在校同學」<br/>🥗10:30開放所有系友依序領券，發完為止。<br/>🥗有預約者會先預留券，11:00前由專屬預約通道領券。<br/>🥗11:00未領取者，將釋出預留券讓所有系友依序領取，發完為止。<br/>👫帶家人一起來吃也免費」<br/>👕請著系友識別衣物或帽子或徽章以利識別<br/>▶️搶先登記預約免費園遊券',
        location:'⚛️活動地點：國立成功大學土木系館前，共計6攤。<br/>⚛️費用：免費',
        link:'https://reurl.cc/RelA8D'},

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
            src: "/images/obschedule1.png",
            width: 1200,
            height: 2400,
          },
          {
            src: "/images/obschedule2.png",
            width: 1200,
            height: 2400,
          },
          {
            src: "/images/obschedule3.png",
            width: 1200,
            height: 2400,
          },
        ],  
        description: '一起回憶在球場奔馳的青春',
        location:'⚛️🍻地點：各球場',  
        link:''},
        { id:'9', 
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
        { id:'10', 
          title: '開幕儀式', 
          date: '⚛️活動時間：民國113年11月9日  (星期六)  11:00-11:30', 
          image:[ ], 
          description: '一、 典禮開始：主辦單位代表敲鑼宣布「敲開幕鑼」<br/>二、 主辦單位代表致詞<br/>三、 貴賓介紹<br/>四、 貴賓致詞<br/>五、 大合照<br/>六、 禮成<br/>七、引導貴賓們參觀「系史及系友生活展」和「產業交流展及園遊會」',
          location:'⚛️活動地點：系館對面總圖廣場',
          link:''
        },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const event = events.find((event) => event.id === params.id);
  
    if (event) {
      return NextResponse.json(event);
    } else {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
  }