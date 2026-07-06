import { useEffect, useState } from "react";

import prewed1 from "../assets/prewed1.jpeg";
import prewed2 from "../assets/prewed2.jpg";
import prewed3 from "../assets/prewed3.jpg";
import prewed4 from "../assets/prewed4.jpg";
import prewed5 from "../assets/prewed5.jpg";
import prewed6 from "../assets/prewed6.jpg";
import prewed7 from "../assets/prewed7.jpg";
import prewed8 from "../assets/prewed8.jpg";
import prewed9 from "../assets/prewed9.jpg";
import prewed10 from "../assets/prewed10.jpg";

import bgPrimary from "../assets/bgprimary.jpg";

import { IoClose } from "react-icons/io5";

import gsap from "gsap";

const GalleryComponents = () => {
  const gallery = [
    {
      id: 1,
      resource: prewed1,
    },
    {
      id: 2,
      resource: prewed2,
    },
    {
      id: 3,
      resource: prewed3,
    },
    {
      id: 4,
      resource: prewed4,
    },
    {
      id: 5,
      resource: prewed5,
    },
    {
      id: 6,
      resource: prewed6,
    },
    {
      id: 7,
      resource: prewed7,
    },
    {
      id: 8,
      resource: prewed8,
    },
    {
      id: 9,
      resource: prewed9,
    },
    {
      id: 10,
      resource: prewed10,
    },
  ];
  const [statusOpen, setStatusOpen] = useState(false);
  const [openFoto, setOpenFoto] = useState(null);

  const ButtonOpen = (resource) => {
    setStatusOpen(true);
    setOpenFoto(resource);
  };

  useEffect(() => {
      if (statusOpen) {
        gsap.fromTo(
          ".galeri",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        );
      }
    }, [statusOpen]);

  return (
    <div
      className="max-w-lg m-auto p-4 overflow-hidden bg-cover bg-center py-12 h-max flex flex-col gap-8 text-center"
      style={{ backgroundImage: `url(${bgPrimary})` }}
    >
      <div>
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-great text-blue-900 font-medium text-6xl"
        >
          Galeri Foto
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {gallery.map((item) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={item.id}
              onClick={() => ButtonOpen(item.resource)}
            >
              <img src={item.resource} alt="" className="rounded-lg" />
            </div>
          );
        })}
      </div>

      {statusOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 ">
          <div className="relative galeri">
            <IoClose
              className="absolute right-3 top-3 size-10 text-primary"
              onClick={() => setStatusOpen(false)}
            />
            <img src={openFoto} alt="" className="w-64 rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponents;
