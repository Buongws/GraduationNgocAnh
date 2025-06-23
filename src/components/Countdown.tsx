'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your graduation date here
  const graduationDate = new Date('2025-06-29T15:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = graduationDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Ngày', value: timeLeft.days },
    { label: 'Giờ', value: timeLeft.hours },
    { label: 'Phút', value: timeLeft.minutes },
    { label: 'Giây', value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg font-sans">
            Lễ Tốt Nghiệp Sắp Diễn Ra 
          </h2>
          <p className="text-xl mb-12 font-medium">
            Hãy cùng chờ đón khoảnh khắc đặc biệt này với mình nhé
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {timeBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-3xl flex flex-col items-center animate-pulse-slow"
              >
                <div className="text-5xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg font-sans animate-float">
                  {block.value.toString().padStart(2, '0')}
                </div>
                <div className="text-base md:text-lg text-white/90 font-medium">
                  {block.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-lg font-medium">
            <p>Địa điểm: Đại học Hà Nội, tòa nhà A1</p>
            <p>Thời gian: 29/06/2025 - 15:00</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown; 