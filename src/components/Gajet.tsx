import Qurilma from "@/assets/qurilma.png";
import AppGoogle from "@/assets/AppGoogle.png";
import Image from "next/image";

const Gajet = () => {
  return (
    <div className="mt-[100px]">
      <Image src={Qurilma} alt="Qurilmas" />
      <div>
        <Image src={AppGoogle} alt="appStore and google" />
      </div>
    </div>
  );
};

export default Gajet;
