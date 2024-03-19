import { useState } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import svg from '../assets/fred.svg';

function Control() {
  const [tween, setTween] = useState<gsap.core.Tween | null>(null);

  useGSAP(() => {
    setTween(
      gsap.to('.fred', { duration: 3, x: 600, ease: 'linear', paused: true })
    );
  }, []);

  const play = () => {
    tween?.play();
  };

  const pause = () => {
    tween?.pause();
  };

  const reverse = () => {
    tween?.reverse();
  };

  const restart = () => {
    tween?.restart();
  };

  return (
    <div className="bg-slate-500 h-screen w-screen">
      <img src={svg} alt="" className="fred green h-32" />
      <div className="nav mt-8 flex gap-5 ml-8">
        <button
          onClick={play}
          className="bg-yellow-200 p-4 rounded-lg text-slate-500"
        >
          play
        </button>
        <button
          onClick={pause}
          className="bg-yellow-200 p-4 rounded-lg text-slate-500"
        >
          pause
        </button>
        <button
          onClick={reverse}
          className="bg-yellow-200 p-4 rounded-lg text-slate-500"
        >
          reverse
        </button>
        <button
          onClick={restart}
          className="bg-yellow-200 p-4 rounded-lg text-slate-500"
        >
          restart
        </button>
      </div>
    </div>
  );
}

export default Control;
