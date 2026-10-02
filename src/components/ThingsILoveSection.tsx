import { SITE_CONTENT } from '../config/content';

export function ThingsILoveSection() {
  const { thingsILove } = SITE_CONTENT;

  return (
    <section className="relative py-16 px-5 max-w-md mx-auto sm:max-w-xl">
      {/* Section Header */}
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">
          little reminders
        </span>
        <h2 className="font-serif-romantic text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight mt-1">
          {thingsILove.heading}
        </h2>
        <p className="font-handwriting text-xl text-rose-700/80 mt-1">
          {thingsILove.subheading}
        </p>
      </div>

      {/* List of Reasons */}
      <div className="space-y-3">
        {thingsILove.items.map((item, index) => (
          <div
            key={index}
            className="group relative flex items-start gap-3.5 p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-rose-100/50 shadow-xs transition-all duration-200 hover:bg-white hover:border-rose-200/80 hover:translate-x-1"
          >
            {/* Subtle gentle heart index */}
            <div 
              className="shrink-0 w-6 h-6 rounded-full bg-rose-50 text-rose-500/80 flex items-center justify-center text-xs mt-0.5 group-hover:bg-rose-100/80 group-hover:text-rose-600 transition-colors"
              aria-hidden="true"
            >
              ♡
            </div>

            {/* Reason text */}
            <p className="text-sm sm:text-base text-stone-800 font-normal leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
