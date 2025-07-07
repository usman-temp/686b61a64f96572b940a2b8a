import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FriendCard({ friend }: { friend: any }) {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className="flex items-center gap-4">
        <img
          src={friend.avatar}
          alt={friend.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{friend.name}</h2>
          <p className="text-gray-600 text-sm">{friend.location}</p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <Link href={`/friends/${friend.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            View Profile
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}