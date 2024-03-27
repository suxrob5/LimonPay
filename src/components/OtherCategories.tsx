import Img1 from "@/assets/img1.png";
import Img2 from "@/assets/img2.png";
import Img3 from "@/assets/img3.png";
import Img4 from "@/assets/img4.png";
import Img5 from "@/assets/img5.png";
import Img6 from "@/assets/img6.png";
import Image from "next/image";

const OtherCategories = () => {
  return (
    <div className="mt-[100px]">
      <div>
        <header className="mx-auto flex w-[95%] items-center justify-between">
          <h1 className="text-2xl font-[700]">Boshqa turkumlar</h1>
          <a
            href="https://limonpay.uz/services"
            className="text-2xl font-[700] text-gray-600 hover:text-[#FFC007FF]"
          >
            Barcha toifalar
          </a>
        </header>
        <main className="mx-auto mt-[30px] flex w-[98%] items-center justify-between">
          <div className="w-[230px] h-[120px] cursor-pointer rounded-xl border px-5 pt-5 hover:-mt-2 hover:bg-[#FFC007FF]">
            <div className="flex items-center justify-center py-2">
              <Image src={Img1} alt="images" />
            </div>
            <div>
              <p className="text-center">
                Internet xizmatlarini ko`rsatuvchi <br /> provayderlar
              </p>
            </div>
            <div className="mx-auto mt-5 h-[5px] w-[25px] rounded-[5px] border bg-green-500"></div>
          </div>
          <div className="w-[230px] h-[120px] cursor-pointer rounded-xl border px-5 pt-5 hover:-mt-2 hover:bg-[#FFC007FF]">
            <div className="flex items-center justify-center py-2">
              <Image src={Img2} alt="images" />
            </div>
            <div>
              <p className="text-center">Televidenie va onlayn efir</p>
            </div>
            <div className="mx-auto mt-5 h-[5px] w-[25px] rounded-[5px] border bg-green-500"></div>
          </div>
          <div className="w-[230px] h-[120px] cursor-pointer rounded-xl border px-5 pt-5 hover:-mt-2 hover:bg-[#FFC007FF]">
            <div className="flex items-center justify-center py-2">
              <Image src={Img3} alt="images" />
            </div>
            <div>
              <p className="text-center">Sug`urta </p>
            </div>
            <div className="mx-auto mt-5 h-[5px] w-[25px] rounded-[5px] border bg-green-500"></div>
          </div>
          <div className="w-[230px] h-[120px] cursor-pointer rounded-xl border px-5 pt-5 hover:-mt-2 hover:bg-[#FFC007FF]">
            <div className="flex items-center justify-center py-2">
              <Image src={Img4} alt="images" />
            </div>
            <div>
              <p className="text-center">O`yinlar & Ijtimoiy media </p>
            </div>
            <div className="mx-auto mt-5 h-[5px] w-[25px] rounded-[5px] border bg-green-500"></div>
          </div>
          <div className="w-[230px] h-[120px] cursor-pointer rounded-xl border px-5 pt-5 hover:-mt-2 hover:bg-[#FFC007FF]">
            <div className="flex items-center justify-center py-2">
              <Image src={Img5} alt="images" />
            </div>
            <div>
              <p className="text-center">Xosting-provayderlar </p>
            </div>
            <div className="mx-auto mt-5 h-[5px] w-[25px] rounded-[5px] border bg-green-500"></div>
          </div>
          <div className="w-[230px] h-[120px] cursor-pointer rounded-xl border px-5 pt-5 hover:-mt-2 hover:bg-[#FFC007FF]">
            <div className="flex items-center justify-center py-2">
              <Image src={Img6} alt="images" />
            </div>
            <div>
              <p className="text-center">Havo va temir yo`l chiptalari</p>
            </div>
            <div className="mx-auto mt-5 h-[5px] w-[25px] rounded-[5px] border bg-green-500"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OtherCategories;
