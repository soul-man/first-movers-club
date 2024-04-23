import { PiLinkSimpleLight } from "react-icons/pi";
import { starsMarketPrice } from "@/utils/starsMarketPrice";
import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";


const Mint = () => {

    const [starsPrice, setStarsPrice] = useState<any>(0);

    const loadPrice = async () => {
        const starsPrice = await starsMarketPrice();
        setStarsPrice(starsPrice);
    }

    useEffect(() => {
        loadPrice();

        gsap.fromTo(".anim-top1", {
            y: -150,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: ".scroll-trigger",
            }
          });

          gsap.fromTo(".anim-box", {
            opacity: 0,
          }, {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".scroll-trigger",
            }
          });

    }, []);

    return (
        <div id="mint" className='w-full bg-[#7c12c2]'>
            <div className='flex items-center justify-center'>
                <div className='px-5 max-w-screen-xl 2xl:max-w-screen-2xl py-14 md:py-28 w-[100%] border-b-[8px] border-dashed border-indigo-500/30'>
                    
                    <h2 className="
                        anim-top1
                        !leading-[2.7rem] 
                        sm:!leading-[3.5rem] 
                        md:!leading-[4.5rem] 
                        lg:!leading-[4rem] 
                        xl:!leading-[5.3rem] 
                        2xl:!leading-[6rem] 
                        text-center 
                        text-4xl
                        sm:text-6xl 
                        md:text-[5rem]
                        lg:text-7xl
                        xl:text-8xl
                        2xl:text-[7rem]
                        font-bold 
                        mb-0
                        md:mb-2"
                    >
                        When lambo?
                    </h2>
                    <p className="
                        anim-top1
                        mb-10 
                        textlg  
                        sm:text-2xl 
                        md:text-3xl 
                        text-center 
                        !leading-[2.3rem] 
                        md:!leading-[2.7rem]
                        text-white"
                    >
                        - a date is yet to be announced -
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center md:items-start gap-5 md:gap-4 lg:gap-10">
                        <div className="w-12/12 sm:w-5/12 anim-box">
                            <div className="flex flex-col justify-center items-center gap-2 bg-purple-950/20 p-2 py-5 md:py-10 rounded-lg mb-2">
                                <h4 className="text-2xl md:text-4xl text-white">DATE: TBA</h4>
                                <a href="https://www.stargaze.zone" target='_new'><img src="https://www.stargaze.zone/logo.svg" alt="Stargaze NFT Marketplace" className="w-[200px] md:w-[240px] lg:w-[330px]"/></a>
                            </div>
                            <div className="hidden md:flex flex-col md:flex-row p-1">
                                <p className="text-lg lg:text-center avatars">Mint up to <b>5 NFTs/Wallet</b></p>
                            </div>
                        </div>
                        <div className="w-12/12 sm:w-5/12 anim-box">
                            <div className="flex flex-col justify-center items-center gap-3 bg-purple-950/20 p-3 md:p-2 py-5 md:py-10 rounded-lg mb-2">
                                <h3 className="text-2xl md:text-4xl text-white">PRICE:</h3>
                                <div className="flex flex-row justify-center items-center gap-4">
                                    <span className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-yellow-300 font-bold">111 STARS</span>
                                    <span className="bg-white rounded-full p-1">
                                        <img src="./images/stars.png" alt="Stars currency logo" className="w-[30px] md:w-[48px]"/>
                                    </span>
                                </div>
                            </div>
                            <div className="hidden text-lg md:flex flex-col lg:flex-row md:justify-between p-1">
                                <span className="text-right scroll-trigger">Price: <b>${(starsPrice * 111).toFixed(2)}</b></span>
                                <a className="flex flex-row items-center justify-end gap-2 opacity-80" href="https://coinmarketcap.com/currencies/stargaze/" target='_new'>coinmarketcap <PiLinkSimpleLight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mint