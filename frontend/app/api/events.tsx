import { NextApiRequest, NextApiResponse } from 'next';

const events = [
  { title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座' },
  { title: '登山健行活動', date: '2024-09-30', description: '台北山行活動' },
  { title: '科技講座', date: '2024-10-10', description: '最新科技趨勢' },
  { title: '音樂會', date: '2024-10-20', description: '校友音樂會' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(events);
}