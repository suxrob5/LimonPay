"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import Img1 from "@/assets/hamkor/1.png";
import Img2 from "@/assets/hamkor/2.png";
import Img3 from "@/assets/hamkor/3.png";
import Img4 from "@/assets/hamkor/4.png";
import { useState } from "react";

const MarqueePg = () => {
  const [is, setIs] = useState(false);
  setTimeout(()=>{
    setIs(true);
  },2000)

  return (
    <div>
      <h1>Hamkorlar</h1>
      <Marquee>
        <Image src={Img1} alt="img" />
        <Image src={Img2} alt="img" />
        <Image src={Img3} alt="img" />
        <Image src={Img4} alt="img" />
      </Marquee>

      {is == true ? (
        <Marquee className="mt-10">
          <Image src={Img4} alt="img" />
          <Image src={Img3} alt="img" />
          <Image src={Img2} alt="img" />
          <Image src={Img1} alt="img" />
        </Marquee>
      ) : (
        ""
      )}
    </div>
  );
};

export default MarqueePg;
