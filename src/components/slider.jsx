import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

import Card from "./card";
import { sliderData } from "../data/dataCard";

function Slider({ title }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="max-w-400 mx-auto px-6 md:px-20 mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h2>
        
        <div className="hidden min-[745px]:flex gap-3">
          <button 
            onClick={() => swiperRef?.slidePrev()} 
            className="p-2 border border-gray-300 rounded-full hover:shadow-md active:scale-95 transition-all"
          >
            <ChevronLeft size={16} strokeWidth={3} />
          </button>
          <button 
            onClick={() => swiperRef?.slideNext()} 
            className="p-2 border border-gray-300 rounded-full hover:shadow-md active:scale-95 transition-all"
          >
            <ChevronRight size={16} strokeWidth={3} />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        modules={[Mousewheel, FreeMode]}
        spaceBetween={16}
        slidesPerView={1.2}
        mousewheel={{ forceToAxis: true }}
        freeMode={{ enabled: true, sticky: true }}
        breakpoints={{
            480: { slidesPerView: 2.2, slidesPerGroup: 2 },
            745: { slidesPerView: 3, slidesPerGroup: 3, simulateTouch: false },
            950: { slidesPerView: 4, slidesPerGroup: 4 },
            1130: { slidesPerView: 5, slidesPerGroup: 5 },
            1440: { slidesPerView: 7, slidesPerGroup: 2 },
        }}
        className="overflow-visible"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <Card {...item} />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <Card 
            isSeeAll 
            img={[sliderData[0].img, sliderData[1].img]}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;