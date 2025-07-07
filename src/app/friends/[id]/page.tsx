import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { friends } from '@/utils/friends';

export default function FriendDetails({ params }: { params: { id: string } }) {
  const friend = friends.find(f => f.id === params.id);
  const router = useRouter();

  if (!friend) return <div>Friend not found</div>;

  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-8 bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={() => router.back()}
      >
        ← Back
      </motion.button>

      <motion.div
        className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center gap-6 mb-6">
          <img
            src={friend.avatar}
            alt={friend.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{friend.name}</h1>
            <p className="text-gray-600 mt-2">{friend.email}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Interests</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {friend.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}