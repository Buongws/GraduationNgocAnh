"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "../assets/069bf74e47d360ca4616e113e38add32.jpg";
import img2 from "../assets/70ca774ad1fb25035c804b5b3e9dab21.jpg";
import img12 from "../assets/IMG_2246.jpg";
import img3 from "../assets/b72362e68ec2b02f41b09a97dfa53c38.jpg";

import img4 from "../assets/Em5.jpg";
import img5 from "../assets/em.jpg";
import img6 from "../assets/em2.jpg";
import img7 from "../assets/em3.jpg";
import img8 from "../assets/em4.jpg";
import img9 from "../assets/Em5.jpg";
import img10 from "../assets/F651C632-222C-4BB7-AC7D-B0782178821F.jpg";
import img11 from "../assets/IMG_2248.jpg";

import img111 from "../assets/1.jpg";
import img222 from "../assets/2.jpg";
import img333 from "../assets/3.jpg";
import img444 from "../assets/4.jpg";
import img555 from "../assets/5.jpg";

import a from "../assets/12.jpg";
import b from "../assets/13.jpg";
import c from "../assets/04.jpg";
import d from "../assets/05.jpg";
import e from "../assets/06.jpg";
import f from "../assets/07.jpg";
import g from "../assets/08.jpg";
import h from "../assets/01.jpg";
import i from "../assets/02.jpg";

const images = [
  { id: 1, src: img1, alt: "Cat winking", aspect: "aspect-[3/4]" },
  { id: 2, src: img2, alt: "Two cats", aspect: "aspect-[3/4]" },
  { id: 3, src: img3, alt: "Yellow house", aspect: "aspect-[3/4]" },
  { id: 4, src: img4, alt: "White flowers", aspect: "aspect-[3/4]" },
  { id: 5, src: img5, alt: "Ducks swimming", aspect: "aspect-[3/4]" },
  { id: 6, src: img6, alt: "Sunset", aspect: "aspect-[3/4]" },
  { id: 7, src: img7, alt: "Tree and sky", aspect: "aspect-[3/4]" },
  { id: 8, src: img8, alt: "Tree and sky", aspect: "aspect-[3/4]]" },
  { id: 9, src: img9, alt: "Tree and sky", aspect: "aspect-[3/4]" },
  { id: 10, src: img10, alt: "Tree and sky", aspect: "aspect-[3/4]" },
  { id: 11, src: img11, alt: "Tree and sky", aspect: "aspect-[3/4]" },
  { id: 12, src: img12, alt: "Tree and sky", aspect: "aspect-[3/4]" },

  { id: 13, src: img111, alt: "Tree and sky", aspect: "aspect-[3/4]" },
  { id: 14, src: img222, alt: "Tree and sky", aspect: "aspect-[3/4]" },
  { id: 15, src: img333, alt: "Tree and sky", aspect: "aspect-[3/4]" },
  { id: 16, src: img444, alt: "Tree and sky", aspect: "aspect-[3/4]" },
  { id: 17, src: img555, alt: "Tree and sky", aspect: "aspect-[3/4]" },

  { id: 123, src: a, alt: "Ảnh 1" },
  { id: 24123, src: b, alt: "Ảnh 2" },
  { id: 3123, src: c, alt: "Ảnh 3" },
  { id: 4123, src: d, alt: "Ảnh 4" },
  { id: 5123, src: e, alt: "Ảnh 5" },
  { id: 6123, src: f, alt: "Ảnh 6" },
  { id: 74, src: g, alt: "Ảnh 7" },
  { id: 8123, src: h, alt: "Ảnh 8" },
  { id: 955, src: i, alt: "Ảnh 9" },
];

export default function PhotoGridGallery() {
  const [selected, setSelected] = useState<null | (typeof images)[0]>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg font-sans">
            Những kỉ niệm thanh xuân đi học của mình nè !
          </h2>
          <p className="text-gray-600 font-medium">
            Click vào để xem rõ hơn nhaaa
          </p>
        </div>
        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`w-full mb-4 rounded-2xl overflow-hidden shadow-3xl border-4 border-white bg-gradient-to-tr from-primary/10 to-accent/10 cursor-pointer group relative ${img.aspect} flex transition-transform duration-300`}
              onClick={() => setSelected(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-auto group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
                placeholder="blur"
              />
            </motion.div>
          ))}
        </div>
        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-2xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={800}
                height={1000}
                className="rounded-2xl w-full h-auto object-contain bg-white shadow-3xl"
              />
              <button
                className="absolute top-2 right-2 bg-white/80 rounded-full p-2 text-black hover:bg-white shadow-md transition-all duration-300"
                onClick={() => setSelected(null)}
                aria-label="Đóng"
              >
                &#10005;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
