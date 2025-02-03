import React, { useState, useEffect } from 'react';

const MysteryAlbumPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const revealMystery = () => {
    setRevealed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className={`
        relative 
        bg-black 
        text-white 
        p-8 
        rounded-xl 
        max-w-md 
        w-full 
        transform 
        transition-all 
        duration-700 
        ${revealed ? 'scale-110 shadow-2xl' : 'scale-100'}
      `}>
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        {!revealed ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-4">
              ALGO SE APROXIMA
            </h2>
            <p className="text-gray-300 mb-6 italic">
              "Entre linhas não escritas, sussurros não pronunciados..."
            </p>
            <button 
              onClick={revealMystery}
              className="
                bg-red-500 
                text-white 
                px-6 
                py-3 
                rounded-full 
                hover:bg-red-600 
                transition
                animate-pulse
              "
            >
              DESVENDAR FRAGMENTOS
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-500 mb-4">
              EM BREVE
            </h2>
            <p className="text-gray-300 mb-6">
              Um novo capítulo de ELEGIA está prestes a ser escrito.
            </p>
            <a 
              href="https://www.instagram.com/lc.elegia"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-red-500 
                text-white 
                px-6 
                py-3 
                rounded-full 
                hover:bg-red-600 
                transition
              "
            >
              SIGA NO INSTAGRAM
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MysteryAlbumPopup;