const YouTube = () => {
  return (
    <div className="flex items-center justify-between mx-auto w-[98%]">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mnKQa3ow4CY?si=3V02S2RLafQq6AEa"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-[730px] h-[450px] rounded-[8px]"
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/kGD-hYg4ITY?si=9r8Tg3wNFUa8eb7r"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-[730px] h-[450px] rounded-[8px]"
      ></iframe> 
    </div>
  );
};

export default YouTube;
