import React, { useEffect } from 'react';
import { gsap } from "gsap";
import Image from 'next/image';
import { MdOutlineRocketLaunch } from "react-icons/md";

const Collection = () => {

    useEffect(() => { 
        gsap.fromTo(".collection-anim-left", {
          x: -250,
          opacity: 0,
        }, {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".collection-anim-left-right-trigger",
        }
        });
    
        gsap.fromTo(".collection-anim-right", {
          x: 250,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".collection-anim-left-right-trigger",
        }
        });
      }, []);

    return (
        <div id="nft-collection" className='w-full bg-[#7c12c2]'>
            <div className='flex items-center justify-center'>
                <div className='relative px-5 max-w-screen-xl 2xl:max-w-screen-2xl py-14 md:py-28'>
                    <div className='absolute top-[-50%] left-[22%]'>
                        <MdOutlineRocketLaunch className='text-[900px] hidden text-blue-400/10 rotate-[10deg]'/>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className="w-12/12 lg:w-7/12 md:pl-5 lg:pl-10 collection-anim-left">
                            <div className='flex flex-col items-start'>
                                <div className='
                                    mb-4
                                    p-1
                                    md:p-2
                                    flex 
                                    items-center 
                                    rounded-md 
                                    bg-yellow-300 
                                    px-2
                                    md:px-3
                                    font-bold 
                                    uppercase
                                    text-black/90'
                                >
                                    <span className="text-sm md:text-xl">A tribute to the crypto community</span>
                                </div>
                            </div>
                            <h2 className="
                                !leading-[2.7rem] 
                                sm:!leading-[3.5rem] 
                                md:!leading-[4.5rem] 
                                lg:!leading-[4rem] 
                                xl:!leading-[5.3rem] 
                                2xl:!leading-[6rem] 
                                text-left 
                                text-5xl
                                sm:text-6xl 
                                md:text-[5rem]
                                lg:text-7xl
                                xl:text-8xl
                                2xl:text-[7rem]
                                font-bold 
                                mb-8"
                            >
                                Who are the First Movers?
                            </h2>
                            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-5 !leading-[2rem] md:!leading-[2.3rem] collection-anim-left-right-trigger">
                                The First Movers are a NFT Collection capturing the spirit of the crypto MEME community but 
                                also paying tribute to the OGs and the early crypto adopters. 
                            </p>
                            <p className="text-xl sm:text-xl md:text-xl mb-7 text-white !leading-[2rem] md:!leading-[1.8rem] md:pr-24">
                                Each First Mover draws inspiration from our very own crypto experiences and is an opportunity 
                                to see crypto with a smile and just keep going!
                            </p>
                            {/* <p className="text-2xl font-thin mb-4">
                                Each First Mover draws inspiration from our very own crypto experiences and is an opportunity to see crypto with a smile and just keep going!
                            </p> */}
                            <p className="text-lg sm:text-xl font-bold text-white">
                                "Once a First Mover - always a First Mover" 
                            </p>
                        </div>
                        <div className="w-12/12 lg:w-5/12 items-center justify-end hidden lg:flex collection-anim-right">
                            <Image 
                                src="/images/permabull_1.png" 
                                alt='First Mover with ahodl bag'
                                className="w-[300px] lg:w-[400px] xl:w-[500px]"
                                width={300}
                                height={400} 
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection