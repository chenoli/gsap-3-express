import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import svg from '../assets/fred.svg';
import svg2 from '../assets/fred-pink.svg';

function DelayAndRepeat() {
  useGSAP(() => {
    gsap.to('.green', { x: 300, duration: 2, repeat: -1, yoyo: true });
    gsap.to('.pink', { x: 300, duration: 2, delay: 2 });
  }, []);

  return (
    <div className="bg-slate-500 h-screen w-screen">
      <img src={svg} alt="" className="fred green" />
      <img src={svg2} alt="" className="fred pink" />
    </div>
  );
}

export default DelayAndRepeat;
