import { NextResponse } from 'next/server';

const events = [
  { id:'1', title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座', link:'https://imgur.com/a/I1pSv1W'},
  { id:'2', title: '登山健行活動', date: '2024-09-30', description: '台北山行活動', link:'https://imgur.com/a/I1pSv1W'},
  { id:'3', title: '科技講座', date: '2024-10-10', description: '最新科技趨勢', link:'https://imgur.com/a/I1pSv1W' },
  { id:'4', title: '音樂會', date: '2024-10-20', description: '校友音樂會', link:'https://imgur.com/a/I1pSv1W' },
  { id:'5', title: '帆遊安平港', 
    date: '民國113年11月10日', 
    description: '報名連結：<a href="https://i6gh8y.1shop.tw/ud0f61" target="_blank" rel="noopener noreferrer"> https://i6gh8y.1shop.tw/ud0f61 </a>', 
    image:{
      src: "/images/sailboatdescription.png",
      width: 400,
      height: 600,
    },
    link:'https://imgur.com/a/I1pSv1W'
  },
  { id:'6', 
    title: 'Oktoberfest 德國啤酒節', 
    date: '民國113年9月28日', 
    description: '🍺成大土木80週年系慶活動🍺 <br />9/28 Oktoberfest 德國啤酒節來囉!<br />🍻本活動由 「中華民國成大土木系友會」 及 「中華民國德國學術交流協會」 合辦。<br />🥨活動地點：路德威手工啤酒餐廳（403台中市西區公益路36號）<br />🥨活動時間：9月28日 (星期六) 12:00～16:00 (11:30開始報到)<br />🥨報名日期：50名，即日起至民國113年9月22日 (日) 23:59止，或額滿為止。<br />🥨活動費用：原價 900 元/人。<br />(1)系友會會員         600 元/人。<br />(2)教師職員            600 元/人。<br />(3)會員眷屬、系友 800 元/人。 <br />🍻附贈啤酒杯一只。<br />🍻報到領入場券，憑入場券可參加贊助摸彩。<br />🍺贊助單位：BMW台中汎德<br />🍺喝酒不開車，開車不喝酒。<br />🍺報名連結：<a href="https://forms.gle/9wseoQwWkf97RNsR9" target="_blank" rel="noopener noreferrer"> https://forms.gle/9wseoQwWkf97RNsR9 </a>', 
    image:{
      src: "/images/beer.jpg",
      width: 400,
      height: 600,
    }, 
    link:'https://imgur.com/a/I1pSv1W'
  },
  {  id:'7', 
    title: '中區講座', 
    date: '113年10月19日', 
    description: '成土飛揚、八方十洲<br />80周年系慶系列活動--中區講座<br />重金邀請張金鶚得意門生、實價登錄始作俑者--成大統計系范垂爐學長以風趣的內容，為我們解說未來房產趨勢<br />講座題目:看不到盡頭的房價<br />主講人:范垂爐<br />時間:113年10月19日(六)  14:00~16:00(13:30報到)<br />地點:台中市北屯區文心路四段936號3樓_文心會議室_303室<br />費用:免費名額:限量30名<br />報名截止日期:113年9月30日<br />主辦:成大土木系友會聯絡人:李梓賢 <br />報名網址:<a href="https://forms.gle/3bEisbxUxmWicXTh9" target="_blank" rel="noopener noreferrer"> https://forms.gle/3bEisbxUxmWicXTh9 </a>',
    image:{
      src: "/images/lecture.jpg",
      width: 400,
      height: 600,
    },   
    link:'https://imgur.com/a/I1pSv1W'  },
  { id:'8', 
    title: '產業交流博覽會活動', 
    date: '民國113年11月9日', 
    image:{
      src:"/images/openhouse.jpg",
      width: 400,
      height: 600,
    }, 
    description: '成大土木80週年-「產業交流博覽會」活動，邀請系友產業共襄盛舉。<br />🔻活動緣起:<br />    1944年創立的成大土木經歷二戰結束的大時代變動，在艱困貧乏環境師生教學相長，孕育工程人才厚植國力，建教合作協力國家建設，引領土木工程技術成長飛揚。適逢本系80周年系慶，舉辦產業交流博覽會活動，建立產學合作關係及專業互助的友誼圈，成為業界備受信賴的合作夥伴。<br />⚛️活動時間：民國113年11月9日  (星期六)  10:00～16:00<br />⚛️活動地點：國立成功大學土木系館及圖書館前廣場，共計39攤。<br />⚛️報名日期：即日起至民國113年10月25日  (五) 23:59止。<br />⚛️活動流程：<br />📍 報　　到   09:30～09:50<br />📍 開　　場   09:50～10:00<br />📍 交流活動   10:00～16:00  (無午休)<br />⚛️擺攤費用：贊助10,000元/攤  或 「卓越基金贊助者」。<br />※「 卓越基金贊助者」：參與「創系80週年系慶」卓越基金募款活動，成為 「贊助者」及「榮譽贊助者」得免再收費參展。<br />⚛️致謝方式：<br />🔻贊助一萬元(含)以上/攤<br />📍董事長親簽謝函及感謝狀乙只<br />📍載入80系慶活動紀念冊<br />📍掛名系館所設本活動感謝牆<br />📍宣傳看板牆LOGO曝光<br />🔻贊助三萬元(含)以上/攤（含「卓越基金贊助者」）<br />📍除前述致謝外，另以下列方式致謝：<br />📍受邀出席80系慶千人餐會<br />🔻贊助十萬元(含)以上/攤（含「卓越基金榮譽贊助者」）<br />📍除前述致謝外，另以下列方式致謝：<br />📍千人餐會投影片LOGO曝光<br />📍千人餐會上台受頒感謝狀<br />⚛️活動提供：<br />📍3m*3m 帳篷1組。<br />📍60cm*180cm 長桌1張。<br />📍摺疊椅2張。<br />📍活動現場品牌露出2天  (11/9~11/10)。<br />⚛️報名連結：<br /><a href="https://forms.gle/uaXvFvnUQaRcT5Dq5" target="_blank" rel="noopener noreferrer" >https://forms.gle/uaXvFvnUQaRcT5Dq5</a><br />⚛️轉帳資訊：<br />🔻戶        名：中華民國成大土木系友會<br />🔻銀行匯款：第一銀行 007 興雅分行<br />🔻帳        號：155-10-129131', link:'https://imgur.com/a/I1pSv1W' }, 
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const event = events.find((event) => event.id === params.id);
  
    if (event) {
      return NextResponse.json(event);
    } else {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
  }