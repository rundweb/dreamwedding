import { IoMailOpenOutline } from "react-icons/io5";
import prewed1 from "../assets/prewed1.jpeg";
import flowers1 from "../assets/flowers4.png";
import { useEffect, useState } from "react";
import bgOpen from "../assets/11.jpg";

import bg from '../assets/bgprimary.jpg'

import flowers2 from "../assets/flowers.png";
import MempelaiComponents from "../components/MempelaiComponents";
import DateComponents from "../components/DateComponents";
import AcaraComponents from "../components/AcaraComponents";
import GalleryComponents from "../components/GalleryComponents";
import GiftComponents from "../components/GiftComponents";
import UcapanComponents from "../components/UcapanComponents";
import EndingComponents from "../components/EndingComponents";
import MusicPlayer from "../components/MusicPlayer";
import { gsap } from "gsap";
import PreloadComponents from "../components/PreloadComponents";

const FirstComponents = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        ".flower",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          delay: 2,
          stagger: 0.8,
          duration: 2,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".images",
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          delay: 1,
          duration: 2,
          ease: "power3.out",
        },
      );
    }
  }, [open]);

  // 1. State utama buat memicu class pudar
  const [isLoading, setIsLoading] = useState(true);
  // 2. State buat bener-bener ngehapus komponen dari DOM setelah pudar
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // 1. Lock scroll pas awal masuk biar tamu ga bisa scroll pas loading
    document.body.classList.add("loading-active");

    // Dafar gambar yang mau kita paksa load duluan
    const imagesToPreload = [prewed1, flowers1];

    // Fungsi buat bikin Promise di tiap gambar
    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve; // Success
        img.onerror = resolve; // Tetep resolve biar web ga stuck loading kalau ada 1 gambar yang broken/salah path
      });
    };

    // 2. Jalankan tracking untuk semua gambar sekaligus
    Promise.all(imagesToPreload.map((src) => preloadImage(src))).then(() => {
      // Kasih jeda santai 500ms biar ga terlalu kaget pas transisi
      setTimeout(() => {
        setIsLoading(false); // Mulai efek pudar (opacity-0) karena SEMUA gambar udah siap!

        // 3. Hapus preloader dari DOM setelah animasi pudar Tailwind selesai (1 detik / duration-1000)
        setTimeout(() => {
          setShowPreloader(false);
          document.body.classList.remove("loading-active"); // Balikin scroll body
        }, 1000);
      }, 500);
    });
  }, []);

  // 1. Bikin state buat nyimpen nama tamu, default-nya "Nama Tamu" atau "Tamu Undangan"
  const [namaTamu, setNamaTamu] = useState("Tamu Undangan");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const guestName = queryParams.get("to");

    if (guestName) {
      // Bungkus pake setTimeout biar dieksekusi secara asynchronous
      setTimeout(() => {
        setNamaTamu(decodeURIComponent(guestName));
      }, 0); // 0 ms udah cukup buat ngilangin error-nya
    }
  }, []);

  return (
    <div>
      <div
        className="max-w-lg relative overflow-hidden m-auto min-h-screen flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${prewed1})` }}
      >
        {showPreloader && (
          <div
            className={`absolute w-full min-h-screen flex items-center justify-center p-4 bg-cover bg-center z-[100] transition-all duration-1000 ease-out ${!isLoading ? "opacity-0 pointer-events-none z-0" : "opacity-100"}`}
            style={{ backgroundImage: `url(${bg})` }}
          >
            <PreloadComponents />
          </div>
        )}
        {!isLoading && (
          <div>
            <div className="bg-gradient-to-b from-blue-50/0 via-blue-50/70 to-blue-50 z-10 w-full absolute top-0 left-0 min-h-screen"></div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
              data-aos-offset="0"
              className="absolute z-10 -bottom-2 -right-8"
            >
              <img src={flowers1} alt="flowers" className="w-40" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
              data-aos-offset="0"
              className="absolute z-10 -bottom-2 -left-8"
            >
              <img src={flowers1} alt="flowers" className="w-40 scale-x-[-1]" />
            </div>
            <div className="mt-64">
              <div className="flex flex-col gap-2 text-center relative z-20 items-center justify-center">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="font-medium uppercase text-lg text-blue-900 font-playfair"
                >
                  The Wedding Of
                </p>
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className="font-bold text-5xl tracking-wide text-blue-900 font-playfair -mt-1 mb-2"
                >
                  Imar & Edo
                </h1>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                  className="font-medium text-blue-900 text-sm font-playfair"
                >
                  Kepada Bapak/Ibu/Saudara/i
                </h2>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="900"
                  data-aos-offset="0"
                  className="font-medium text-xl text-blue-950 font-inter"
                >
                  {namaTamu}
                </h3>
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1200"
                  data-aos-offset="0"
                  onClick={() => setOpen(true)}
                  className="flex items-center justify-center font-inter font-medium tracking-wide shadow-xl text-base bg-primary p-2.5 px-6 rounded-full text-white gap-2 w-max mt-2"
                >
                  <IoMailOpenOutline className="size-5 relative -top-[1px]" />{" "}
                  Buka Undangan
                </button>
              </div>
            </div>
          </div>
        )}

        <div
          className={`min-h-screen flex flex-col gap-6 p-4 items-center justify-center text-center z-30 w-full absolute bg-center bg-cover left-0 ${open ? "translate-y-0" : "translate-y-full"} transition-transform duration-1000 ease-in-out`}
          style={{ backgroundImage: `url(${bgOpen})` }}
        >
          <div className="images">
            <img src={flowers2} alt="flowers" className="w-52" />
          </div>
          <div className="flex flex-col gap-6 font-playfair">
            <h1 className="flower font-medium text-4xl text-blue-900">
              WITH LOVE
            </h1>
            <h2 className="flower text-sm font-medium tracking-wide text-blue-900 italic">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
              kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
              terdapat tanda-tanda bagi kaum yang berfikir."
            </h2>
            <h3 className="flower font-semibold text-2xl text-blue-900">
              Qs. Ar. Rum:21
            </h3>
          </div>
        </div>
      </div>
      {open && (
        <>
          <MempelaiComponents /> <DateComponents />
          <AcaraComponents />
          <GalleryComponents /> <GiftComponents />
          <UcapanComponents />
          <MusicPlayer openPages={open} />
          <EndingComponents />
        </>
      )}
    </div>
  );
};

export default FirstComponents;
