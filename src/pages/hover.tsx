import { useCallback, useEffect, useState } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hover() {
  const [animation, setAnimation] = useState<gsap.core.Timeline>();

  useGSAP(() => {
    gsap.defaults({ duration: 0.3 });

    setAnimation(
      gsap
        .timeline({ paused: true })
        .to('.text', { color: 'white', x: 10 })
        .to('.dot', { backgroundColor: '#f93', scale: 1.5 }, '<')
    );
  }, []);

  const handleMouseEnter = useCallback(() => {
    animation?.play();
  }, [animation]);

  const handleMouseLeave = useCallback(() => {
    animation?.reverse();
  }, [animation]);

  useEffect(() => {
    const text = document.querySelector('.text');

    text?.addEventListener('mouseenter', handleMouseEnter);
    text?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      text?.removeEventListener('mouseenter', handleMouseEnter);
      text?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <div className="p-8 bg-slate-500 h-screen w-screen">
      <div className="flex items-center cursor-pointer">
        <div className="dot h-4 min-w-4 bg-slate-300 rounded-lg mr-2" />
        <span className="text text-4xl font-bold">HOME</span>
      </div>
    </div>
  );
}

export default Hover;
