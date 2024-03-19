import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import svg from '../assets/fred.svg';
import svg2 from '../assets/fred-pink.svg';

function Ease() {
  useGSAP(() => {
    gsap.to('.green', {
      x: 600,
      duration: 3,
      ease: 'back(6)',
    });
    gsap.to('.pink', { x: 600, duration: 3, ease: 'linear' });
  }, []);

  return (
    <div className="bg-slate-500 h-screen w-screen">
      <img src={svg} alt="" className="fred green" />
      <img src={svg2} alt="" className="fred pink" />
    </div>
  );
}

export default Ease;
