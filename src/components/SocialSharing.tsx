'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const SocialSharing = () => {


  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg font-sans">
              Chia Sẻ Niềm Vui với mình nhé
            </h2>
        

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-3xl p-10 border-4 border-primary/10 mx-auto max-w-xl animate-float">
              <h3 className="text-2xl font-semibold mb-6 text-primary font-sans">Thông Tin Liên Hệ</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-lg font-medium">
                  <PhoneIcon className="w-6 h-6 text-accent" />
                  <span>+84 796 371 747</span>
                </div>
                <div className="flex items-center gap-3 text-lg font-medium">
                  <EnvelopeIcon className="w-6 h-6 text-accent" />
                  <span>ngocanhhoang.0605@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-lg font-medium">
                  <MapPinIcon className="w-6 h-6 text-accent" />
                  <span>Đ. Nguyễn Trãi, P. Văn Quán, Nam Từ Liêm, Hà Nội</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSharing; 