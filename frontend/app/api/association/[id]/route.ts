import { NextResponse } from 'next/server';

const events = [
  { id:'1', title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座', image:"", link:'https://www.ncku.edu.tw/'},
  { id:'2', title: '登山健行活動', date: '2024-09-30', description: '台北山行活動', image:"", link:'https://www.ncku.edu.tw/'},
  { id:'3', title: '科技講座', date: '2024-10-10', description: '最新科技趨勢', image:"", link:'https://www.ncku.edu.tw/' },
  { id:'4', title: '音樂會', date: '2024-10-20', description: '校友音樂會', image:"", link:'https://www.ncku.edu.tw/' },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const event = events.find((event) => event.id === params.id);
  
    if (event) {
      return NextResponse.json(event);
    } else {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
  }