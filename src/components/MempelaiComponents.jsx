import bgMempelai from "../assets/bgprimary.jpg";
import cpw from "../assets/cpw.jpeg";
import cpp from "../assets/cpp.jpeg";

import flowers2 from "../assets/flowers3.png";

import flowers from "../assets/flowers4.png";
const MempelaiComponents = () => {
  return (
    <div
      className="relative overflow-hidden max-w-lg h-max m-auto p-4 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgMempelai})` }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div data-aos="fade-down"
          data-aos-duration="1000" className="absolute -right-12 -top-16 z-10">
          <img src={flowers2} alt="flw" className="w-40" />
        </div>
        <div data-aos="fade-up"
          data-aos-duration="1000" className="absolute -left-12 -bottom-12 z-10">
          <img src={flowers2} alt="flw" className="w-40" />
        </div>
        <div data-aos="fade-up"
          data-aos-duration="1000" className="absolute -right-12 -bottom-12 z-10 scale-x-[-1]">
          <img src={flowers2} alt="flw" className="w-40" />
        </div>
        <div data-aos="fade-down"
          data-aos-duration="1000" className="absolute -left-12 -top-16 z-10 scale-x-[-1]">
          <img src={flowers2} alt="flw" className="w-40" />
        </div>
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-great font-semibold text-blue-950 text-3xl relative z-20"
        >
          Assalamualaikum Wr. Wb
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-sm font-inter text-blue-950 tracking-wide my-2"
        >
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
          serta kerabat sekalian untuk menghadiri acara pernikahan kami.
        </p>
        <div className="flex flex-col gap-2  w-full items-center justify-center mt-8">
          <div data-aos="fade-up" data-aos-duration="1000" className="relative">
            <img
              src={cpw}
              alt="cpw"
              className="rounded-full shadow-2xl w-44 border-4 border-white mb-4 z-10"
            />
            <div className="absolute z-20 -bottom-2 -right-12">
              <img src={flowers} alt="flw" className="w-40" />
            </div>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-great text-blue-950 text-5xl font-semibold mt-4"
          >
            Imartul Aeni
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-inter tracking-wide font-medium text-sm text-blue-950"
          >
            Putri dari Bapak Jaya Elpendi <br /> & Ibu Anni (Alm)
          </h2>
        </div>

        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-playfair text-6xl text-blue-950 font-bold my-8"
        >
          &
        </h1>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col gap-2  w-full items-center justify-center mt-2"
        >
          <div className="relative">
            <img
              src={cpp}
              alt="cpw"
              className="rounded-full shadow-2xl w-44 border-4 border-white mb-4 z-10"
            />
            <div className="absolute z-20 -bottom-2 -right-12">
              <img src={flowers} alt="flw" className="w-40" />
            </div>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-great text-blue-950 text-5xl font-semibold mt-4"
          >
            Dede Andriyansah
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-inter tracking-wide font-medium text-sm text-blue-950"
          >
            Putra dari Bapak Aep & Ibu Bibah
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MempelaiComponents;
