"use client";
import Asos from "@/assets/asos.png";
import Usd from "@/assets/usd.png";
import Image from "next/image";
import { useState } from "react";
import Btn from "@/assets/obmenBtn.png";

const ExchangeRates = () => {
  const [inputVal1, setInputVal1] = useState("");
  const [inputVal2, setInputVal2] = useState("");
  const [isObmen, setIsObmen] = useState(false);

  const handleIsOmben = () => {
    isObmen == false ? setIsObmen(true) : setIsObmen(false);
    isObmen == true ? setIsObmen(false) : setIsObmen(true);
  };
  return (
    <div className="mt-[100px] w-[100%]">
      <div className="mx-auto w-[98%]">
        <header className="flex items-center justify-between">
          <h1 className="text-[24px] font-medium">Valyuta kursi</h1>
          <Image src={Asos} alt="valute kurs asosida" width={450} />
        </header>
        <main className="flex items-center justify-between">
          <div className="mx-5 bg-[#F8F8FAFF] rounded-xl px-10">
            {isObmen == true ? (
              <div className="relative my-10 flex">
                <input
                  type="number"
                  placeholder="0"
                  value={inputVal1}
                  onChange={(e) => setInputVal1(e.target.value)}
                  className="w-[550px] border-b-2 bg-[#F8F8FAFF] px-5 py-5 text-[34px] font-[700] text-gray-400 focus:outline-none"
                />
                <h1 className="absolute bottom-5 right-0 bg-[#F8F8FAFF] text-[34px] font-[700]">
                  USD
                </h1>
              </div>
            ) : (
              <div className="relative my-10 flex">
                <input
                  type="number"
                  placeholder="0"
                  value={inputVal2}
                  onChange={(e) => setInputVal2(e.target.value)}
                  className="w-[550px] border-b-2 bg-[#F8F8FAFF] px-5 py-5 text-[34px] font-[700] text-gray-400 focus:outline-none"
                />
                <h1 className="absolute bottom-5 right-0 bg-[#F8F8FAFF] text-[34px] font-[700]">
                  UZS
                </h1>
              </div>
            )}

            <div className="flex items-center justify-center">
              <button onClick={handleIsOmben}>
                <Image src={Btn} alt="btn" width={50} />
              </button>
            </div>

            {isObmen == false ? (
              <div className="relative my-10 flex">
                <input
                  type="number"
                  placeholder="0"
                  value={inputVal1}
                  onChange={(e) => setInputVal1(e.target.value)}
                  className="w-[450px] border-b-2 bg-[#F8F8FAFF] px-5 py-5 text-[34px] font-[700] text-gray-400 focus:outline-none"
                />
                <h1 className="absolute bottom-5 right-0 bg-[#F8F8FAFF] text-[34px] font-[700]">
                  USD
                </h1>
              </div>
            ) : (
              <div className="relative my-10 flex">
                <input
                  type="number"
                  placeholder="0"
                  value={inputVal2}
                  onChange={(e) => setInputVal2(e.target.value)}
                  className="w-[450px] border-b-2 bg-[#F8F8FAFF] px-5 py-5 text-[34px] font-[700] text-gray-400 focus:outline-none"
                />
                <h1 className="absolute bottom-5 right-0 bg-[#F8F8FAFF] text-[34px] font-[700]">
                  UZS
                </h1>
              </div>
            )}
          </div>
          <div>
            <Image src={Usd} alt="img" height={500} width={1000} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExchangeRates;
