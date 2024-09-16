//import EventCard from '../../components/EventCard';

export default function EventsPage() {
  const events = [
    { title: '台北成大校友會 9/21活動', date: '2024-09-21', description: '跨文化講座' },
    { title: '登山健行活動', date: '2024-09-30', description: '台北山行活動' },
    { title: '九月份活動延期', date: '2024-09-28', description: '通知延期' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-700 my-4">系友會活動</h1>
      <h1 className="text-3xl font-bold text-red-700 my-4">土木系活動</h1>
      <h1 className="text-3xl font-bold text-red-700 my-4">系學會活動</h1>
    </div>
  );
}