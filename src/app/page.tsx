"use client";
import ExchangeRates from "@/components/ExchangeRates";
import Footer from "@/components/Footer";
import Gajet from "@/components/Gajet";
import Header from "@/components/Header";
import LimonPay from "@/components/LimonPay";
import MainPg from "@/components/Main";
import MarqueePg from "@/components/Marquee";
import OtherCategories from "@/components/OtherCategories";
import Rac from "@/components/Rac";
import Utilit from "@/components/Utilit";
import YouTube from "@/components/YouTube";

const Home = () => {
  return (
    <div id="h" className="mx-auto max-w-[2000px]">
      <Header />
      <main className="bg-[#17171CFF] text-white">
        <MainPg />
      </main>
      <div className="mt-5">
        <YouTube />
      </div>
      <div>
        <Rac />
      </div>
      <div>
        <LimonPay />
      </div>
      <div>
        <ExchangeRates />
      </div>
      <div>
        <Utilit />
      </div>
      <div> 
        <OtherCategories />
      </div>  
      <div>
        <Gajet/>
      </div>
      <MarqueePg/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
