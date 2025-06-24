"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image";

import friend1 from "../assets/banbe.jpg";
import friend2 from "../assets/banbe1.jpg";
import friend3 from "../assets/banbe2.jpg";
import jj from "../assets/lop4.jpg";
import friend4 from "../assets/banbe3.jpg";
import friend5 from "../assets/banbe4.jpg";
import friend6 from "../assets/banbe5.jpg";
import friend7 from "../assets/banbe6.jpg";
import e from "../assets/06.jpg";
import h from "../assets/09.jpg";


const PhotoGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
  };

  // Placeholder for images - replace with actual images
  const images = [
    { id: 6, src: friend6, alt: "Graduation moment 6" },
    { id: 3, src: friend3, alt: "Graduation moment 3" },
    { id: 5, src: friend5, alt: "Graduation moment 5" },
    { id: 1, src: friend1, alt: "Graduation moment 1" },
    { id: 2, src: friend2, alt: "Graduation moment 2" },
    { id: 4, src: friend4, alt: "Graduation moment 4" },
    { id: 7, src: friend7, alt: "Graduation moment 7" },
    { id: 8, src: e, alt: "Graduation moment 7" },
    { id: 9, src: h, alt: "Graduation moment 7" },
    { id: 10, src: jj, alt: "Graduation moment 7" },


  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg font-sans">
            The Best memories with Friends{" "}
          </h2>
          <p className="text-gray-600 font-medium">
            Nhừng người em , người bạn đã cùng mình trải qua những năm tháng
            thanh xuân tươi đẹp ❤️❤️❤️
          </p>
        </motion.div>

        <div className="max-w mx-auto">
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image.id} className="px-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-3xl border-4 border-white bg-gradient-to-tr from-primary/10 to-accent/10 transition-transform duration-300 group"
                >
                  <div className="w-full h-full bg-gray-200 animate-pulse">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
