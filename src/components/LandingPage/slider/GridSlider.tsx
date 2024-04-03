import { BsShieldCheck } from "react-icons/bs";
import Image from "next/image";
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
      gsap.to(".creators_anim1", {
          x: -500,
          duration: 3,
          scrollTrigger: {
              trigger: ".hero__upload .avatars",
              scrub: true
          }
      });
      gsap.to(".creators_anim2", {
          x: 500,
          duration: 3,
          scrollTrigger: {
              trigger: ".hero__upload .avatars",
              scrub: true
          }
      });
      gsap.to(".creators_anim3", {
          x: -500,
          duration: 3,
          scrollTrigger: {
              trigger: ".hero__upload .avatars",
              scrub: true
          }
      });
  }, []);

  return (
    <>

      <div className="overflow-hidden">

      {/* <MetaverseReady/> */}

        <div className="flex justify-center creators_anim1">
          {numbers_1.map((index) => (
            <div key={`1${index}`}>
              <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
                <img src={`/images/slider/${index}.png`} alt="Avatar" />
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center creators_anim2">
          {numbers_2.map((index) => (
            <div key={`1${index}`}>
              <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
                <img src={`/images/slider/${index}.png`} alt="Avatar" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center creators_anim3">
          {numbers_3.map((index) => (
            <div key={`1${index}`}>
              <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
                <img src={`/images/slider/${index}.png`} alt="Avatar" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
)
};

export default Slider;
