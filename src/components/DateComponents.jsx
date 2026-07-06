import { useEffect, useState } from "react";
import prewed1 from "../assets/prewed1.jpeg";

const DateComponents = () => {
  const weddingDate = new Date("2026-07-12T08:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0"),

        hours: String(
          Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          )
        ).padStart(2, "0"),

        minutes: String(
          Math.floor(
            (distance % (1000 * 60 * 60)) /
              (1000 * 60)
          )
        ).padStart(2, "0"),

        seconds: String(
          Math.floor(
            (distance % (1000 * 60)) / 1000
          )
        ).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = [
    {
      value: timeLeft.days,
      label: "Hari",
    },
    {
      value: timeLeft.hours,
      label: "Jam",
    },
    {
      value: timeLeft.minutes,
      label: "Menit",
    },
    {
      value: timeLeft.seconds,
      label: "Detik",
    },
  ];

  return (
    <section
      className="max-w-lg m-auto min-h-screen bg-cover bg-center bg-fixed sm:bg-scroll flex items-center justify-center"
      style={{
        backgroundImage: `url(${prewed1})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <p data-aos="fade-up"
          data-aos-duration="1000" className="uppercase tracking-[6px] text-sm">
          Save The Date
        </p>

        <h1 data-aos="fade-up"
          data-aos-duration="1000" className="mt-4 text-6xl md:text-8xl font-great">
          Edo & Imar
        </h1>

        <p data-aos="fade-up"
          data-aos-duration="1000" className="mt-4 text-lg">
          Minggu, 12 July 2026
        </p>

        <div data-aos="fade-up"
          data-aos-duration="1000" className="mt-10 flex gap-3 flex-wrap justify-center">
          {countdown.map((item) => (
            <div
              key={item.label}
              className="w-[72px] h-[72px]  md:w-24 md:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center"
            >
              <h2 className="text-2xl md:text-4xl font-bold">
                {item.value}
              </h2>

              <span className="text-xs uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DateComponents;