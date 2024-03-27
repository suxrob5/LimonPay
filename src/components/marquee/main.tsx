import Marquee from "react-fast-marquee";
import img from "@/assets/GooglePlay.png"
import Image from "next/image";

const Marque = () => {
  return (
    <Marquee>
      I can be a React component, multiple React components, or just some text.
      <Image src={img} alt="" />
    </Marquee>
  );
}

export default Marque