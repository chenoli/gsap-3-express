import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import svg from '../assets/fred.svg';

function SimpleTween() {
  useGSAP(() => {
    gsap.to('.fred', {
      x: 400,
      y: 200,
      rotate: 360,
      scale: 3,
      duration: 1,
    });
  }, []);

  return (
    <div className="flex flex-1 flex-col bg-slate-500 h-screen w-screen">
      <img src={svg} alt="" className="fred" />
    </div>
  );
}

export default SimpleTween;
