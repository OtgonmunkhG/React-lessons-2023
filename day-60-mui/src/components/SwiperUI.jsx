import { Swiper, SwiperSlide } from "swiper/react";
import images from "../data/images";
import { useRef, useState } from "react";

const SwiperUI = function () {
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={image.url} alt="pretty images" width={700} height={900} />
      </SwiperSlide>
    );
  });
  return (
    <div>
      <h1>Dday-60 Swiper JS with React</h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        thumbs={{ swiper: thumbsSwiper }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
      >
        {slides}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={setThumbsSwiper}
      >
        {slides}
      </Swiper>
    </div>
  );
};
export { SwiperUI };
