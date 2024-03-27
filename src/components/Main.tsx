"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Phone from "@/assets/dobule.png";

const MainPg = () => {
  const router = useRouter();
  return (
    <div className="border-b-[5px] border-[#FFC007FF]">
      <div className="mx-auto h-auto w-[98%]">
        <h1 className="text-[#000]">.</h1>
        <div className="mt-[55px] flex items-center justify-between">
          <div>
            <h1 className="text-[47px] font-[700]">
              LimonPay - biz sizga kerak <br /> bo&apos;lgan narsani qila olamiz{" "}
              <span className="text-[#32B141FF]">:)</span>
            </h1>
            <div className="mt-5">
              <p className="py-2">
                Biz orqali siz butun mamlakat bo&apos;ylab pul
                o&apos;tkazishingiz va to&apos;lovlarni qulay va xavfsiz tarzda
                amalga oshirishingiz mumkin.
              </p>
              <p className="py-2">
                Xaridlar uchun veb-saytimiz va mobil ilovamiz orqali
                to&apos;lang.
              </p>
            </div>
            <div className="mt-10 flex items-center">
              <button
                onClick={() => {
                  router.push("#h"),
                    setTimeout(() => {
                      router.push("/");
                    }, 1000);
                }}
                className="mx-2 rounded-[8px] bg-[#FFC007FF] px-5 py-3 text-black hover:-mt-2 hover:bg-[#ffd145] active:scale-95 active:bg-[#ffd145]"
              >
                Ko&apos;proq o&apos;rganing
              </button>
              <Link
                href="https://cabinet.limonpay.uz/auth/welcome"
                target="blank"
              >
                <button className="mx-2 rounded-[8px] bg-[#FFFFFFFF] px-5 py-3 text-black hover:-mt-2 active:scale-95 active:bg-[]">
                  Hisobingizga kiring
                </button>
              </Link>
            </div>
          </div>
          <div className="relative mt-[70px]">
            <Image src={Phone} alt="Phone" width={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPg;
