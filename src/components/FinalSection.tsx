import { useState, useRef } from 'react';
import { SITE_CONTENT } from '../config/content';
import { ImageWithFallback } from './ImageWithFallback';

export function FinalSection() {
  const { finalSection, photos } = SITE_CONTENT;
  const [isSecretRevealed, setIsSecretRevealed] = useState(false);
  const secretRef = useRef<HTMLDivElement>(null);

  const handleReveal = () => {
    setIsSecretRevealed(true);
    setTimeout(() => {
      secretRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  return (
    <section className="relative pt-12 pb-24 px-5 max-w-md mx-auto sm:max-w-xl text-center">
      {/* Final Major Couple Photo with Soft Glow Frame */}
      <div className="relative my-8 w-full max-w-[290px] sm:max-w-[340px] mx-auto aspect-[4/3]">
        {/* Soft glowing ambient aura */}
        <div 
          className="absolute -inset-4 bg-gradient-to-tr from-rose-200/60 via-amber-200/30 to-rose-300/40 rounded-[44px] blur-2xl animate-glow-pulse pointer-events-none"
          aria-hidden="true" 
        />

        {/* Polaroid/Gallery styled frame with soft inner shadow */}
        <div className="relative w-full h-full p-2.5 bg-white rounded-3xl shadow-[0_16px_36px_rgba(70,40,30,0.12)] border border-rose-100/70">
          <div className="w-full h-full overflow-hidden rounded-[20px] bg-stone-100">
            <ImageWithFallback
              src={photos.final}
              alt={photos.finalAlt}
              className="w-full h-full object-cover"
              fallbackLabel="Our Best Photo"
            />
          </div>
        </div>
      </div>

      {/* Quote Message */}
      <div className="space-y-2 mt-8 mb-6">
        <blockquote className="font-serif-romantic text-2xl sm:text-3xl italic text-stone-900 leading-snug">
          {finalSection.quote.map((line, idx) => (
            <span key={idx} className="block">
              "{line}"
            </span>
          ))}
        </blockquote>
      </div>

      {/* Boyfriend's Day Dedication Closing */}
      <div className="space-y-1 mb-10 text-stone-700 font-sans text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
        <p className="font-medium text-stone-800">
          {finalSection.closingMessage[0]}
        </p>
        <p className="text-stone-600">
          {finalSection.closingMessage[1]}
        </p>
      </div>

      {/* Interactive Surprise Button & Secret Card */}
      <div className="pt-2 flex flex-col items-center">
        {!isSecretRevealed ? (
          <button
            onClick={handleReveal}
            className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full bg-rose-600 text-white text-sm font-medium tracking-wide shadow-lg shadow-rose-600/25 hover:bg-rose-700 active:scale-95 transition-all duration-200 cursor-pointer min-h-[44px]"
            aria-label="Reveal final secret note"
          >
            <span>{finalSection.surpriseButton}</span>
            <span className="text-rose-200 group-hover:scale-125 transition-transform duration-200">
              💌
            </span>
          </button>
        ) : (
          <div 
            ref={secretRef}
            className="w-full max-w-sm mx-auto p-6 rounded-3xl bg-white border-2 border-rose-200 shadow-[0_16px_40px_rgba(200,90,90,0.15)] transition-all duration-500 animate-in fade-in zoom-in-95"
          >
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-lg">
              🔒❤️
            </div>
            <span className="font-handwriting text-rose-500 text-xl block">
              {finalSection.secretCard.tag}
            </span>
            <h3 className="font-serif-romantic text-xl sm:text-2xl font-semibold text-stone-900 mt-1 mb-2">
              {finalSection.secretCard.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {finalSection.secretCard.message}
            </p>
            <p className="font-handwriting text-lg text-rose-700/80 mt-3 pt-3 border-t border-rose-100">
              {finalSection.secretCard.subtext}
            </p>

            <button
              onClick={() => setIsSecretRevealed(false)}
              className="mt-4 text-xs text-stone-400 hover:text-stone-600 transition-colors underline cursor-pointer py-1"
            >
              fold note back up
            </button>
          </div>
        )}
      </div>

      {/* Quiet footer sign */}
      <footer className="mt-16 text-center">
        <p className="text-xs text-stone-400/80 font-light">
          made with all my love for you ♡
        </p>
      </footer>
    </section>
  );
}
