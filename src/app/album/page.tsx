import Link from 'next/link';
import { PhotoIcon, UserGroupIcon, UsersIcon, AcademicCapIcon, HomeIcon } from '@heroicons/react/24/outline';

const albumTopics = [
  {
    key: 'friends',
    label: 'Ảnh với bạn bè',
    icon: <UserGroupIcon className="w-10 h-10 text-[#a6192e]" />,
  },
  {
    key: 'family',
    label: 'Ảnh với gia đình',
    icon: <HomeIcon className="w-10 h-10 text-[#a6192e]" />,
  },
  {
    key: 'teachers',
    label: 'Ảnh với thầy cô',
    icon: <AcademicCapIcon className="w-10 h-10 text-[#a6192e]" />,
  },
  {
    key: 'memories',
    label: 'Khoảnh khắc đáng nhớ',
    icon: <PhotoIcon className="w-10 h-10 text-[#a6192e]" />,
  },
  {
    key: 'events',
    label: 'Ảnh sự kiện',
    icon: <UsersIcon className="w-10 h-10 text-[#a6192e]" />,
  },
];

export default function AlbumPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#a6192e] mb-10 text-center">Album Ảnh Kỷ Niệm</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {albumTopics.map((topic) => (
            <Link
              key={topic.key}
              href={`/album/${topic.key}`}
              className="flex flex-col items-center justify-center bg-white border-2 border-[#a6192e] rounded-xl shadow-md p-8 hover:bg-[#a6192e]/10 transition-colors group"
            >
              <div className="mb-4">{topic.icon}</div>
              <div className="text-xl font-semibold text-[#a6192e] group-hover:underline underline-offset-4 text-center">
                {topic.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 