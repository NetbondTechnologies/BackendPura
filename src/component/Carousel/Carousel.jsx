import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "./styles.css";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      className="flex items-center justify-center w-full h-[30vh] lg:h-[90vh]"
    >
      <SwiperSlide>
        <img
          className="w-full"
          src="https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww="
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://lh7-us.googleusercontent.com/18-UMH2EypsHUXNm5Z5yFe_BiBu76yKgaQNGpOO_w_9atZc6R1uwdG0imc51ueQTUwUCOJyG8Lqlbu--PeoUQGppYX16isumCocOR254QFo93e93K0B0NDykCH0ZBgqi38-ghvmaODzp2FKnF1P1rY4"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://media.istockphoto.com/id/672126138/photo/indian-traditional-gold-necklace.jpg?s=612x612&w=0&k=20&c=Ws53gwkpu1Yc3_DcRzkilI9h3iaS9cMx20yDj-qXIaM="
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://media.istockphoto.com/id/1133525210/photo/pair-of-fancy-golden-designer-earrings-closeup-macro-image-on-red-background.jpg?s=612x612&w=0&k=20&c=ZUknXtyeMhsS9Tdd2nRt8DkOTHc-6tmeG-KdTV_ODLU="
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
