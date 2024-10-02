import Image from 'next/image';
import invitecard from '../../public/images/invitecard.jpg';
import keyvisual from '../../public/images/keyvisual.png'

export default function AboutPage() {
  return (
    <section className="mt-20 p-4">
      <div className="mb-6">
        <h2 className="text-center text-3xl font-bold text-red-700 my-4">成土飛揚 八方十洲</h2>
        <p className="mb-4">
          1944年創立的成大土木經歷二戰結束的大時代變動，在艱困貧乏環境師生教學相長，孕育工程人才厚植國力，建教合作協力國家建設，引領土木工程技術成長飛揚。
        </p>
        <p className="mb-4">
          主視覺以鳳凰花蕊土木心為主體，結合寰宇經緯及八方羅盤，象徵80年來上萬成大土木系友八方發展貢獻全球十洲；以創系1944年為綴註，提醒吾輩莫忘初衷，繼續秉持窮理致知校訓勇於承擔挑戰，藏行顯光，遍照十洲，引領世界邁向更美好的明天。
        </p>
        <div className="mb-6 flex justify-center">
        <Image src={keyvisual} alt="keyvisual" />
      </div>
      </div>
      <h2 className="text-center text-2xl font-bold mb-2">邀請卡</h2>
      <div className="flex justify-center">
        <Image src={invitecard} alt="invitecard" className="w-1/2 h-auto" />
      </div>
      <h2 className="mt-20 text-2xl font-bold mb-2">聯絡我們</h2>
    </section>
  );
}