import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { FaRegHeart } from "react-icons/fa6";
import { TbAlpha } from "react-icons/tb";

export default function Footer() {

  useEffect(() => { 
    gsap.fromTo(".footer-anim", {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-anim-trigger",
    }
    });
  }, []);

  return (
    <div className='w-full bg-[#1235c2]'> 
        <footer className="footer-anim min-[320px]:px-4 xl:px-0 ">
      <div className="
        py-5
        md:py-1
        max-w-6xl 
        flex 
        flex-col
        md:flex-row
        items-center 
        justify-between 
        mx-auto 
        min-h-[15vh]
        md:min-h-[10vh]
        z-1"
      >
        <a href="./" className="footer-anim-trigger flex flex-row items-center space-x-3 z-11">
          <span className="px-1.5 py-1.5 text-3xl font-bold bg-yellow-400 rounded-xl text-black/90"><TbAlpha/></span>
          <div className="flex flex-col">
          <span className="text-lg md:text-xl font-semibold text-white mb-0 pb-0">THE FIRST MOVERS CLUB</span>
          <span className="text-sm md:text-md font-normal text-white/60">NFT COLLECTION BY SOULMAN</span>
          </div>
        </a>

        <div className='pt-2 lg:pt-0'>
          {/* <p className="mb-1 text-md text-gray-200/80 text-center md:text-right mt-3 md:pt-0">&copy; {new Date().getFullYear()} - mint-heaven.xyz</p> */}
          <div className="text-md text-white/60">
            <div className="flex flex-col md:flex-row text-center mt-3 text-sm md:text-lg md:mt-0">
              <span className="flex items-center justify-center">
                made with <FaRegHeart className="ml-2 mr-2 text-green-400" />{' '}
              </span>
              <span>
                build on{' '}
                <a href='https://nextjs.org/'>Next.js</a>,{' '}
                <a href='https://tailwindcss.com/'>Tailwind</a>{' '}
                and{' '}
                <a href='https://vercel.com/'>Vercel</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>



  );
}
