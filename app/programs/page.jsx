"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ===================== FIGMA MOOD BOX DATA ===================== */
const moodBoxData = [
  { name: "Horror", img: "/horror.png" },
  { name: "Romance", img: "/romance.png" },
  { name: "ITB", img: "/itb.png" },
  { name: "Mystery", img: "/mystery.png" },
  { name: "Gen Z", img: "/genz.png" },
];

/* ===================== PROGRAM DATA ===================== */
const allProgramsData = [
    {
    title: "LTM : Lentera Tengah Malam",
    genre: "Horror",
    thumbnail: "/Ltm.png",
    description: "Kupas tuntas tempat paling angker di ITB Jatinangor dalam episode perdana LTM yang dijamin bikin bulu kuduk berdiri! 🕯👻🔥",
  },
  {
  title: "OWL : Obrolan Waktu Larut",
  genre: "Horror",
  thumbnail: "/Owl.png",
  description: "Siap bongkar tiga lagu berhantu yang bakal bikin Kampus Mania merinding! 👻🎶🔥",
  },
  {
    title: "LDR : Love Dalam Realita ",
    genre: "Romance",
    thumbnail: "/Logo.png",
    description: "Siap nemenin Kampus Mania ngulik first date yang penuh ekspektasi tapi realitanya penuh plot twist! 😆💘",
  },
  {
    title: "LOVE 4.0: Navigasi Hati di Era Notifikasi",
    genre: "Romance",
    thumbnail: "/LOVE_4.0_U.png",
    description: "Siap nemenin Kampus Mania bahas cinta era digital yang bikin deg-degan tiap notifikasi masuk! 💘📱🔥",
  },
  {
    title: "NGIBUL : Ngobrol Asik Bebas Gaul",
    genre: "Gen Z",
    thumbnail: "/Ngibul3.png",
    description: "TNGIBUL hadir jadi ruang aman Gen Z buat ngebahas label “generasi santuy” dan realitanya! 🎙️✨",
  },
  {
    title: "SDGS : Santai Dulu Ga Sih...",
    genre: "Gen Z",
    thumbnail: "/Sdg.png",
    description: "Siap kupas fenomena bahasa gaul Gen Z yang lagi viral bareng Kala, Ajrin, dan El! 🤩🔥",
  },
  {
    title: "MASK : Misteri Asik Seputar Kriminal",
    genre: "Mystery",
    thumbnail: "/Mask.png",
    description: "Kupas tuntas fakta stalking yang bisa berubah dari ketertarikan jadi obsesi berbahaya! ⚠️🎭",
  },
  {
    title: "TKP : Tempat Kupas Peristiwa",
    genre: "Mystery",
    thumbnail: "/Tkp.png",
    description: "TKP kupas tuntas kebiasaan kecil kita beneran bisa bikin kita dianggap kriminal! 🫣📌",
  },
  {
    title: "WASABI : What’s Up AITIBI",
    genre: "ITB",
    thumbnail: "/Wasabi.png",
    description: "WASABI?! Bongkar suka-duka dunia ITB plus tips biar hidup tetap chill di tengah chaos! 🤩💥",
    },
    {
    title: "BAYANGAN : Bangunan, Budaya, dan Kenangan ITB",
    genre: "ITB",
    thumbnail: "/Bayangan.png",
    description: "Bayangan siap bongkar sejarah tersembunyi Menara Loji, lengkap dari asal-usul sampai rumor yang bikin penasaran! ⏰✨",
    },
];

/* ===================== UPCOMING EVENTS ===================== */
const upcomingEvents = [
  { date: "2025-12-13", time: "17:00-19:00", title: "LDR", genre: "Romance" },
  { date: "2025-12-13", time: "19:30-21:30", title: "SDGs", genre: "ITB" },
  { date: "2025-12-14", time: "17:00-19:00", title: "LOVE 4.0 U", genre: "Romance" },
  { date: "2025-12-14", time: "19:30-21:30", title: "OWL", genre: "ITB" },
  { date: "2025-12-15", time: "17:00-19:00", title: "WASABI", genre: "Gen Z" },
  { date: "2025-12-15", time: "19:30-21:30", title: "LTM", genre: "ITB" },
  { date: "2025-12-16", time: "17:00-19:00", title: "BAYANGAN", genre: "Horror" },
  { date: "2025-12-16", time: "19:30-21:30", title: "MASK", genre: "Mystery" },
  { date: "2025-12-17", time: "17:00-19:00", title: "NGIBUL", genre: "Horror" },
  { date: "2025-12-17", time: "19:30-21:30", title: "TKP", genre: "Mystery" },
];

