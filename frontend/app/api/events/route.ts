import { NextResponse } from 'next/server';

const events = [
  { id:'1', title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座', image:"", link:'https://imgur.com/a/I1pSv1W'},
  { id:'2', title: '登山健行活動', date: '2024-09-30', description: '台北山行活動', image:"", link:'https://imgur.com/a/I1pSv1W'},
  { id:'3', title: '科技講座', date: '2024-10-10', description: '最新科技趨勢', image:"", link:'https://imgur.com/a/I1pSv1W' },
  { id:'4', title: '音樂會', date: '2024-10-20', description: '校友音樂會', image:"", link:'https://imgur.com/a/I1pSv1W' },
  { id:'5', title: '台北成大校友會 9/21活動2', date: '2024-09-21', description: '跨文化講座', image:"", link:'https://imgur.com/a/I1pSv1W'},
  { id:'6', title: '登山健行活動2', date: '2024-09-30', description: '台北山行活動', image:"", link:'https://imgur.com/a/I1pSv1W'},
  { id:'7', title: '科技講座2', date: '2024-10-10', description: '最新科技趨勢',image:"",  link:'https://imgur.com/a/I1pSv1W' },
  { id:'8', 
    title: '產業交流博覽會活動', 
    date: '民國113年11月9日', 
    description: '成大土木80週年-「產業交流博覽會」活動，邀請系友產業共襄盛舉🔻活動緣起:1944年創立的成大土木經歷二戰結束的大時代變動，在艱困貧乏環境師生教學相長，孕育工程人才厚植國力，建教合作協力國家建設，引領土木工程技術成長飛揚。適逢本系80周年系慶，舉辦產業交流博覽會活動，建立產學合作關係及專業互助的友誼圈，成為業界備受信賴的合作夥伴。⚛️活動時間：民國113年11月9日  (星期六)  10:00～16:00⚛️活動地點：國立成功大學土木系館及圖書館前廣場，共計39攤。⚛️報名日期：即日起至民國113年10月25日  (五) 23:59止。⚛️活動流程：📍 報　　到   09:30～09:50📍 開　　場   09:50～10:00📍 交流活動   10:00～16:00  (無午休)⚛️擺攤費用：贊助10,000元/攤  或 「卓越基金贊助者」。 ※「 卓越基金贊助者」：參與「創系80週年系慶」卓越基金募款活動，成為 「贊助者」及「榮譽贊助者」得免再收費參展。⚛️致謝方式：🔻贊助一萬元(含)以上/攤📍董事長親簽謝函及感謝狀乙只📍載入80系慶活動紀念冊📍掛名系館所設本活動感謝牆📍宣傳看板牆LOGO曝光🔻贊助三萬元(含)以上/攤（含「卓越基金贊助者」）📍除前述致謝外，另以下列方式致謝：📍受邀出席80系慶千人餐會🔻贊助十萬元(含)以上/攤（含「卓越基金榮譽贊助者」）📍除前述致謝外，另以下列方式致謝：📍千人餐會投影片LOGO曝光📍千人餐會上台受頒感謝狀⚛️活動提供：📍3m*3m 帳篷1組。📍60cm*180cm 長桌1張。📍摺疊椅2張。📍活動現場品牌露出2天  (11/9~11/10)。⚛️報名連結：https://forms.gle/uaXvFvnUQaRcT5Dq5⚛️轉帳資訊：🔻戶        名：中華民國成大土木系友會🔻銀行匯款：第一銀行 007 興雅分行🔻帳        號：155-10-129131', 
    image:{
      src: "/images/openhouse.jpg",
      width: 400,
      height: 600,
    },
    link:'https://imgur.com/a/I1pSv1W' , }
];

export async function GET() {
  return NextResponse.json(events); 
}