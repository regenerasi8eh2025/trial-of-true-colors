"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

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
    title: "TKP Eps. What… I'm the case?",
    genre: "Horror",
    thumbnail: "/Video Promosi.png",
    description: "‼️Check on Yourself! Explore hal-hal kecil..."
  },
  {
    title: "LDR “Love Dalam Realita”",
    genre: "Romance",
    thumbnail: "/Logo.png",
    description: "Program siaran/podcast yang membahas tarik-ulur dunia percintaan ketika ekspektasi manis bertemu realita yang sering penuh plot twist. Lewat obrolan ringan, cerita listener, dan fenomena percintaan masa kini, LDR jadi ruang yang dekat dan relate untuk mengulik bagaimana rencana hati dan realita berjalan dengan ritmenya masing-masing. Dengan suasana hangat dan apa adanya, LDR hadir untuk menghibur sekaligus nemenin para pejuang cinta melihat realita dengan cara yang lebih ringan dan lucu."
  },
  {
    title: "LOVE 4.0 U",
    genre: "Romance",
    thumbnail: "/LOVE 4.0 U.png",
    description: "Membahas soal berbagai macam masalah percintaan di era digitalisasi zaman modern. Perkara cara publikasi status yang ribeeet banget sekarang… soft-launch atau hard-launch, duh! Ribet banget tapi bikin kepo juga sih, hehehe."
  },
  {
    title: "TKP Gen Z Edition",
    genre: "Gen Z",
    thumbnail: "/LOGO FIX.png",
    description: "TKP versi anak muda kekinian..."
  },
  {
    title: "TKP Mystery Edition",
    genre: "Mystery",
    thumbnail: "/Video Promosi.png",
    description: "Kupas peristiwa penuh misteri..."
  }
];

/* ===================== LIST UPCOMING SIARAN  ===================== */
const upcomingEvents = [
  {
    date: "2025-12-13",
    time: "17:00-19.00",
    title: "LDR",
  },
  {
    date: "2025-12-13",
    time: "19:30-21.30",
    title: "SDGs",
  },
  {
    date: "2025-12-14",
    time: "17:00-19.00",
    title: "LOVE 4.0 U",
  },
  {
    date: "2025-12-14",
    time: "19:30-21.30",
    title: "OWL",
  },
  {
    date: "2025-12-15",
    time: "17:00-19.00",
    title: "WASABI",
  },
  {
    date: "2025-12-15",
    time: "19:30-21.30",
    title: "LTM",
  },
  {
    date: "2025-12-16",
    time: "17:00-19.00",
    title: "BAYANGAN",
  },
 {
    date: "2025-12-16",
    time: "19:30-21.30",
    title: "MASK",
  },
  {
    date: "2025-12-17",
    time: "17:00-19.00",
    title: "NGIBUL",
  },
  {
    date: "2025-12-17",
    time: "19:30-21.30",
    title: "TKP",
  },
];

/* ===================== GENRE SECTION (MOOD BOX) ===================== */
const GenreSelectionSection = ({ selectedGenre, onGenreSelect }) => {
  return (
    <section className="pb-24 bg-gradient-to-b from-yellow-300 to-white pt-16">

      {/* Spark Header */}
      <div className="text-center mb-8">
        <Image src="/spark.png" width={300} height={200} alt="Spark Logo" className="mx-auto" />
      </div>

      {/* Mood Text */}
      <div className="text-center mb-10">
        <Image src="/mood.png" width={260} height={80} alt="Mood Label" className="mx-auto" />
      </div>

      {/* Mood Box Slider (Figma Style) */}
      <div className="max-w-5xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1.4}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.4 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="py-8"
        >
          {moodBoxData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => onGenreSelect(item.name)}
                className={`
                  w-72 h-48 
                  bg-white 
                  rounded-2xl 
                  border border-[#ffb4a6]
                  shadow-[0_6px_15px_rgba(0,0,0,0.15)]
                  flex items-center justify-center
                  cursor-pointer
                  transition transform hover:scale-[1.05]
                  ${selectedGenre === item.name ? "ring-4 ring-orange-500" : ""}
                `}
              >
                <Image
                  src={item.img}
                  width={180}
                  height={120}
                  alt={item.name}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

/* ===================== PROGRAM LIST ===================== */
const FilteredProgramsList = ({ selectedGenre }) => {
  if (!selectedGenre) {
    return (
      <p className="text-center text-xl text-gray-600 py-10">
        Pilih mood/genre dulu ya 😊
      </p>
    );
  }

  const filtered = allProgramsData.filter(p => p.genre === selectedGenre);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          Program {selectedGenre}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((program, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <div className="w-full pt-[100%] relative rounded-lg overflow-hidden mb-4 bg-gray-200">
                <Image src={program.thumbnail} alt={program.title} fill style={{ objectFit: "contain" }} />
              </div>
              <h3 className="text-xl font-bold">{program.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{program.description}</p>
              <Link
                href="#"
                className="text-red-600 hover:text-red-800 mt-3 inline-block underline"
              >
                Listen Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== UPCOMING SIARAN ===================== */
const UpcomingEvents = () => {
  const daysInMonth = 31;
  const startDay = 1; 
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null); 
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const eventsByDate = {};
  const filteredEvents = upcomingEvents.filter(event => event.date >= '2025-12-13');
  filteredEvents.forEach(event => {
    const day = parseInt(event.date.split('-')[2]);
    if (!eventsByDate[day]) eventsByDate[day] = [];
    eventsByDate[day].push(event);
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-red-600 mb-8 text-center">
          Upcoming Siaran
        </h2>
        <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl shadow-lg border">
          <h3 className="text-2xl font-bold text-orange-600 text-center mb-4">December 2025</h3>
          <div className="grid grid-cols-7 gap-2">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center font-bold text-red-700 py-2">
                {day}
              </div>
            ))}
            {calendarDays.map((day, idx) => (
              <div
                key={idx}
                className={`text-center py-4 border rounded ${
                  day ? 'bg-gray-50' : 'bg-transparent'
                } ${eventsByDate[day] ? 'bg-yellow-100 border-yellow-300' : ''}`}
              >
                {day && (
                  <>
                    <div className="font-semibold text-yellow-700">{day}</div>
                    {eventsByDate[day] && eventsByDate[day].map((event, idx) => (
                      <div key={idx} className="text-xs mt-1 text-red-600 font-semibold">
                        {event.title}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-bold text-orange-600 mb-4">Catat Tanggal Siaran Kami di:</h4>
            {filteredEvents.slice(0, 2).map((event, idx) => (
              <div key={idx} className="mb-4 p-4 bg-gray-50 rounded">
                <div className="font-bold">
                  <span className="text-orange-600">{event.date}</span> <span className="text-black">at</span> <span className="text-orange-600">{event.time}</span>
                </div>
                <div className="font-semibold text-red-600">{event.title}</div>
                <div className="text-sm text-orange-600">{event.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===================== MAIN PAGE ===================== */
export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <GenreSelectionSection
        selectedGenre={selectedGenre}
        onGenreSelect={setSelectedGenre}
      />

      <FilteredProgramsList selectedGenre={selectedGenre} />

      <UpcomingEvents />

      <FooterSection />
    </div>
  );
}