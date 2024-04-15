import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-700 text-white p-5">
      <ul>
        <li className="mb-4">
          <Link href="/dashboard">
            <a className="text-xl hover:text-gray-300">Dashboard</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/files">
            <a className="text-xl hover:text-gray-300">Files Management</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/users">
            <a className="text-xl hover:text-gray-300">Users Management</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;