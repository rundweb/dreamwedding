import bgPrimary from "../assets/11.jpg";
import bgSecondary from "../assets/bgprimary.jpg";
import flowersPrimary from "../assets/flowers.png";
import flowersPrimary2 from "../assets/flowers3.png";

const AcaraComponents = () => {
  return (
    <div
      className="max-w-lg m-auto bg-cover bg-center p-4 h-max"
      style={{ backgroundImage: `url(${bgPrimary})` }}
    >
      <div
        className="bg-cover bg-center w-full flex flex-col items-center justify-center gap-4 text-center px-4 py-20 rounded-full border-4 border-white shadow-[inset_0_4px_10px_rgba(0,0,0,0.25)]"
        style={{ backgroundImage: `url(${bgSecondary})` }}
      >
        <div data-aos="zoom-in" data-aos-duration="1000">
          <img src={flowersPrimary} alt="flw" className="w-36" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-great text-5xl text-blue-900 font-medium tracking-wide"
          >
            Akad Nikah
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-[85%] h-[1px] bg-blue-950 rounded-full my-2.5"
          ></div>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-playfair font-bold tracking-wide text-2xl text-blue-950 mt-2"
          >
            Minggu, 12 July 2026
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-inter text-blue-950 text-sm font-medium tracking-wide my-2.5"
          >
            Pukul : 08:00 WIB - 10:00 WIB
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-inter text-blue-950 text-sm font-medium tracking-wide"
          >
            Alamat : Kediaman Mempelai Wanita
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <img src={flowersPrimary2} alt="flw" className="w-36 my-6" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-great text-5xl text-blue-900 font-medium tracking-wide"
          >
            Resepsi
          </h1>
          <div data-aos="fade-up"
          data-aos-duration="1000" className="w-[85%] h-[1px] bg-blue-950 rounded-full my-2.5"></div>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-playfair font-bold tracking-wide text-2xl text-blue-950 mt-2"
          >
            Minggu, 12 July 2026
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-inter text-blue-950 text-sm font-medium tracking-wide my-2.5"
          >
            Pukul : 10:00 WIB - Selesai
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-inter text-blue-950 text-sm font-medium tracking-wide"
          >
            Alamat : Kediaman Mempelai Wanita
          </p>
        </div>
      </div>
    </div>
  );
};
export default AcaraComponents;
