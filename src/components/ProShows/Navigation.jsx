import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full p-5 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex gap-8 text-white/80 hover:text-white transition-colors">
        <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Contacts</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Info</a>
      </div>
    </nav>
  );
}