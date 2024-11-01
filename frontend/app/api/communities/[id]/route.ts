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
    description: '4509: 資深學長回顧與分享<br/>4507: 非典型土木人生--- Open Mic短講<br/>',
    location:'⚛️活動地點：國立成功大學土木系館4507，4509。',
    link:''},

  { id:'3',title: '系慶同學會', 
    date: '⚛️活動時間：民國113年11月9日  (星期六)  14:00～16:00', 
    image:[
      {
      src: "/images/reunion.png",
      width: 400,
      height: 600,
    }],  
    description: '畢業整數級系友返系同學會教室<br/>A: 4505 63級<br/>B: 4504、4506 83級<br/>C: 93級',
    location:'⚛️活動地點：國立成功大學土木系館。',
    link:''},

    { id:'4',title: '系慶千人餐會（135桌）', 
      date: '🍻時間：113/11/9(六) 晚上18:00 開席', 
      image:[
        {
        src: "/images/party.jpg",
        width: 400,
        height: 600,
    }],  
      description: '史上第一次全球系友系慶大會師，席開135桌<br/>⚛️點擊報名',
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
      {
        src: "/images/ad6.png",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad7.png",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad8.png",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad9.png",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad10.jpg",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad11.jpg",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad12.png",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad13.jpg",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad14.png",
        width: 1920,
        height: 1800,
      },
      {
        src: "/images/ad15.png",
        width: 1920,
        height: 1800,
      },
    ],  
      description: '系友產業交流展覽，建立產學合作關係及專業互助的友誼圈<br/>產業交流報名廠商:<br/>1,2 亞東預拌混凝土股份有限公<br/>3 台灣邁達斯股份有限公<br/>9,10 BMW台南汎<br/>11 環塑科技股份有限公司<br/>12 峻佳室內裝修設計（股）<br/>13 劦承精密股份有限公司<br/>14 統榮鋼鐵、東京鐵鋼<br/>15 樂土Lotos<br/>16 義力營造股份有限公司<br/>17 聯懿禾鑫弘豐外牆專家<br/>18 固越建築材料科技股份有限公司<br/>19 豐譽企業團隊<br/>20 誌興鋼構工程股份有限公司<br/>21 九春工業股份有限公司<br/>22 宏義工程股份有限公司<br/>23 喜利得股份有限公司<br/>24 協誠營造股份有限公司<br/>25 春原營造股份有限公司<br/>26 台義隔震設備有限公司<br/>27 優聖系統股份有限公司<br/>28 DNV立恩威國際驗證股份有限公司<br/>29 齊步綠能科技有限公司<br/>30 繽紛科技股份有限公司<br/>31 堃成營造股份有限公司<br/>32 萬鼎工程服務股份有限公司<br/>33 中興工程顧問股份有限公司<br/>',
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
        description: '📮成大土木80周年<br/>📮專設臨時郵局及郵戳公告<br/>⚛️ 80週年紀念郵戳、明信片、郵局商品販售<br/>⚛️寄給未來-未來信件活動：',
        location:'⚛️活動地點：園遊會攤位',  
        link:'https://reurl.cc/Or33Yy'},

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
        { id:'9',title: '小工程師手作教室', 
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
        { id:'10', 
          title: '開幕儀式', 
          date: '⚛️活動時間：民國113年11月9日  (星期六)  11:00-11:30', 
          image:[ 
            {
            src: "/images/openning.png",
              width: 400,
              height: 600,
            },   
          ], 
          description: '一、 典禮開始：主辦單位代表敲鑼宣布「敲開幕鑼」<br/>二、 主辦單位代表致詞<br/>三、 貴賓介紹<br/>四、 貴賓致詞<br/>五、 大合照<br/>六、 禮成<br/>七、引導貴賓們參觀「系史及系友生活展」和「產業交流展及園遊會」',
          location:'⚛️活動地點：系館對面總圖廣場',
          link:''
        },
        { id:'11', 
          title: '八十系慶魔幻拍貼機', 
          date: '⚛️活動時間：民國113年11月9日  (星期六)  13:00-16:00', 
          image:[
            {
              src: "/images/photobooth1.jpg",
                width: 400,
                height: 600,
              },  
            {
              src: "/images/photobooth3.jpg",
                width: 400,
                height: 600,
              },
               {
              src: "/images/photobooth5.jpg",
                width: 400,
                height: 600,
              }, 
               {
              src: "/images/photobooth6.jpg",
                width: 400,
                height: 600,
              }, 
           ], 
          description: '📸14種背景任你挑選<br/>🌇可自行下載留存<br/>🌄系慶當日現場送列印收藏<br/>👫珍藏八十年一次的畫面',
          location:'⏰13:00-16:00 總圖前園遊會場</br>⏰17:00-21:00 雅悅會館餐會現場場',
          link:'https://line.me/ti/p/%40094yuqax'
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