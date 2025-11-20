import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { IImage } from "../../../@types/global.types";

type IProps = {
  pkgImages: IImage[];
};

const ImageCarousel: React.FC<IProps> = ({ pkgImages }) => {
  const images = pkgImages ?? [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Slider {...settings}>
        {images.map(
          (
            image: IImage // ✅ Proper JSX expression
          ) => (
            <div className="h-[400px] flex justify-center items-center">
              <img
                src={image.path}
                alt={image.public_id}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
