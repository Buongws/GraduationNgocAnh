"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhotoGallery from "@/components/PhotoGallery";
import Countdown from "@/components/Countdown";
import SocialSharing from "@/components/SocialSharing";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

import Mainsection from "../assets/IMG_2247.jpg";
import background from "../assets/IMG_2250.jpg";
import PhotoGridGallery from "@/components/PhotoGridGallery";
import Link from "next/link";

const chineseWishes = [
  "前程似锦 - Tiền đồ rạng rỡ",
  "学业有成 - Học hành thành đạt",
  "梦想成真 - Ước mơ thành hiện thực",
  "未来可期 - Tương lai tươi sáng",
];

const memorableMoments = [
  {
    title: "Ngày đầu tiên",
    description: "Những bước chân đầu tiên vào giảng đường",
    image: "/assets/moment1.jpg",
  },
  {
    title: "Những người bạn",
    description: "Những kỷ niệm đẹp cùng bạn bè",
    image: "/assets/moment2.jpg",
  },
  {
    title: "Thành tích",
    description: "Những nỗ lực và thành tựu đạt được",
    image: "/assets/moment3.jpg",
  },
];

const firebaseConfig = {
  apiKey: "AIzaSyDs9vVdzqDYMrGKHJyFuvrpgG4_ZobgJHY",
  authDomain: "totnghiepngocanh.firebaseapp.com",
  projectId: "totnghiepngocanh",
  storageBucket: "totnghiepngocanh.firebasestorage.app",
  messagingSenderId: "844301953198",
  appId: "1:844301953198:web:01a831dc5d42a5990ae53f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [wishIndex, setWishIndex] = useState(0);
  const dimensions = useWindowSize();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setWishIndex((prev) => (prev + 1) % chineseWishes.length);
    }, 5000);

    // Auto hide confetti after 3 minutes
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 300000);

    return () => {
      clearInterval(interval);
      clearTimeout(confettiTimer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      await addDoc(collection(db, "messages"), {
        name,
        message,
        createdAt: new Date().toISOString(),
      });
      setSuccess(true);
      setName("");
      setMessage("");
    } catch (err) {
      setError("Gửi lời chúc thất bại. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {showConfetti && (
          <Confetti
            width={dimensions.width}
            height={dimensions.height * 2}
            recycle={true}
            numberOfPieces={200}
            gravity={0.15}
            initialVelocityY={15}
            wind={0.05}
            colors={["#a6192e", "#ffd700", "#ff69b4", "#87ceeb"]}
            onConfettiComplete={() => setShowConfetti(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        )}
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left column - Text content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#a6192e]">
                  Chúc mừng Hoàng Ngọc Anh tốt nghiệp
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700">
                  I’m about to embark on a new journey
                </p>
                <div className="mb-8 text-xl md:text-2xl text-[#a6192e] font-semibold h-12">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wishIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="block"
                    >
                      {chineseWishes[wishIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#a6192e] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#800000] transition-colors"
                  onClick={() => {
                    const el = document.getElementById("form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Gửi Lời Chúc
                </motion.button>
              </motion.div>
            </div>

            {/* Right column - Image */}
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square md:aspect-auto rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src={Mainsection}
                  alt="Hoàng Ngọc Anh"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#a6192e]/10 to-transparent" />

      {/* About Section */}
      <div className="container mx-auto px-4 relative z-10 about-section"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-[#a6192e] mb-8">
            About Me !!!
          </h2>
          <div className="aspect-square max-w-md mx-auto mb-8 bg-gray-200 rounded-lg border-2 border-[#a6192e]">
            <Image
              src={background}
              alt="Background Image"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-700 mb-8 text-left">
              Xin chào, mình là Hoàng Ngọc Anh, một cô gái tràn đầy năng lượng
              và đam mê với ngôn ngữ và văn hóa Trung Quốc. Sau 4 năm miệt mài
              học tập tại Đại học Hà Nội, mình đã chính thức trở thành cử nhân
              ngành Ngôn ngữ Trung Quốc vào ngày 29/06/2025, trong buổi lễ tốt
              nghiệp đáng nhớ từ 15h30 đến 17h30. <br />
            </p>
            <p className="text-lg text-gray-700 mb-8 text-left">
              Bên cạnh việc học, mình cũng yêu thích khám phá thế giới qua sách,
              âm nhạc, và những chuyến đi du lịch. Mình tin rằng mỗi trải nghiệm
              đều là một cơ hội để trưởng thành và mở rộng tầm nhìn. Với tấm
              bằng cử nhân trong tay, mình đang sẵn sàng bước vào một hành trình
              mới, mang theo đam mê và nhiệt huyết để chinh phục những mục tiêu
              phía trước, đặc biệt là là trong lĩnh vực giảng dạy mình tin rằng
              với hành trang kiến thức mình sẽ là 1 cô giáo thật tốt. <br />
            </p>
            <p className="text-lg text-gray-700 mb-8 text-left">
              Cảm ơn gia đình, thầy cô, bạn bè, và tất cả những người đã đồng
              hành cùng mình trong suốt chặng đường này. Buổi lễ tốt nghiệp
              không chỉ là cột mốc đánh dấu sự trưởng thành mà còn là dịp để
              mình tri ân và chia sẻ niềm vui với mọi người. Hãy cùng mình lưu
              giữ khoảnh khắc đáng nhớ này nhé!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Message Board Section */}
      <section className="py-20 bg-white border-t border-[#a6192e]/20">
        <div className="container mx-auto px-4">
          <Link
            href="#form"
            className="text-4xl font-bold text-[#a6192e] text-center mb-12"
          >
            Gửi Lời Chúc
          </Link>
          <div id="form" className="max-w-2xl mx-auto">
            <form
              className="space-y-6 border-2 border-[#a6192e] rounded-xl p-8 bg-white shadow-lg"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#a6192e]"
                >
                  Tên của bạn
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-2 border-[#a6192e] shadow-sm focus:border-[#a6192e] focus:ring-[#a6192e] px-3 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#a6192e]"
                >
                  Lời chúc
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-2 border-[#a6192e] shadow-sm focus:border-[#a6192e] focus:ring-[#a6192e] px-3 py-2"
                />
              </div>
              {error && <div className="text-red-600 text-center">{error}</div>}
              {success && (
                <div className="text-green-600 text-center">
                  Gửi lời chúc thành công!
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-[#a6192e] text-white font-bold py-3 px-6 rounded-md hover:bg-[#800000] transition-colors disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Đang gửi..." : "Gửi Lời Chúc"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      <PhotoGridGallery />
      {/* Countdown Section */}
      <Countdown />

      {/* Social Sharing Section */}
      <SocialSharing />

      {/* Footer */}
      <footer className="bg-[#a6192e] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            © 2025 Chúc Mừng Tốt Nghiệp Công Chúa không nhăn nhó của anh ❤️{" "}
          </p>
          <p className="text-white/80">
            Được tạo với ❤️ để chúc mừng khoảnh khắc đặc biệt này
          </p>
        </div>
      </footer>
    </main>
  );
}
