import { useEffect } from 'react';
import { gsap } from "gsap";

const Items = () => {

    useEffect(() => {
        gsap.fromTo(".items-anim-top", {
            y: -150,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".items-anim-top-trigger",
            }
          });

          gsap.fromTo(".items-anim-left1", {
            x: -150,
            opacity: 0,
          }, {
            x: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.4,
            scrollTrigger: {
                trigger: ".items-anim-top-trigger",
            }
          });
          gsap.fromTo(".items-anim-left2", {
            x: -150,
            opacity: 0,
          }, {
            x: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.6,
            scrollTrigger: {
                trigger: ".items-anim-top-trigger",
            }
          });
          gsap.fromTo(".items-anim-left3", {
            x: -150,
            opacity: 0,
          }, {
            x: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.8,
            scrollTrigger: {
                trigger: ".items-anim-top-trigger",
            }
          });
          gsap.fromTo(".items-anim-left4", {
            x: -150,
            opacity: 0,
          }, {
            x: 0,
            opacity: 1,
            duration: 0.4,
            delay: 1,
            scrollTrigger: {
                trigger: ".items-anim-top-trigger",
            }
          });
    }, []);

    return (
        <div id="items" className='w-full bg-[#7c12c2]'>
            <div className='flex items-center justify-center'>
                <div className="relative px-5 max-w-screen-2xl 2xl:max-w-screen-2xl py-14 md:py-28">
                    <div className="md:px-24 flex flex-col items-center">
                        <h2 className="
                            items-anim-top
                            !leading-[3rem] 
                            sm:!leading-[4.5rem] 
                            md:!leading-[4rem] 
                            lg:!leading-[4rem] 
                            xl:!leading-[4.3rem] 
                            2xl:!leading-[6rem] 
                            text-center  
                            text-5xl
                            sm:text-5xl 
                            md:text-6xl
                            lg:text-6xl
                            xl:text-7xl
                            2xl:text-8xl
                            font-bold 
                            mb-8"
                        >
                            Dogs, Rockets, Lambos, Unicorns
                        </h2>
                        <p className="
                            items-anim-top
                            mb-10 
                            text-xl 
                            sm:text-2xl 
                            md:text-3xl 
                            text-center 
                            !leading-[2.3rem] 
                            md:!leading-[2.7rem]"
                        >
                            The First Movers introduced terms like “to the m00n” or “when lambo”. 
                            Because of this, some First Movers have special items inspired by crypto and memes.
                        </p>
                        <div className='flex flex-row flex-wrap items-center justify-center'>
                            <div className="items-anim-left1 items-anim-top-trigger">
                                <img src="images/doge_family.png" alt="The crypto doge family" width={350}/>
                            </div>
                            <div className="items-anim-left2">
                                <img src="images/special_items.png" alt="Special NFT items" width={240}/>
                            </div>
                            <div className="items-anim-left3">
                                <img src="images/rockets.png" alt="NFT moon and mars rockets" width={160}/>
                            </div>
                            <div className="items-anim-left4">
                                <img src="images/unicorns.png" alt="NFT crypto unicorns" width={300}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Items