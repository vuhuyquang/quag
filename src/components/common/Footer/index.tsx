import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 md:p-4 lg:p-6 text-center">
      <div className="container mx-auto">
        <p className="text-gray-600 text-sm md:text-base">
          &copy; {new Date().getFullYear()} vuhuyquang.vercel.app. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
