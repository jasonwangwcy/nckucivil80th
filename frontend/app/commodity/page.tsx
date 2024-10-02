import Image from 'next/image';
import postcard1 from '../../public/images/a7.jpg'
import postcard2 from '../../public/images/a8.jpg'
import whiteshirt from '../../public/images/whiteshirt.png'
import redshirt from '../../public/images/redshirt.png'
import blueshirt from '../../public/images/blueshirt.png'
export default function AboutPage() {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-3xl font-bold text-red-700 my-4">回憶插畫明信片</h1>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
        <Image src={postcard1} alt='postcard1'></Image>
        <Image src={postcard2} alt='postcard1'></Image>
        </div>
        <a href='https://reurl.cc/Mj9pjX' target="_blank" rel="noopener noreferrer" className='text-2xl text-red-700 my-4'> 購買連結</a>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-red-700 my-4">專屬紀念衫</h1>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
        <Image src={whiteshirt} alt='white'></Image>
        <Image src={redshirt} alt='white'></Image>
        <Image src={blueshirt} alt='white'></Image>
        </div>
        <a href='https://reurl.cc/4dqK6R' target="_blank" rel="noopener noreferrer" className='text-2xl text-red-700 my-4'> 購買連結</a>
      </div>
    </div>
  );
}