/* ===================== GENRE COLORS ===================== */
const genreColors = {
  Horror: "bg-red-600",
  Romance: "bg-pink-500",
  "Gen Z": "bg-purple-500",
  Mystery: "bg-teal-400",
  ITB: "bg-blue-500",
};

/* ===================== GENRE SECTION ===================== */
const GenreSelectionSection = ({ selectedGenre, onGenreSelect }) => {
  return (
    <section className="pb-20 pt-16 relative overflow-hidden bg-transparent">

      <div className="text-center mb-8">
        <Image src="/spark.png" width={300} height={200} alt="Spark Logo" className="mx-auto" />
      </div>

      <div className="text-center mb-10">
        <Image src="/mood.png" width={405} height={205} alt="Mood Label" className="mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 relative">

        <div className="swiper-button-prev-custom absolute -left-2 sm:-left-6 md:-left-10 lg:-left-16 top-[45%] -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold cursor-pointer hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 hover:scale-110 active:scale-95 transition-all duration-200 shadow-2xl hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] z-40 border-3 border-white ring-4 ring-orange-300">
          ‹
        </div>

        <div className="swiper-button-next-custom absolute -right-2 sm:-right-6 md:-right-10 lg:-right-16 top-[45%] -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold cursor-pointer hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 hover:scale-110 active:scale-95 transition-all duration-200 shadow-2xl hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] z-40 border-3 border-white ring-4 ring-orange-300">
          ›
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          slidesPerView={1.2}
          spaceBetween={15}
          centeredSlides={false}
          loop={false}
          allowTouchMove={true}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2.3, spaceBetween: 25 },
            1024: { slidesPerView: 2.8, spaceBetween: 25 },
            1280: { slidesPerView: 3.3, spaceBetween: 30 },
            1536: { slidesPerView: 3.8, spaceBetween: 30 },
          }}
          className="py-8 px-2 sm:px-4"
        >
          {moodBoxData.map((item, idx) => (
            <SwiperSlide
              key={idx}
              onClick={() => onGenreSelect(item.name)}
              className="flex justify-center cursor-pointer"
            >
              <div className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] flex items-center justify-center bg-white overflow-hidden">

                <Image
                  src={item.img}
                  width={400}
                  height={250}
                  alt={item.name}
                  className={`
                    object-contain w-full h-full transition-all duration-300 p-4
                    ${selectedGenre === item.name 
                      ? "animate-bounce-smooth drop-shadow-[0_0_12px_rgba(255,150,0,0.6)]"
                      : "opacity-90"
                    }
                  `}
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          :global(.custom-bullet) {
            width: 10px;
            height: 10px;
            background: #d1d5db;
            opacity: 1;
            margin: 0 4px;
            border-radius: 50%;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          @media (min-width: 640px) {
            :global(.custom-bullet) {
              width: 12px;
              height: 12px;
              margin: 0 6px;
            }
          }
          
          @media (min-width: 1024px) {
            :global(.custom-bullet) {
              width: 14px;
              height: 14px;
              margin: 0 8px;
            }
          }
          
          :global(.custom-bullet:hover) {
            background: #fb923c;
            transform: scale(1.3);
          }
          
          :global(.custom-bullet-active) {
            background: linear-gradient(135deg, #f97316, #ef4444, #eab308);
            width: 24px;
            border-radius: 6px;
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(249, 115, 22, 0.5);
          }
          
          @media (min-width: 640px) {
            :global(.custom-bullet-active) {
              width: 32px;
            }
          }
          
          @media (min-width: 1024px) {
            :global(.custom-bullet-active) {
              width: 40px;
            }
          }
          
          /* Position pagination bullets BELOW the swiper */
          :global(.swiper-pagination) {
            position: relative !important;
            bottom: auto !important;
            margin-top: 20px !important;
          }

          /* FORCE arrows to ALWAYS be visible and prominent */
          :global(.swiper-button-prev-custom),
          :global(.swiper-button-next-custom) {
            display: flex !important;
            pointer-events: auto !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
          
          /* Keep arrows visible even when disabled */
          :global(.swiper-button-prev-custom.swiper-button-disabled),
          :global(.swiper-button-next-custom.swiper-button-disabled) {
            opacity: 0.5 !important;
            pointer-events: auto !important;
            display: flex !important;
          }
          
          /* Ensure swiper container doesn't hide overflow */
          :global(.swiper) {
            overflow: visible !important;
            padding: 0 !important;
          }
          
          :global(.swiper-wrapper) {
            cursor: grab !important;
          }
          
          :global(.swiper-wrapper:active) {
            cursor: grabbing !important;
          }
        `}</style>
      </div>
    </section>
  );
};

/* ===================== PROGRAM LIST ===================== */
const FilteredProgramsList = ({ selectedGenre }) => {
  if (!selectedGenre) return null;

  const filtered = allProgramsData.filter((p) => p.genre === selectedGenre);

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center animate-bounce hover:text-red-600 transition-all duration-500">
          Program {selectedGenre}
        </h2>

        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {filtered.map((program, idx) => (
            <div
              key={idx}
              className="w-80 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-500 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-red-600 group snap-center"
            >
              <div className="w-full h-48 flex items-center justify-center mb-4">
                <div className="relative w-[180px] h-[180px]">
                  <Image
                    src={program.thumbnail}
                    alt={program.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">{program.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{program.description}</p>

              <Link href="#" className="text-red-600 hover:text-red-800 mt-3 inline-block underline font-semibold transition-all hover:translate-x-1">
                Listen Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== UPCOMING EVENTS ===================== */
const UpcomingEvents = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const eventsByDate = {};
  upcomingEvents.forEach((event) => {
    const day = parseInt(event.date.split("-")[2]);
    if (!eventsByDate[day]) eventsByDate[day] = [];
    eventsByDate[day].push(event);
  });

  const daysInMonth = 31;

  return (
    <section className="py-16 relative bg-transparent">

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-red-600 mb-8 text-center animate-bounce">Upcoming Siaran</h2>

        <div className="relative p-6 rounded-2xl bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 shadow-lg">
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
              const hasEvent = eventsByDate[day];
              const isSelected = selectedDay === day;

              return (
                <button
                  key={day}
                  onClick={() => hasEvent && setSelectedDay(isSelected ? null : day)}
                  className={`
                    h-16 rounded-lg flex flex-col items-center justify-center transition-all
                    bg-white border hover:bg-gradient-to-br hover:from-yellow-100 hover:to-red-100
                    ${hasEvent ? "border-2 border-yellow-400 hover:scale-110 shadow-lg" : ""}
                    ${isSelected ? "ring-4 ring-red-600 scale-105" : ""}
                  `}
                >
                  <div className="font-bold text-gray-900">{day}</div>

                  {hasEvent && (
                    <div className="flex mt-1 gap-1">
                      {eventsByDate[day].map((e, i) => (
                        <span key={i} className={`w-4 h-4 rounded-full ${genreColors[e.genre]}`}></span>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Event detail */}
        {selectedDay && (
          <div className="mt-8 bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-red-200 animate-slide-in-up">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Events on {selectedDay} December</h3>

            {eventsByDate[selectedDay].map((event, idx) => (
              <div
                key={idx}
                className="mb-3 p-4 rounded-xl bg-red-50 border-l-4 border-red-400 shadow-sm flex justify-between items-center hover:bg-red-100 transition-all"
              >
                <div>
                  <div className="font-semibold text-gray-800">{event.title}</div>
                  <div className="text-sm text-gray-600">{event.time}</div>
                </div>
                <span className={`w-6 h-6 rounded-full ${genreColors[event.genre]}`}></span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* ===================== CONTACT ===================== */
const ContactSection = () => (
  <section className="py-24 relative bg-transparent">

    <div className="max-w-6xl mx-auto px-6 relative z-10">

      <h2
        className="
          text-5xl font-extrabold text-red-600 mb-12 text-center
          animate-bounce
          animate-fade-in
        "
      >
        Contact Us
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-all">
        <h3 className="text-3xl font-bold mb-5 text-red-600 animate-slide-in-up">Hubungi Kami</h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 animate-fade-in">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 text-2xl">📧</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">yourradiosfavradio@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 animate-fade-in">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-pink-600 text-2xl">📸</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Instagram</p>
              <p className="text-gray-600">@spark31radio</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 animate-fade-in">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-2xl">📍</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Location</p>
              <p className="text-gray-600">Institut Teknologi Bandung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


/* ===================== MAIN ===================== */
export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <div className="min-h-screen relative bg-white"> 
      <div 
    className="fixed inset-0 z-0 opacity-50" 
    style={{ 
    backgroundImage: 'url("/background.png")', 
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center center', 
  }}
>
</div>
      <div className="relative z-10">
        <Navbar sticky={true} />
        <GenreSelectionSection selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
        <FilteredProgramsList selectedGenre={selectedGenre} />
        <UpcomingEvents />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}
