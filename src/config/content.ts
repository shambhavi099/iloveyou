/**
 * ============================================================================
 * 💌 BOYFRIEND'S DAY SURPRISE — EDITABLE CONTENT CONFIGURATION
 * ============================================================================
 * 
 * Hey! You can easily customize ALL the text and photos on this page right here.
 * 
 * 📸 HOW TO REPLACE PHOTOS:
 * 1. Place your own image files in the `/public` folder (e.g. your_photo1.jpg)
 * 2. Update the file paths below to point to your files:
 *    - hero: '/your_photo1.jpg'
 *    - moment1: '/your_photo2.jpg'
 *    - moment2: '/your_photo3.jpg'
 *    - final: '/your_photo4.jpg'
 * 
 * ✏️ HOW TO EDIT TEXT:
 * - Simply change any of the text strings inside the quotes below!
 * ============================================================================
 */

export interface LoveNoteConfig {
  photos: {
    hero: string;
    heroAlt: string;
    moment1: string;
    moment1Alt: string;
    moment1Caption: string;
    moment2: string;
    moment2Alt: string;
    moment2Caption: string;
    final: string;
    finalAlt: string;
  };
  hero: {
    topTagline: string;
    mainHeading: string;
    subHeading: string;
    buttonText: string;
  };
  loveNote: {
    heading: string;
    paragraphs: string[];
    signOff: string;
  };
  moments: {
    title: string;
    subtitle: string;
    items: Array<{
      image: string;
      caption: string;
      dateOrPlace?: string;
      rotation: string; // CSS rotation for natural polaroid tilt
    }>;
  };
  thingsILove: {
    heading: string;
    subheading: string;
    items: string[];
  };
  finalSection: {
    quote: string[];
    closingMessage: string[];
    surpriseButton: string;
    secretCard: {
      tag: string;
      title: string;
      message: string;
      subtext: string;
    };
  };
}

export const SITE_CONTENT: LoveNoteConfig = {
  // 📸 PHOTO PATHS (Drop your photos into /public and update names here)
  photos: {
    hero: '/photo1.jpg',
    heroAlt: 'A tender moment together at golden hour',
    moment1: '/photo2.jpg',
    moment1Alt: 'Laughing together on a cozy coffee date',
    moment1Caption: 'this one makes me smile every single time',
    moment2: '/photo3.jpg',
    moment2Alt: 'Holding hands during an evening walk',
    moment2Caption: 'my favourite kind of chaos with you',
    final: '/photo4.jpg',
    finalAlt: 'Holding each other close under warm lights',
  },

  // 1️⃣ HERO / OPENING SECTION
  hero: {
    topTagline: 'for my favourite person ♡',
    mainHeading: "Happy Boyfriend's Day, my love",
    subHeading: 'Somehow, life became a little softer after you came into it.',
    buttonText: 'come a little closer ♡',
  },

  // 2️⃣ LITTLE LOVE MESSAGE (Handwritten letter feel)
  loveNote: {
    heading: 'just a little something for you...',
    paragraphs: [
      "I was thinking about you today, and I wanted to make this quiet little corner just to remind you how much you mean to me.",
      "Thank you for being my safe space, my biggest comfort, and the person who can turn the simplest, most ordinary day into my absolute favourite memory.",
      "I love the quiet moments just as much as the fun ones—sitting beside you, catching you smiling at your phone, hearing your laugh, and knowing you're mine.",
      "Life is just better, warmer, and so much sweeter with you in it.",
    ],
    signOff: 'forever your biggest fan ♡',
  },

  // 3️⃣ OUR LITTLE MOMENTS (Polaroids)
  moments: {
    title: 'our little moments',
    subtitle: 'the glimpses of us that I carry everywhere with me',
    items: [
      {
        image: '/photo2.jpg',
        caption: 'this one makes me smile every time',
        dateOrPlace: 'a sunny afternoon',
        rotation: '-rotate-2',
      },
      {
        image: '/photo3.jpg',
        caption: 'my favourite kind of chaos',
        dateOrPlace: 'just you and me',
        rotation: 'rotate-3',
      },
    ],
  },

  // 4️⃣ THINGS I LOVE ABOUT YOU
  thingsILove: {
    heading: 'things I love about you',
    subheading: 'just a handful out of a million reasons',
    items: [
      'the way you make me laugh until my cheeks hurt',
      'the way you listen, even when I ramble endlessly',
      'your stupid little smile that always ruins my serious face',
      'how incredibly safe and peaceful I feel with you',
      'the quiet, gentle way you care for me',
      'how you somehow make even completely ordinary days feel special',
    ],
  },

  // 5️⃣ FINAL PHOTO & 6️⃣ FINAL INTERACTION
  finalSection: {
    quote: [
      'if I had to choose again,',
      "I'd still choose you.",
    ],
    closingMessage: [
      "Happy Boyfriend's Day, love.",
      "Here's to us, and all the little moments still waiting for us. ❤️",
    ],
    surpriseButton: 'one more thing ♡',
    secretCard: {
      tag: 'p.s.',
      title: "You're stuck with me. Sorry. ❤️",
      message: "There are no returns, no refunds, and no exchanges.",
      subtext: 'I love you so, so much.',
    },
  },
};
