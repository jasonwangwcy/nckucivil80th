import { NextResponse } from 'next/server';

const events = [
  { title: '成大土木系友會活動', date: '2024-09-21', description: '跨文化講座', link:'https://www.ncku.edu.tw/'},
  { title: '登山健行', date: '2024-09-30', description: '台北山行活動', link:'https://www.ncku.edu.tw/'},
  { title: '科技論壇', date: '2024-10-10', description: '最新科技趨勢', link:'https://www.ncku.edu.tw/'},
  { title: '音樂欣賞', date: '2024-10-20', description: '校友音樂會', link:'https://www.ncku.edu.tw/'},
  { title: '成大土木系友會活動2', date: '2024-09-21', description: '跨文化講座', link:'https://www.ncku.edu.tw/'},
  { title: '登山健行2', date: '2024-09-30', description: '台北山行活動', link:'https://www.ncku.edu.tw/'},
  { title: '科技論壇2', date: '2024-10-10', description: '最新科技趨勢', link:'https://www.ncku.edu.tw/'},
  { title: '音樂欣賞2', date: '2024-10-20', description: '校友音樂會', link:'https://www.ncku.edu.tw/'},
];

export async function GET() {
  return NextResponse.json(events); 
}