import React, { useContext, useState } from 'react';
import { FaCarSide } from "react-icons/fa";
import { BsRocketFill } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { GiRocketFlight } from "react-icons/gi";
import Header from '@/components/layout/Header';
import InfoTicker from './Ticker'; 
import ImageSlider from './slider/ImageSlider';
import BackgroundContext from '@/utils/context/sliderBg';

const Intro = () => {
  const {background } = useContext(BackgroundContext);
  
  return (
    <>
          {/* <div className='w-full bg-[#1e39c2] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/50 from-20% via-blue-700/80 via-50% to-blue-700/10 to-90%'> */}

      <div className={'w-full duration-300 transition-all ' + (background.sliderBg)}>
        <div className='flex justify-center'>
          <div className='flex flex-col justify-start sm:justify-between px-5 max-w-screen-xl 2xl:max-w-screen-2xl min-h-[100vh] gap-2'>
            <div>
              <Header />
            </div>

            <div>
              <div className='relative flex flex-col sm:flex-row items-center justify-between gap-10 md:gap-0 lg:gap-14 mb-10 sm:mt-0'>

                  <div className='relative w-12/12 sm:w-8/12 md:sm:w-7/12'>
                    <p className="text-xl md:text-3xl mb-3 md:mb-2 text-yellow-300"><b>NFT COLLECTION</b></p>
                    <h1 className='
                      mb-6
                      md:mb-8
                      !leading-[2.7rem] 
                      md:!leading-[4.5rem] 
                      lg:!leading-[5rem] 
                      2xl:!leading-[6rem] 
                      font-bold
                      text-white
                      text-5xl
                      sm:text-5xl 
                      md:text-[5rem]
                      lg:text-[5.5rem]
                      xl:text-8xl
                      2xl:text-[7rem]
                    '>
                      The First Movers Club
                    </h1>

                    <p className='
                      mb-8 
                      md:mb-10
                      !leading-[2rem]
                      sm:!leading-[2.3rem]
                      md:!leading-[2.3rem]
                      lg:!leading-[2.6rem]
                      2xl:!leading-[3rem]
                    text-white
                      text-2xl 
                      sm:text-2xl
                      lg:text-3xl
                      xl:text-3xl
                      2xl:text-4xl'
                    >
                      We are the survivors of Mt.Gox, The DAO and Crypto Winter. 
                      We brought skin into play when NEO was still called Antshares. 
                      We received 100k XRP as an airdrop. We know what a hard fork feels like. 
                      <span className="font-semibold"> We are the FirstMovers</span>.
                    </p>

                    <div className='flex flex-row items-center gap-10'>

                    <a href="#mint" className={'relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black text-2xl transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group ' + background.bg}>
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-500 group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:font-bold group-hover:text-white">MINT SOON</span>
                    </a>

                      <a href="https://www.stargaze.zone" target='_new'><img src="https://www.stargaze.zone/logo.svg" className="w-24 md:w-[150px]"/></a>
                    </div>

                    <div className='
                      absolute 
                      hidden
                      sm:block
                      top-[4%] 
                      left-[70%] 
                      sm:bottom-[-50%] 
                      sm:left-[53%] 
                      md:top-[-10%] 
                      md:left-[64%]
                      lg:top-[-2%] 
                      lg:left-[70%]
                    '>
                      <MdOutlineRocketLaunch className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-blue-300/50 rotate-[-10deg]'/>
                    </div>

                  </div>

                  <div className='relative w-12/12 sm:w-4/12 md:w-5/12'>
                    <ImageSlider/>
                  </div>


              </div>

            </div>

            <div className='mb-1'>
              <div className='hidden xl:block mb-5'>
                <InfoTicker/>
              </div>
            </div>

          </div>
        </div>
        </div>
    </>
  );
};

export default Intro;
