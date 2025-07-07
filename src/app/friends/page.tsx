// START EDIT
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const FriendsPage = () => {
  const router = useRouter();

  const handleCallClick = (id: string) => {
    router.push(`/friends/${id}`);
  };

  const friends = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' }
  ];

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in">Friends List</h1>
      <ul className="space-y-4">
        {friends.map(friend => (
          <li key={friend.id} className="bg-white shadow rounded p-4 flex justify-between items-center transition-transform transform hover:scale-105">
            <span className="text-lg font-medium">{friend.name}</span>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => handleCallClick(friend.id)}
            >
              Call Friend
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default FriendsPage;

// Tailwind animation class (add in globals.css or configure if needed):
// .animate-fade-in {
//   animation: fadeIn 1s ease-in-out;
// }
// @keyframes fadeIn {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
// END EDIT