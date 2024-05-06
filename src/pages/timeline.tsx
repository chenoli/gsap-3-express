import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import svg from '../assets/fred.svg';
import svg2 from '../assets/fred-pink.svg';
import svg3 from '../assets/fred-blue.svg';
import svg4 from '../assets/fred-orange.svg';
import svg5 from '../assets/fred-purple.svg';
import svg6 from '../assets/fred-red.svg';
import { useState } from 'react';

function Timeline() {
  const [animation, setAnimation] = useState<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    setAnimation(
      gsap
        .timeline()
        .from('#demo', {
          opacity: 0,
        })
        .from('#title', { opacity: 0, scale: 0, ease: 'back' })
        .from(
          '#freds img',
          {
            y: 500,
            stagger: 0.1,
            duration: 0.5,
            ease: 'back',
          },
          '+=2'
        )
        .add('test')
        .from('#time', { xPercent: 100, duration: 0.8, ease: 'bounce' })
    );
    // .from('#time', { xPercent: 100, duration: 0.8 }, 1);
    // .from('#time', { xPercent: 100, duration: 0.8 }, '<');
  }, []);

  const play = () => {
    animation?.play();
  };

  const pause = () => {
    animation?.pause();
  };

  const reverse = () => {
    animation?.reverse();
  };

  const restart = () => {
    animation?.restart();
  };

  const label = () => {
    animation?.play('test');
  };

  return (
    <>
      <div className="nav mt-8 mb-8 flex gap-5 ml-8">
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
        <button
          onClick={label}
          className="bg-yellow-200 p-4 rounded-lg text-slate-500"
        >
          play label
        </button>
      </div>
      <div
        id="demo"
        className="bg-slate-500 h-screen w-screen flex flex-1 items-center justify-center flex-col overflow-hidden"
      >
        <div className="flex h-16 w-screen flex-row justify-end items-center">
          <div id="time" className="bg-blue-400 p-4">
            <strong>Sundays 9pm</strong>
          </div>
        </div>
        <span id="title" className="text-5xl">
          Meet the freds
        </span>
        <div id="freds" className="flex flex-row mt-16">
          <img src={svg} alt="Fred" />
          <img src={svg2} alt="Fred" />
          <img src={svg3} alt="Fred" />
          <img src={svg4} alt="Fred" />
          <img src={svg5} alt="Fred" />
          <img src={svg6} alt="Fred" />
        </div>
      </div>
    </>
  );
}

export default Timeline;
