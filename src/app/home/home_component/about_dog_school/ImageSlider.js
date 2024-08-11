import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

export default function ImageSlider() {
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
          src="/dogrun.png"
          alt="Image 1"
          className="max-h-full max-w-full mx-auto block rounded-xl object-cover"
          style={{ width: "650px", height: "450px" }}
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/dogrun3.jpeg"
          alt="Image 1"
          className="max-h-full max-w-full mx-auto block rounded-xl object-cover"
          style={{ width: "650px", height: "450px" }}
        />
      </SplideSlide>
    </Splide>
  );
}
