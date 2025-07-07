import { motion } from 'framer-motion';
import FriendCard from '@/components/FriendCard';
import { friends } from '@/utils/friends';

export default function FriendsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        My Friends
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </motion.div>
    </div>
  );
}