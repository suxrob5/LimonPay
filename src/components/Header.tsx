import Image from "next/image";
import Link from "next/link";
import MainIcon from "@/assets/Limon.png";
import AppStore from "@/assets/AppStore.png";
import GooglePlay from "@/assets/GooglePlay.png";

const Header = () => {
  return (
    <header className="w-[100%] bg-[#17171CFF] border-b-2">
      <div className="flex items-center justify-between py-5 px-3 w-[90%]">
        <Link href="/">
          <Image src={MainIcon} alt="main img" width={200} />
        </Link>
        <nav>
          <ul>
            <li className="text-white font-[600] text-[12px]">
              <Link className="mx-3" href="/about">
                Loyiha haqida
              </Link>
              <Link className="mx-2" href="/news">
                Yangiliklar
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between">
          <select className="focus:outline-none bg-[#17171CFF] text-[11px] text-white border px-5 py-3 border-[#2B2B30FF] rounded-lg">
            <option
              className="bg-white text-black text-xl py-10"
              value="O'zbekcha"
            >
              O`zbekcha
            </option>
            <option
              className="bg-white text-black text-xl py-10"
              value="English"
            >
              English
            </option>
            <option
              className="bg-white text-black text-xl py-10"
              value="Русский"
            >
              Русский
            </option>
          </select>
          <div className="flex items-center justify-between">
            <button className="mx-2">
              <Image src={AppStore} alt="App store" width={100} />
            </button>
            <button className="mx-2">
              <Image src={GooglePlay} alt="google play" width={100} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
