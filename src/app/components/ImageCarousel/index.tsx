import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import styles from "./styles.module.scss";

interface Image {
  id: number;
  imageUrl: string;
}

const ImageCarousel = ({ images }: { images: Image[] }) => {
  const [isSwiping, setIsSwiping] = useState(false);

  const handleSwiperSlideChange = () => {
    setIsSwiping(true);
  };

  const handleSlideTransitionEnd = () => {
    setIsSwiping(false);
  };

  return (
    <Swiper
      speed={500}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      keyboard={true}
      simulateTouch={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      onSlideChange={handleSwiperSlideChange}
      onTransitionEnd={handleSlideTransitionEnd}
      allowTouchMove={!isSwiping}
      className={styles.mySwiper}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <img
            src={`http://localhost:5194${image.imageUrl}`}
            alt={`Image ${image.id}`}
            className={styles.carouselImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
