import { useState } from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

const cards = [
    {
        name: 'Jonny',
        item: 'Hodl bag',
        score: '123',
        shirt: 'Miner',
        image: '/images/bg-scenes/personality_01.png',
        alt: 'First Mover with ahodl bag.'
    },
    {
        name: 'Jonny',
        item: 'Big hodl bag',
        score: '2300',
        shirt: 'Miner',
        image: '/images/bg-scenes/personality_02.png',
        alt: 'First Mover with a big hodl bag.'
    },
    {
        name: 'Jonny',
        item: 'Candlestick',
        score: '500',
        shirt: 'Miner',
        image: '/images/bg-scenes/personality_03.png',
        alt: 'A rekt First Mover with a green candlestick.'
    },
    {
        name: 'Jonny',
        item: 'Diamond hands',
        score: '1000',
        shirt: 'Miner',
        image: '/images/bg-scenes/personality_04.png',
        alt: 'First Mover as a whale with laser eyes.'
    },
    {
        name: 'Jonny',
        item: 'Safu helmet',
        score: '777',
        shirt: 'Miner',
        image: '/images/bg-scenes/personality_05.png',
        alt: 'CEO CZ from Binance as a First Mover. Safu.'
    },

]


const Personality = () => {

    const [isHidden, setIsHidden] = useState(true);

    const handleMouseOver = () => {
        setIsHidden(false);
      };
    
      const handleMouseOut = () => {
        setIsHidden(true);
      };

    
    const url = "images/bg-scenes/bg-tara.jpg";
    return (
        <>
            <div id="personality" className='w-full bg-[#1227C2]'>
                <div className='flex items-center justify-center'>
                        <div className="px-5 max-w-screen-xl 2xl:max-w-screen-2xl py-20">
                            <div className="flex items-center flex-col gap-4">

                                <div className='mb-20'>
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
                                        mb-12"
                                    >
                                        Unique personalities
                                    </h2>
                                    <div className="text-xl md:text-3xl mb-7 !leading-[2.3rem] md:!leading-[2.7rem]">
                                        <span className='px-2 py-0.5 bg-green-400 text-black rounded-lg font-bold'>Level 1</span>{' '}
                                        The First Movers are made of <b>320+ Traits</b> inspired by the early days of cryptocurrencies. 
                                        Within millions of possible combinations, we picked 
                                        <span className='mx-2 px-2 py-0.5 bg-white text-black rounded-lg font-bold'>1,111</span>
                                        to make every First Mover a masterpiece.
                                    </div>
                                    <p className="text-xl md:text-3xl mb-5 !leading-[2.3rem] md:!leading-[2.7rem]">
                                        <span className='px-2 py-0.5 bg-green-400 text-black rounded-lg font-bold'>Level 2</span>{' '}
                                        To make your First Mover even more unique, every NFT has its own unique name. 
                                        The name adds an extra layer of distinction to your First Mover.
                                    </p>
                                    {/* <p className="text-3xl mb-5 !leading-[2.5rem] ">
                                        This is Tara, she is a First Mover! She loves VR and Kitties. FOMO for Life!
                                    </p> */}
                                </div>

                                <Tooltip id="my-tooltip" style={{ backgroundColor: "rgb(0, 255, 30)", color: "#000000", width: "260px", borderRadius: "10px", }} />

                                <div className='group mb-2'>
                                    <div className="text-xl mb-7 opacity-60">
                                        <span className="duration-300" style={{ opacity: isHidden ? '1' : '0' }}>
                                            (Hover over the images to get in touch with some First Movers)
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap flex-row justify-between gap-4 mb-32">
                                    <a 
                                        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
                                        className="group relative flex flex-col items-center"
                                        data-tooltip-id="my-tooltip" 
                                        data-tooltip-offset={30} 
                                        data-tooltip-html='
                                            <div>
                                                Type: <b>Human (Male)</b>
                                            </div>                                            
                                            <div>
                                                Special item: <b>HODL Bag</b>
                                            </div>
                                            <div>
                                                His day-job: <b>Miner</b>
                                            </div>
                                        '>
                                        <Image 
                                            src="/images/bg-scenes/personality_01.png" 
                                            alt='First Mover with ahodl bag'
                                            width={220}
                                            height={300}
                                            className="drop-shadow-lg hover:drop-shadow-2xl group-hover:scale-110 duration-300" 
                                        />
                                        <div className='absolute text-xl uppercase font-bold bottom-[-40px] opacity-60 group-hover:opacity-100 group-hover:bottom-[-65px] group-hover:text-3xl duration-300'>Gary</div>
                                    </a>
                                    <a 
                                        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
                                        className="group relative flex flex-col items-center"
                                        data-tooltip-id="my-tooltip" 
                                        data-tooltip-offset={30} 
                                        data-tooltip-html='
                                            <div>
                                                Type: <b>Cyclop (Male)</b>
                                            </div>                                            
                                            <div>
                                                Special item: <b>Big HODL Bag</b>
                                            </div>
                                            <div>
                                                His dream: <b>A Lambo</b>
                                            </div>
                                        '>
                                        <Image 
                                            src="/images/bg-scenes/personality_02.png" 
                                            alt="MintHeaven Logo" 
                                            width={220}
                                            height={300}
                                            className="drop-shadow-lg hover:drop-shadow-2xl hover:scale-110 duration-300" 
                                        />
                                        <div className='absolute text-xl uppercase font-bold bottom-[-40px] opacity-60 group-hover:opacity-100 group-hover:bottom-[-65px] group-hover:text-3xl duration-300'>Soulman</div>                                        
                                    </a>
                                    <a 
                                        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
                                        className="group relative flex flex-col items-center"
                                        data-tooltip-id="my-tooltip" 
                                        data-tooltip-offset={30} 
                                        data-tooltip-html='
                                            <div>
                                                Type: <b>Human (Female)</b>
                                            </div>                                            
                                            <div>
                                                Special item: <b>Candle Stick</b>
                                            </div>
                                            <div>
                                                She got: <b>REKT</b> by FOMO
                                            </div>
                                        '>
                                        <Image 
                                            src="/images/bg-scenes/personality_03.png" 
                                            alt="MintHeaven Logo" 
                                            width={220}
                                            height={200}
                                            className="drop-shadow-lg hover:drop-shadow-2xl hover:scale-110 duration-300" 
                                        />
                                         <div className='absolute text-xl uppercase font-bold bottom-[-40px] opacity-60 group-hover:opacity-100 group-hover:bottom-[-65px] group-hover:text-3xl duration-300'>Emmelin</div>                                                                               
                                    </a>
                                    <a 
                                        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
                                        className="group relative flex flex-col items-center"
                                        data-tooltip-id="my-tooltip" 
                                        data-tooltip-offset={30} 
                                        data-tooltip-html='
                                            <div>
                                                Type: <b>Cyclop</b> (Male)
                                            </div>                                            
                                            <div>
                                                Special item: <b>Laser Eyes</b>
                                            </div>
                                            <div>
                                                He has: <b>Diamond Hands</b>
                                            </div>
                                        '>
                                        <Image 
                                            src="/images/bg-scenes/personality_04.png" 
                                            alt="MintHeaven Logo" 
                                            width={220}
                                            height={200}
                                            className="drop-shadow-lg hover:drop-shadow-2xl hover:scale-110 duration-300" 
                                        />
                                        <div className='absolute text-xl uppercase font-bold bottom-[-40px] opacity-60 group-hover:opacity-100 group-hover:bottom-[-65px] group-hover:text-3xl duration-300'>Beau</div>                                                                               
                                    </a>

                                    <a 
                                        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
                                        className="group relative flex flex-col items-center"
                                        data-tooltip-id="my-tooltip" 
                                        data-tooltip-offset={30} 
                                        data-tooltip-html='
                                            <div>
                                                Type: <b>Human (Male)</b>
                                            </div>                                            
                                            <div>
                                                Special item: <b>Helmet</b>
                                            </div>
                                            <div>
                                                Everything is: <b>SAFU</b>
                                            </div>
                                        '>
                                        <Image 
                                            src="/images/bg-scenes/personality_05.png" 
                                            alt="MintHeaven Logo" 
                                            width={220}
                                            height={200}
                                            className="drop-shadow-lg hover:drop-shadow-2xl hover:scale-110 duration-300" 
                                        /> 
                                         <div className='absolute text-xl uppercase font-bold bottom-[-40px] opacity-60 group-hover:opacity-100 group-hover:bottom-[-65px] group-hover:text-3xl duration-300'>CZ</div>                                                                               
                                    </a>                                                                 
                                </div>

                                <div className='flex justify-between'>
                                    <div className="text-4xl text-blue-300 mb-5 !leading-[2.5rem] ">
                                        ...but there are many more. 
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Personality