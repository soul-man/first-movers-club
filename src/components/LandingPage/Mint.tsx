import { PiLinkSimpleLight } from "react-icons/pi";
import { starsMarketPrice } from "@/utils/starsMarketPrice";
import React, { useEffect, useState } from 'react';

const Mint = () => {

    const [starsPrice, setStarsPrice] = useState<any>(0);

    const loadPrice = async () => {
        const starsPrice = await starsMarketPrice();
        setStarsPrice(starsPrice);
    }

    useEffect(() => {
        loadPrice();
    }, []);

    return (
        <div id="mint" className='w-full bg-[#7c12c2]'>
            <div className='flex items-center justify-center'>
                <div className='px-5 max-w-screen-xl 2xl:max-w-screen-2xl py-28 w-[100%] border-b-[8px] border-dashed border-indigo-500/30'>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                        <div className="w-12/12 sm:w-5/12">
                            <div className="flex flex-col justify-center items-center gap-2 bg-purple-950/20 p-2 py-10 rounded-lg mb-2">
                                <h4 className="text-3xl md:text-4xl text-blue-400">DATE: TBA</h4>
                                <a href="https://www.stargaze.zone" target='_new'><img src="https://www.stargaze.zone/logo.svg" className="w-[200px] md:w-[300px] lg:w-[330px]"/></a>
                            </div>
                            <div className="hidden md:flex flex-col md:flex-row ">
                                <p className="text-lg center">Mint up to <b>5 NFTs/Wallet</b></p>
                            </div>
                        </div>
                        <div className="w-12/12 sm:w-5/12 px-20 sm:px-0">
                            <div className="flex flex-col justify-center items-center gap-3 bg-purple-950/20 p-2 py-10 rounded-lg mb-2">
                                <h3 className="text-3xl md:text-4xl text-blue-400">PRICE:</h3>
                                <div className="flex flex-row justify-center items-center gap-4">
                                    <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-green-400 font-bold">111 STARS</span>
                                    <span className="bg-white rounded-full p-1">
                                        <img src="./images/stars.png" className="w-[30px] md:w-[48px]"/>
                                    </span>
                                </div>
                            </div>
                            <div className="hidden text-lg md:flex flex-col md:flex-row ">
                                <p>Market price: <b>${(starsPrice * 111).toFixed(2)}</b></p>
                                <a className="flex flex-row items-center gap-2" href="https://coinmarketcap.com/currencies/stargaze/" target='_new'>coinmarketcap <PiLinkSimpleLight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mint