"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

export default function PoliceSlider() {
  return (
    <Splide
      aria-label="お気に入りの写真"
      options={{
        type: "loop",
        perPage: 1,
        arrows: true,
        pagination: true,
        height: "auto",
        autoplay: true,
        interval: 3000,
      }}
    >
      <SplideSlide>
        <img
          src="/police_slider1.jpg"
          alt="Image 1"
          className="max-h-full max-w-full mx-auto block rounded-xl object-cover"
          style={{ width: "500px", height: "550px" }}
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/police_slider2.jpg"
          alt="Image 1"
          className="max-h-full max-w-full mx-auto block rounded-xl object-cover"
          style={{ width: "500px", height: "550px" }}
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/police_slider3.jpg"
          alt="Image 1"
          className="max-h-full max-w-full mx-auto block rounded-xl object-cover"
          style={{ width: "500px", height: "550px" }}
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/police_slider4.png"
          alt="Image 1"
          className="max-h-full max-w-full mx-auto block rounded-xl object-cover"
          style={{ width: "500px", height: "550px" }}
        />
      </SplideSlide>
    </Splide>
  );
}
