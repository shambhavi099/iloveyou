import { SITE_CONTENT } from '../config/content';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroSectionProps {
  onScrollDown: () => void;
}

export function HeroSection({ onScrollDown }: HeroSectionProps) {
  const { hero, photos } = SITE_CONTENT;

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-between px-5 pt-12 pb-10 text-center max-w-md mx-auto sm:max-w-xl md:max-w-2xl">
      {/* Top Header Text */}
      <div className="space-y-3 z-10 w-full">
        {/* Small greeting tag */}
        <p className="font-handwriting text-2xl sm:text-3xl text-rose-700/80 tracking-wide inline-block">
          {hero.topTagline}
        </p>

        {/* Large romantic heading */}
        <h1 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-[1.2] text-balance">
          {hero.mainHeading}
        </h1>

        {/* Sub-line */}
        <p className="font-sans text-sm sm:text-base text-stone-600/90 font-light max-w-md mx-auto leading-relaxed pt-1 text-balance">
          {hero.subHeading}
        </p>
      </div>

      {/* Music */}
      <audio id="loveSong" src="/public/love-song.mp3" loop />

      <button
        onClick={() => {
          const audio = document.getElementById("loveSong") as HTMLAudioElement;
          audio.play();
        }}
      >
        ♡ Play our song
      </button>

      {/* Hero Photo with Organic Frame & Soft Glow */}
      <div className="relative my-6 sm:my-8 w-full max-w-[290px] sm:max-w-[340px] aspect-[4/3] flex items-center justify-center">
        {/* Soft atmospheric ambient glow */}
        <div 
          className="absolute -inset-3 bg-gradient-to-tr from-rose-200/50 via-amber-100/40 to-rose-100/60 rounded-[40px] blur-2xl animate-glow-pulse pointer-events-none"
          aria-hidden="true" 
        />

        {/* Organic rounded frame container */}
        <div className="relative w-full h-full p-2 bg-white/80 backdrop-blur-xs rounded-[32px] sm:rounded-[38px] shadow-[0_12px_32px_-8px_rgba(70,40,30,0.12)] border border-rose-100/60 transition-transform duration-500 hover:scale-[1.02] animate-gentle-float">
          <div className="w-full h-full overflow-hidden rounded-[26px] sm:rounded-[32px] bg-stone-100">
            <ImageWithFallback
              src={photos.hero}
              alt={photos.heroAlt}
              className="w-full h-full object-cover"
              fallbackLabel="Our Photo Together"
            />
          </div>

          {/* Tiny subtle corner heart accent */}
          <div 
            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white/95 shadow-md border border-rose-100 flex items-center justify-center text-rose-500"
            aria-hidden="true"
          >
            <span className="text-xs">♡</span>
          </div>
        </div>
      </div>

      {/* Call to action button */}
      <div className="pt-2 z-10 w-full flex flex-col items-center">
        <button
          onClick={onScrollDown}
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-stone-50 text-sm font-medium tracking-wide shadow-md shadow-stone-900/10 hover:bg-stone-800 active:scale-95 transition-all duration-200 cursor-pointer min-h-[44px]"
          aria-label="Scroll to love message"
        >
          <span>{hero.buttonText}</span>
          <svg 
            className="w-4 h-4 text-rose-300 transition-transform duration-300 group-hover:translate-y-0.5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <span className="text-[11px] font-handwriting text-stone-400 mt-2 tracking-wider">
          scroll or tap to open
        </span>
      </div>
    </section>
  );
}
