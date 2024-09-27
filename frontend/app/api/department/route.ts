import { NextResponse } from 'next/server';

const events = [
  { id:'1', title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座', image:"", link:'https://www.ncku.edu.tw/'},
];

export async function GET() {
  return NextResponse.json(events); 
}