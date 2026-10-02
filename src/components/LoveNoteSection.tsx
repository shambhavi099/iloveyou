import { SITE_CONTENT } from '../config/content';

export function LoveNoteSection() {
  const { loveNote } = SITE_CONTENT;

  return (
    <section 
      id="love-message" 
      className="relative py-16 px-5 max-w-md mx-auto sm:max-w-xl scroll-mt-6"
    >
      {/* Decorative stationery card */}
      <div className="relative bg-white/90 backdrop-blur-xs rounded-3xl p-7 sm:p-9 shadow-[0_8px_30px_rgba(70,40,30,0.06)] border border-rose-100/70">
        {/* Subtle decorative tape strip at top */}
        <div 
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 washi-tape rounded-xs rotate-[-1deg]"
          aria-hidden="true" 
        />

        {/* Section Heading */}
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">
            a private letter
          </span>
          <h2 className="font-handwriting text-3xl sm:text-4xl text-rose-800/90 mt-1">
            {loveNote.heading}
          </h2>
        </div>

        {/* Note Paragraphs */}
        <div className="space-y-4 text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
          {loveNote.paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className="text-stone-700/95 font-normal first-letter:text-xl first-letter:font-serif-romantic"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Delicate handwritten sign-off */}
        <div className="mt-8 pt-4 border-t border-rose-100/50 flex flex-col items-end">
          <p className="font-handwriting text-2xl text-rose-700/90 tracking-wide">
            {loveNote.signOff}
          </p>
        </div>
      </div>
    </section>
  );
}
