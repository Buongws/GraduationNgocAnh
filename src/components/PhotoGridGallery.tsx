"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import images from "./photoGridImages";

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
