import Image from 'next/image';
import postcard1 from '../../public/images/a7.jpg'
import postcard2 from '../../public/images/a8.jpg'
import whiteshirt from '../../public/images/whiteshirt.png'
import cap from '../../public/images/cap.jpg'
import jacket from '../../public/images/jacket.jpg'
export default function AboutPage() {
  return (
    <div className="mt-20">
      <div>
  <h1 className="text-3xl font-bold text-red-700 my-4">回憶插畫明信片</h1>

  <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
    <Image src={postcard1} alt='postcard1' />
    <Image src={postcard2} alt='postcard2' />
  </div>

  {/* 新增的文字內容 */}
  <div className="my-6">
    <p className="text-xl mb-2">🎉八十年系慶限定明信片</p>
    <p className="text-xl mb-2">🎉紀念、收藏寄給家人皆相宜</p>
    <p className="text-xl mb-2">📮第一階段預購十月搶先擁有。即將截止，快搶。</p>
    <p className="text-xl mb-2">
      ⏩️點擊搶購➕加購未來信件
      <a href="https://forms.gle/xNZ7M9v4GHNL8hKz6" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> https://forms.gle/xNZ7M9v4GHNL8hKz6</a>
    </p>
  </div>

  <a href='https://reurl.cc/Mj9pjX' target="_blank" rel="noopener noreferrer" className='text-2xl text-red-700 my-4'>購買連結</a>
</div>
      <div>
        <h1 className="text-3xl font-bold text-red-700 my-4">周邊商品</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-72 h-72">
            <Image src={whiteshirt} alt="white" className="object-cover w-full h-full" />
          </div>
        <div className="w-72 h-72">
           <Image src={jacket} alt="jacket" className="object-cover w-full h-full" />
          </div>
        <div className="w-72 h-72">
          <Image src={cap} alt="blue" className="object-cover w-full h-full" />
        </div>
      </div>
        <a href='https://reurl.cc/4dqK6R' target="_blank" rel="noopener noreferrer" className='text-2xl text-red-700 my-4'> 購買連結</a>
      </div>
    </div>
  );
}