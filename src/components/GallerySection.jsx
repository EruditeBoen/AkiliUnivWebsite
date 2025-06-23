import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imageGroups = [
  // First 18 images
  [
    "/gallery/img1.jpg", "/gallery/img2.jpg", "/gallery/img3.jpg",
    "/gallery/img4.jpg", "/gallery/img5.jpg", "/gallery/img6.jpg",
    "/gallery/img7.jpg", "/gallery/img8.jpg", "/gallery/img9.jpg",
    "/gallery/img10.jpg", "/gallery/img12.png",
  ],
];

export const GallerySection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Trigger re-render after refs are set
    setSwiperReady(true);
  }, []);

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Gallery <span className="text-primary">Preview</span>
        </h2>

        {/* Left Arrow */}
        <button
          ref={prevRef}
          className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 z-20 bg-primary hover:bg-primary/80 text-white rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          <svg width="24" height="24" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {swiperReady && (
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {imageGroups.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {group.map((src, i) => (
                    <div key={i} className="overflow-hidden rounded-lg shadow bg-card">
                      <img
                        src={src}
                        alt={`Gallery Image ${i + 1}`}
                        className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Right Arrow */}
        <button
          ref={nextRef}
          className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 z-20 bg-primary hover:bg-primary/80 text-white rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          <svg width="24" height="24" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
};
