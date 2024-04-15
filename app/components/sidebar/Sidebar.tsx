import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-700 text-white p-5">
      <ul>
        <li className="mb-4">
          <Link href="/dashboard">
            <span className="text-xl hover:text-gray-300">Dashboard</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/files">
            <span className="text-xl hover:text-gray-300">Files Management</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/users">
            <span className="text-xl hover:text-gray-300">Users Management</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;