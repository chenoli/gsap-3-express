import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import svg from '../assets/fred.svg';

function FromAndFromTo() {
  useGSAP(() => {
    // gsap.from('.fred', {
    //   x: 400,
    //   y: 200,
    //   rotate: 360,
    //   scale: 3,
    //   duration: 1,
    // });

    gsap.fromTo(
      '.fred',
      {
        x: 700,
        y: 400,
        opacity: 0,
      },
      {
        x: 400,
        y: 200,
        scale: 3,
        opacity: 1,
        duration: 3,
      }
    );
  }, []);

  return (
    <div className="flex flex-1 flex-col bg-slate-500 h-screen w-screen">
      <img src={svg} alt="" className="fred" />
    </div>
  );
}

export default FromAndFromTo;
