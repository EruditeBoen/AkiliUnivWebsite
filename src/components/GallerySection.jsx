import { useState, useRef } from "react";
import { LightboxModal } from "./LightboxModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const galleryItems = [
  // Replace with your actual image/video file paths in /public/gallery
  { type: "image", src: "/gallery/img1.jpg" },
  { type: "image", src: "/gallery/img2.jpg" },
  { type: "image", src: "/gallery/img3.jpg" },
  { type: "image", src: "/gallery/img4.jpg" },
  { type: "image", src: "/gallery/img5.jpg" },
  { type: "image", src: "/gallery/img6.jpg" },
  { type: "image", src: "/gallery/img7.jpg" },
  { type: "image", src: "/gallery/img8.jpg" },
  { type: "image", src: "/gallery/img9.jpg" },
  { type: "image", src: "/gallery/img10.jpg" },
  { type: "image", src: "/gallery/img11.png" },
  { type: "video", src: "/gallery/StudentSuccess.mp4", thumbnail: "/gallery/img11.png" },
  // Add more items here...
];

export const GallerySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ type: "image", src: "" });
  const swiperRef = useRef(null);

  const handleOpenModal = (type, src) => {
    setModalContent({ type, src });
    setModalOpen(true);
  };

  const handlePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Image <span className="text-primary"> Gallery </span>
        </h2>

        <div className="relative flex items-center">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="z-20 absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-primary/80 transition"
            style={{ left: "-2.5rem" }}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full px-4">
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{ clickable: true }}
              navigation={false}
              className="swiper-container"
            >
              {galleryItems.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="cursor-pointer overflow-hidden rounded-md shadow hover:shadow-lg transition-transform"
                    onClick={() => handleOpenModal(item.type, item.src)}
                  >
                    <img
                      src={item.thumbnail || item.src}
                      alt="Gallery Item"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next"
            className="z-20 absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-primary/80 transition"
            style={{ right: "-2.5rem" }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <LightboxModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          content={modalContent}
        />
      </div>
    </section>
  );
};

