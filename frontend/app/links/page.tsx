
export default function LinksPage() {
  return (
    <section className="mt-20">
      <h1 className="text-3xl font-bold mb-4">相關連結</h1>
      <div className="bg-white p-4">
        <ul className="list-disc list-inside space-y-4">
          <li>
            <a href="https://www.instagram.com/p/DAGktaePjxI/?igsh=MmY5cHZoa3dtc250" 
               className="text-blue-500 hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              IG 連結
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/p/XnLYyNkyNQ6m3LLd/?mibextid=oFDkn" 
               className="text-blue-500 hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              FB 連結
            </a>
          </li>
          <li>
            <a href="https://reurl.cc/NZxA66" 
               className="text-blue-500 hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              《成大土木系友社群》
            </a>
          </li>
          <li>
            <a href="https://reurl.cc/n5Y10l" 
               className="text-blue-500 hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              《系友臉書社團》
            </a>
          </li>
          <li>
            <a href="https://reurl.cc/Yj3v6a" 
               className="text-blue-500 hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              《成大土木系友頻道》
            </a>
          </li>
          <li>
            <a href="https://www.civil.ncku.edu.tw/" 
               className="text-blue-500 hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              成大土木系
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}