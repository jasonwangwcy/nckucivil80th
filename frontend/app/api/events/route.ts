import { NextResponse } from 'next/server';

const events = [
  { title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座', link:'https://www.ncku.edu.tw/'},
  { title: '登山健行活動', date: '2024-09-30', description: '台北山行活動', link:'https://www.ncku.edu.tw/'},
  { title: '科技講座', date: '2024-10-10', description: '最新科技趨勢', link:'https://www.ncku.edu.tw/' },
  { title: '音樂會', date: '2024-10-20', description: '校友音樂會', link:'https://www.ncku.edu.tw/' },
  { title: '台北成大校友會 9/21活動2', date: '2024-09-21', description: '跨文化講座', link:'https://www.ncku.edu.tw/'},
  { title: '登山健行活動2', date: '2024-09-30', description: '台北山行活動', link:'https://www.ncku.edu.tw/'},
  { title: '科技講座2', date: '2024-10-10', description: '最新科技趨勢', link:'https://www.ncku.edu.tw/' },
  { title: '音樂會2', date: '2024-10-20', description: '校友音樂會', link:'https://www.ncku.edu.tw/' }, 
];

export async function GET() {
  return NextResponse.json(events); 
}