import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css";
import commentList from "./comments.data";
import RevealOnScroll from "../RevealOnScroll";

const Comments = () => {
  return (
    <section id="comments" className="px-1 md:px-15 mt-10 bg-primary py-5">
      <RevealOnScroll direction="down">
        <h3 className="font-light text-2xl md:text-3xl text-secondary uppercase text-center">
          Depoimentos
        </h3>
      </RevealOnScroll>

      <RevealOnScroll direction="up">
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {commentList.map((comment) => (
              <SwiperSlide key={comment.author}>
                <div className="w-10/12 flex flex-col text-white bg-primary py-4">
                  <span className="italic text-justify border-t-1 border-white pt-3">
                    "{comment.description}"
                  </span>

                  <div className="flex flex-col items-end mt-14 text-md font-light border-y-1 py-2 border-white">
                    <span>{comment.author}</span>
                    <span className="text-xs">{comment.source}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Comments;
