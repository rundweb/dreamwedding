import { useState, useEffect } from "react";
import bgUcapan from "../assets/bgprimary.jpg";
import flowers from "../assets/flowers.png";
import { IoIosSend } from "react-icons/io";

import flowers1 from "../assets/flowers4.png";

const UcapanComponents = () => {
  const [nama, setNama] = useState("");
  const [ucapan, setUcapan] = useState("");

  // State penampung list ucapan dari database Firebase
  const [listUcapan, setListUcapan] = useState([]);

  return (
    <div
      className="relative max-w-lg m-auto overflow-hidden bg-cover bg-center flex items-center justify-center p-4 h-auto pt-20 pb-20"
      style={{ backgroundImage: `url(${bgUcapan})` }}
    >
      <div className="flex flex-col gap-4 items-center justify-center text-center z-10 w-full max-w-lg">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-great text-5xl font-semibold text-blue-900"
        >
          Ucapkan Sesuatu
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center font-inter tracking-wide font-medium text-blue-900 mt-2"
        >
          Berikan ucapan harapan dan do'a kepada kedua mempelai
        </p>

        <div
          className="bg-transparent w-full shadow-xl rounded-2xl flex flex-col gap-4 px-4 py-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* FORM INPUT DENGAN HANDLER SUBMIT */}
          <form className="w-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="p-3 px-4 font-Poppins text-sm font-medium text-blue-900 placeholder:text-blue-900/50 tracking-wide placeholder:font-medium outline-blue-900 shadow-[inset_0_0_10px_rgba(0,0,0,0.40)] rounded-xl"
            />
            <textarea
              rows="4"
              placeholder="Ucapan"
              value={ucapan}
              onChange={(e) => setUcapan(e.target.value)}
              className="p-3 px-4 font-Poppins text-sm font-medium text-blue-900 placeholder:text-blue-900/50 tracking-wide placeholder:font-medium outline-blue-900 shadow-[inset_0_0_10px_rgba(0,0,0,0.40)] rounded-xl"
            ></textarea>
            <button
              type="submit"
              className="flex shadow-xl items-center justify-center w-full bg-blue-900 rounded-xl p-2.5 font-Poppins tracking-wide gap-2 text-white hover:opacity-90 transition-opacity"
            >
              <IoIosSend /> Kirim
            </button>
          </form>

          {/* Pembatas Garis */}
          <div className="flex items-center justify-between my-2 gap-2">
            <div className="w-full h-[2px] bg-blue-900 rounded-full"></div>
            <img src={flowers} alt="bg" loading="lazy" className="w-10" />
            <div className="w-full h-[2px] bg-blue-900 rounded-full"></div>
          </div>

          {/* TEMPAT MENAMPILKAN DATA YANG DILOOPING DARI FIREBASE */}
          <div className="flex flex-col gap-6 max-h-[400px] overflow-y-auto pr-2">
            {listUcapan.length > 0 ? (
              listUcapan.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start text-start border-b border-blue-900/10 pb-3 last:border-0"
                >
                  <h1 className="font-inter font-medium text-xl tracking-wide text-blue-900">
                    {item.nama}
                  </h1>
                  <h2 className="font-inter text-sm tracking-wide  text-blue-900 whitespace-pre-line">
                    {item.ucapan}
                  </h2>
                  <p className="font-Playfair text-xs text-blue-900/60 mt-1">
                    {item.tanggal}
                  </p>
                </div>
              ))
            ) : (
              <p className="font-Poppins text-sm text-blue-900/50 italic">
                Belum ada ucapan. Jadilah yang pertama!
              </p>
            )}
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="absolute z-10 -bottom-2 -right-8"
      >
        <img src={flowers1} alt="flowers" className="w-40" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="absolute z-10 -bottom-2 -left-8"
      >
        <img src={flowers1} alt="flowers" className="w-40 scale-x-[-1]" />
      </div>
    </div>
  );
};

export default UcapanComponents;
