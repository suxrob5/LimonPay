import Utilits from "@/assets/utillit.png";
import Image from "next/image";

const Utilit = () => {
  return (
    <div className="mt-[100px] bg-[#EFF1F5FF]">
      <div className="flex">
        <div>
          <Image src={Utilits} alt="utilit" width={800} />
        </div>
        <div className="bg-[#EFF1F5FF] p-10">
          <h1 className="text-[24px] font-[500]">Ekspress to`lov</h1>
          <div className="mt-5">
            <label htmlFor="input1" className="text-xl">
              Telefon raqami
            </label>
            <br />
            <input
              type="number"
              id="input1"
              placeholder="(__) ___-__-__"
              className={`w-[500px] rounded-xl px-5 py-3 text-xl focus:outline-[#FFC007FF]`}
            />
          </div>
          <div className="mt-6">
            <label htmlFor="input1" className="text-xl">
              To`lov miqdori
            </label>
            <br />
            <input
              type="number"
              id="input1"
              placeholder="10 000"
              className={`w-[500px] rounded-xl px-5 py-3 text-xl focus:outline-[#FFC007FF]`}
            />
          </div>
          <div className="mt-[30px]">
            <button className="rounded-xl border border-[#FFC007FF] bg-white px-[80px] py-3 text-xl hover:bg-[#FFC007FF]">
              To`lov
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilit;
