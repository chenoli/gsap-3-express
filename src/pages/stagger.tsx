import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import svg from '../assets/fred.svg';
import svg3 from '../assets/fred-purple.svg';
import svg4 from '../assets/fred-blue.svg';
import svg2 from '../assets/fred-pink.svg';
import svg6 from '../assets/fred-orange.svg';
import svg5 from '../assets/fred-red.svg';

function Stagger() {
  useGSAP(() => {
    gsap.to('#freds img', {
      y: -100,
      stagger: {
        each: 0.2,
        // amount: 1, // sum of animation stagger (they share 1 sec.)
        // from: 'center',
        from: 'edges',
      },
    });
  }, []);

  return (
    <div id="freds" className="bg-slate-500 h-screen w-screen flex items-end">
      <img src={svg} alt="" className="fred green h-32" />
      <img src={svg2} alt="" className="fred pink h-32" />
      <img src={svg3} alt="" className="fred pink h-32" />
      <img src={svg4} alt="" className="fred pink h-32" />
      <img src={svg5} alt="" className="fred pink h-32" />
      <img src={svg6} alt="" className="fred pink h-32" />
    </div>
  );
}

export default Stagger;
