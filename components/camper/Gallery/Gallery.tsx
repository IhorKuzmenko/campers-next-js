"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import css from "./Gallery.module.css";

import { CamperImage } from "@/types/camper";

interface GalleryProps {
  images: CamperImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.gallery}>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        navigation
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        className={css.mainSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.original}
              alt=""
              width={638}
              height={505}
              priority={index === 0}
              className={css.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        freeMode
        spaceBetween={12}
        slidesPerView={4}
        className={css.thumbSwiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.thumb}
              alt=""
              width={136}
              height={144}
              className={css.thumbImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}