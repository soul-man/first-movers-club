import { useEffect } from 'react';
import MetaverseReady from '@/components/LandingPage/MetaverseReady';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Slider = () => {

  var numbers_1 = [];
  var numbers_2 = [];
  var numbers_3 = [];

  for (let i = 0; i < 40; i++) {
      numbers_1.push(i)
  }
  for (let i = 30; i < 70; i++) {
      numbers_2.push(i)
  }
  for (let i = 70; i < 99; i++) {
      numbers_3.push(i)
  }

  useEffect(() => {
    gsap.to(".slider_anim1", {
      x: -500,
      duration: 4,
      ease: "none",
      scrollTrigger: {
        trigger: ".slider_anim1",
        endTrigger: ".slider_anim3",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.to(".slider_anim2", {
      x: 500,
      duration: 4,
      ease: "none",
      scrollTrigger: {
        trigger: ".slider_anim1",
        endTrigger: ".slider_anim3",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.to(".slider_anim3", {
      x: -500,
      duration: 4,
      ease: "none",
      scrollTrigger: {
        trigger: ".slider_anim1",
        endTrigger: ".slider_anim3",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden slider_container">
        {/* First slider row */}
        <div className="slider_anim1">
          <div className="flex justify-center">
            {numbers_1.map((index) => (
              <div key={`1${index}`}>
                <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
                  <img src={`/images/slider/${index}.png`} alt="Avatar" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second slider row */}
        <div className="slider_anim2">
          <div className="flex justify-center">
            {numbers_2.map((index) => (
              <div key={`2${index}`}>
                <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
                  <img src={`/images/slider/${index}.png`} alt="Avatar" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third slider row */}
        <div className="slider_anim3">
          <div className="flex justify-center">
            {numbers_3.map((index) => (
              <div key={`3${index}`}>
                <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
                  <img src={`/images/slider/${index}.png`} alt="Avatar" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
