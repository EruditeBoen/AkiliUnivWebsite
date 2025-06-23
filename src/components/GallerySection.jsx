import React from "react";
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
    "/gallery/img10.jpg", "/gallery/img11.jpg", "/gallery/img12.jpg",
    "/gallery/img13.jpg", "/gallery/img14.jpg", "/gallery/img15.jpg",
    "/gallery/img16.jpg", "/gallery/img17.jpg", "/gallery/img18.jpg",
  ],
  // Second 18 images
  [
    "/gallery/img19.jpg", "/gallery/img20.jpg", "/gallery/img21.jpg",
    "/gallery/img22.jpg", "/gallery/img23.jpg", "/gallery/img24.jpg",
    "/gallery/img25.jpg", "/gallery/img26.jpg", "/gallery/img27.jpg",
    "/gallery/img28.jpg", "/gallery/img29.jpg", "/gallery/img30.jpg",
    "/gallery/img31.jpg", "/gallery/img32.jpg", "/gallery/img33.jpg",
    "/gallery/img34.jpg", "/gallery/img35.jpg", "/gallery/img36.jpg",
  ],
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Gallery <span className="text-primary">Preview</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
        >
          {imageGroups.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg shadow bg-card"
                  >
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
      </div>
    </section>
  );
};

