import Monitoring from "@/assets/monitoring.png";
import Kashlok from "@/assets/kashlok.png";
import Raketa from "@/assets/raketa.png";
import Image from "next/image";
const Rac = () => {
  return (
    <div className="mx-auto mt-[100px] w-[98%] grid grid-cols-3 gap-2">
      <div>
        <div className="flex items-center justify-center">
          <Image src={Monitoring} alt="one 2 3" className="w-[150px]" />
        </div>
        <h1 className="mt-5 text-center text-[18px] font-semibold">
          Monitoring
        </h1>
        <div className="mt-5">
          <h1 className="text-center text-[14px] font-[500] text-gray-400">
            To`g`ridan-to`g`ri smartfoningizdan pulni boshqarishning eng <br />
            oson usuli. Dunyoning istalgan joyida. Istalgan vaqtda. Har <br />
            qanday vaziyatda.
          </h1>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <Image src={Kashlok} alt="one 2 3" className="w-[150px]" />
        </div>
        <h1 className="mt-5 text-center text-[18px] font-semibold">
          To`lovlar
        </h1>
        <div className="mt-5">
          <h1 className="text-center text-[14px] font-[500] text-gray-400">
            Bu jismoniy bank kartalari va naqd puldan ko`ra qulayroq va
            <br />
            xavfsizroq, shuningdek do`konlarda to`lovni to`lashda shaxsiy <br />
            ma`lumotlaringizni himoya qilish imkonini beradi. <br />
          </h1>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <Image src={Raketa} alt="one 2 3" className="w-[150px]" />
        </div>
        <h1 className="mt-5 text-center text-[18px] font-semibold">
          Monitoring
        </h1>
        <div className="mt-5">
          <h1 className="text-center text-[14px] font-[500] text-gray-400">
            Agar sizga nomaqbul firibgardan qo`ng`iroq kelib tushsa yoki <br />
            yoqimsiz dasturiy xatolarga duch kelsangiz, iltimos, bizning
            Call- <br /> markazga murojaat qiling. Biz doimo aloqadamiz!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Rac;
