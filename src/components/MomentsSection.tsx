import { SITE_CONTENT } from '../config/content';
import { ImageWithFallback } from './ImageWithFallback';

export function MomentsSection() {
  const { moments } = SITE_CONTENT;

  return (
    <section className="relative py-14 px-5 max-w-md mx-auto sm:max-w-xl">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="font-serif-romantic text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight">
          {moments.title}
        </h2>
        <p className="font-handwriting text-xl text-stone-500 mt-1">
          {moments.subtitle}
        </p>
      </div>

      {/* Overlapping Polaroid Cards Container */}
      <div className="flex flex-col gap-10 sm:gap-12 items-center">
        {moments.items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative w-full max-w-[280px] sm:max-w-[320px] transition-all duration-300 ${
                isEven ? '-translate-x-1 sm:-translate-x-3' : 'translate-x-1 sm:translate-x-3'
              }`}
            >
              {/* Polaroid Card */}
              <div
                className={`polaroid-card p-3 pb-5 rounded-lg transform ${item.rotation} hover:rotate-0 hover:scale-[1.03] active:scale-[0.99] transition-transform duration-300 cursor-pointer`}
              >
                {/* Washi tape accent on top edge */}
                <div
                  className={`absolute -top-3.5 ${
                    isEven ? 'left-6 rotate-[-3deg]' : 'right-6 rotate-[2deg]'
                  } w-16 h-5 washi-tape rounded-xs pointer-events-none z-10`}
                  aria-hidden="true"
                />

                {/* Photo container */}
                <div className="w-full aspect-square overflow-hidden rounded-xs bg-stone-100">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                    fallbackLabel={`Moment ${index + 1}`}
                  />
                </div>

                {/* Handwritten caption */}
                <div className="pt-3 px-1 text-center">
                  <p className="font-handwriting text-xl sm:text-2xl text-stone-800 leading-snug">
                    "{item.caption}"
                  </p>
                  {item.dateOrPlace && (
                    <span className="text-[11px] text-stone-400 font-light block mt-0.5">
                      {item.dateOrPlace}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
