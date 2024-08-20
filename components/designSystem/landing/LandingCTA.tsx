import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import React from 'react';

const words = [
  {
    text: "Join",
  },
  {
    text: "today",
  },
  {
    text: "and",
  },
  {
    text: "start",
  },
  {
    text: "your",
  },
  {
    text: "journey",
  },
  {
    text: "with",
  },
  {
    text: "CodeWeb3.tech.",
    className: "text-blue-500 dark:text-blue-500",
  },
];


const LandingCTA = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl">
      Ready to Transform Your Tech Career
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button 
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm" 
          aria-label="Join now"
        >
          Join now
        </button>
        <button 
          className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm" 
          aria-label="Sign up"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default LandingCTA;
