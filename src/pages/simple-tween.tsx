import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import svg from '../assets/fred.svg';

function SimpleTween() {
  useGSAP(() => {
    gsap.fromTo(
      '.fred',
      { x: 0, y: 0, duration: 1, scale: 0.1 },
      {
        x: 400,
        y: 0,
        rotate: 360,
        duration: 1,
        scale: 0.1,
      }
    );
  }, []);

  return (
    <div className="flex flex-1 flex-col bg-slate-500 h-screen w-screen">
      <img src={svg} alt="" className="fred" />
    </div>
  );
}

export default SimpleTween;
