import Yastu from "@/assets/yastu.png";
import Image from "next/image";

const LimonPay = () => {
  return (
    <div className="w-[100%] bg-gray-100">
      <div className="mx-auto flex w-[98%] items-center justify-between">
        <div>
          <h1 className="text-[32px]">Limon Pay</h1>
          <p className="mt-5 text-[20px]">
            Biz orqali siz butun mamlakat bo`ylab pul o`tkazishingiz va
            to`lovlarni <br /> qulay va xavfsiz tarzda amalga oshirishingiz
            mumkin. Xaridlar uchun veb- <br />
            saytimiz va mobil ilovamiz orqali to`lang.
          </p>
          <div className="relative mt-5">
            <button className=" opacity-0 mx-2 rounded-[8px] bg-[#FFC007FF] px-5 py-3 text-black hover:-mt-2 hover:bg-[#ffd145] active:scale-95 active:bg-[#ffd145]">
              Ko&apos;proq o&apos;rganing
            </button>
            <button className="absolute left-0 rounded-[8px] bg-[#FFC007FF] px-5 py-3 text-black hover:-mt-2 hover:bg-[#ffd145] active:scale-95 active:bg-[#ffd145]">
              Ko&apos;proq o&apos;rganing
            </button>
          </div>
        </div>
        <div>
          <Image src={Yastu} alt="yastiq" />
        </div>
      </div>
    </div>
  );
};

export default LimonPay;
