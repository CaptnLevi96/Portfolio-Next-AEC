'use client';

import Link from 'next/link';

export default function EnglishPage() {
  return (
    <div className="min-h-screen bg-[#E6FFE6] flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-[#1a472a] mb-6">
        English Version - Test Page
      </h1>
      
      <p className="text-xl text-gray-700 mb-8 max-w-2xl">
        This is a test page for the English version of the portfolio. 
        The full English version will be available soon.
      </p>
      
      <Link 
        href="/"
        className="bg-[#40c057] text-white px-8 py-3 rounded-full hover:bg-[#2b8a3e] transition-all hover:shadow-lg flex items-center space-x-2"
      >
        <span>🇫🇷</span>
        <span>Return to French Version</span>
      </Link>
    </div>
  );
}