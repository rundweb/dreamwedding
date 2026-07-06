import mandiri from "../assets/mandiri.png";
import dana from "../assets/dana.png";
import bri from "../assets/bri.png";

import bgPrimary from "../assets/bgprimary.jpg";
import bgSecondary from "../assets/flowers1.jpg";

import { useState } from "react";

import { IoCopySharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";

const GiftComponents = () => {
  const [openGift, setOpenGift] = useState(false);

  const gift = [
    {
      id: 1,
      name: "DEDE ANDRIYANSAH",
      norek: 409501038511539,
      logo: bri,
    },
    {
      id: 2,
      name: "DEDE ANDRIYANSAH",
      norek: "08381058351",
      logo: dana,
    },
    {
      id: 3,
      name: "IMARTUL AENI",
      norek: 820014523278,
      logo: mandiri,
    },
    {
      id: 4,
      name: "IMARTUL AENI",
      norek: "083898816645",
      logo: dana,
    },
  ];

  const handleCopy = async (norek) => {
    try {
      await navigator.clipboard.writeText(norek);
      alert("Nomor rekening berhasil dicopy!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="bg-cover bg-center max-w-lg px-4 py-12 m-auto"
      style={{ backgroundImage: `url(${bgPrimary})` }}
    >
      <div className="flex items-center justify-center w-full flex-col gap-4">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-great text-6xl font-semibold text-blue-900"
        >
          Wedding Gift
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center font-inter tracking-wide font-medium text-blue-900 mt-2"
        >
          Bagi Bapak/Ibu/Saudara/i yang ingin mengirimkan hadiah pernikahan
          dapat melalui virtual account atau e-wallet di bawah ini
        </h2>
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          onClick={() => setOpenGift(!openGift)}
          className="flex items-center justify-center font-inter font-medium tracking-wide shadow-xl text-base bg-primary p-2.5 px-6 rounded-full text-white gap-2 w-max mt-2"
        >
          <FaGift className="size-5 relative -top-[1px]" />
          Klik Disini
        </button>
        {openGift && (
          <div className="flex flex-col gap-4 mt-6 w-full">
            {gift.map((item) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={item.id}
                  className="flex justify-between w-full bg-cover bg-bottom p-4 py-6 rounded-2xl h-48 shadow-lg"
                  style={{ backgroundImage: `url(${bgSecondary})` }}
                >
                  <div className="flex flex-col gap-2 justify-center h-full text-blue-900 font-inter">
                    <h1 className="font-semibold text-lg">{item.norek}</h1>
                    <h1 className="font-semibold text-sm">{item.name}</h1>
                  </div>
                  <div className="flex flex-col justify-between items-end h-full">
                    <img src={item.logo} alt="logo" className="w-32" />
                    <button
                      onClick={() => handleCopy(item.norek)}
                      className="flex items-center justify-center font-inter font-medium tracking-wide shadow-xl text-sm bg-primary p-2 px-4 rounded-full text-white gap-2 w-max"
                    >
                      <IoCopySharp /> Salin Nomor
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftComponents;
