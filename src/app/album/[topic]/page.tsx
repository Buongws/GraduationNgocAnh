'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const topicData: Record<string, { label: string; images: { src: string; alt: string }[] }> = {
  friends: {
    label: 'Ảnh với bạn bè',
    images: [
      { src: '/friends1.jpg', alt: 'Bạn bè 1' },
      { src: '/friends2.jpg', alt: 'Bạn bè 2' },
      { src: '/friends3.jpg', alt: 'Bạn bè 3' },
    ],
  },
  family: {
    label: 'Ảnh với gia đình',
    images: [
      { src: '/family1.jpg', alt: 'Gia đình 1' },
      { src: '/family2.jpg', alt: 'Gia đình 2' },
    ],
  },
  teachers: {
    label: 'Ảnh với thầy cô',
    images: [
      { src: '/teachers1.jpg', alt: 'Thầy cô 1' },
      { src: '/teachers2.jpg', alt: 'Thầy cô 2' },
    ],
  },
  memories: {
    label: 'Khoảnh khắc đáng nhớ',
    images: [
      { src: '/memories1.jpg', alt: 'Khoảnh khắc 1' },
      { src: '/memories2.jpg', alt: 'Khoảnh khắc 2' },
    ],
  },
  events: {
    label: 'Ảnh sự kiện',
    images: [
      { src: '/events1.jpg', alt: 'Sự kiện 1' },
      { src: '/events2.jpg', alt: 'Sự kiện 2' },
    ],
  },
};

interface Props {
  params: { topic: string };
}

export default function AlbumTopicPage({ params }: Props) {
  const topic = topicData[params.topic];
  if (!topic) return notFound();

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="list-reset flex text-[#a6192e] gap-2">
            <li>
              <Link href="/album" className="hover:underline font-semibold">Album</Link>
            </li>
            <li>/</li>
            <li className="font-bold">{topic.label}</li>
          </ol>
        </nav>
        {/* Nút quay lại */}
        <div className="mb-8">
          <Link
            href="/album"
            className="inline-block bg-[#a6192e] text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-[#800000] transition-colors"
          >
            ← Quay lại Album
          </Link>
        </div>
        {/* Hiệu ứng chuyển trang */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-[#a6192e] mb-10 text-center">{topic.label}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {topic.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden border-2 border-[#a6192e] flex items-center justify-center"
              >
                <Image src={img.src} alt={img.alt} width={400} height={300} className="object-cover w-full h-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 