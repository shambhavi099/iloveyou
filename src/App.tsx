import { AmbientParticles } from './components/AmbientParticles';
import { HeroSection } from './components/HeroSection';
import { LoveNoteSection } from './components/LoveNoteSection';
import { MomentsSection } from './components/MomentsSection';
import { ThingsILoveSection } from './components/ThingsILoveSection';
import { FinalSection } from './components/FinalSection';

export default function App() {
  const scrollToLoveMessage = () => {
    const el = document.getElementById('love-message');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="relative min-h-screen bg-soft-grain overflow-x-hidden selection:bg-rose-200 selection:text-stone-900">
      {/* Subtle floating ambient atmosphere (lightweight particles) */}
      <AmbientParticles />

      {/* Main Container - Mobile First Focus */}
      <div className="relative z-10 w-full max-w-lg mx-auto md:max-w-2xl">
        {/* 1. Hero / Opening Section */}
        <HeroSection onScrollDown={scrollToLoveMessage} />

        {/* Quiet divider */}
        <div className="flex items-center justify-center my-2" aria-hidden="true">
          <span className="text-rose-200/80 text-sm tracking-widest">· ♡ ·</span>
        </div>

        {/* 2. Little Love Message Section */}
        <LoveNoteSection />

        {/* Quiet divider */}
        <div className="flex items-center justify-center my-2" aria-hidden="true">
          <span className="text-rose-200/80 text-sm tracking-widest">· ♡ ·</span>
        </div>

        {/* 3. Our Little Moments (Polaroids) */}
        <MomentsSection />

        {/* Quiet divider */}
        <div className="flex items-center justify-center my-2" aria-hidden="true">
          <span className="text-rose-200/80 text-sm tracking-widest">· ♡ ·</span>
        </div>

        {/* 4. Things I Love About You */}
        <ThingsILoveSection />

        {/* Quiet divider */}
        <div className="flex items-center justify-center my-2" aria-hidden="true">
          <span className="text-rose-200/80 text-sm tracking-widest">· ♡ ·</span>
        </div>

        {/* 5. Final Photo + Message & 6. Hidden Surprise Interaction */}
        <FinalSection />
      </div>
    </main>
  );
}
