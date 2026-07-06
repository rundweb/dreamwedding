import bgEnding from "../assets/flowers1.jpg";
import imagesEnding from "../assets/prewed11.jpg";

import { AiFillInstagram } from "react-icons/ai";

const EndingComponents = () => {
  return (
    <div
      className="relative max-w-lg m-auto overflow-hidden min-h-screen p-4 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgEnding})` }}
    >
      <div className="flex flex-col gap-4 text-center items-center justify-center -mt-10">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={imagesEnding}
          alt="prewed"
          loading="lazy"
          className="w-52 object-cover object-top rounded-xl shadow-2xl mb-6 border-4 border-white"
        />
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-inter tracking-wide italic text-sm text-blue-900 capitalize"
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
          bapak/ibu/saudara/i berkenan hadir dan memberikan do'a restu, atas
          kehadiran dan do'a restunya, kami mengucapkan terima kasih.
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-great text-4xl text-blue-900"
        >
          Imar & Edo
        </h2>
      </div>

      <div className="absolute bottom-4 left-2/4 -translate-x-2/4  text-center z-[60]">
        <h1 className="text-blue-900 font-inter font-medium tracking-wide text-sm">
          Undangan Digital By :{" "}
        </h1>{" "}
        <a
          className="text-blue-900/80 font-inter font-medium text-sm cursor-pointer flex items-center justify-center gap-2"
          href="https://www.instagram.com/rfldhrstyd_/?utm_source=ig_web_button_share_sheet"
          target="blank"
        >
          <AiFillInstagram />
          @rfldhrstyd_
        </a>
      </div>
    </div>
  );
};

export default EndingComponents;
