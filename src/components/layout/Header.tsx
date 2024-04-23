import { useContext, useEffect, useState } from 'react';
import BackgroundContext from '@/utils/context/themeContext';
import { starsMarketPrice } from "@/utils/starsMarketPrice";
import { TbAlpha } from "react-icons/tb";

export default function Header() {

  const {background} = useContext(BackgroundContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [starsPrice, setStarsPrice] = useState<any>(0);
  const [starsLoaded, setStarsLoaded] = useState<boolean>(false);
  
  const loadPrice = async () => {
      const starsPrice = await starsMarketPrice();
      setStarsPrice(starsPrice);
      setStarsLoaded(true);
  }

  const handleMobileNavClick = () => {
    if (mobileNavOpen) {
      document.body.classList.remove("overflow-hidden");
      setMobileNavOpen(false);
    } else {
      document.body.classList.add("overflow-hidden");
      setMobileNavOpen(true);
    }
  }

  useEffect(() => {
      loadPrice();
  }, []);

  return (
    <nav className="xl:px-0 w-full">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-5">
      
          <div className="flex flex-row items-center space-x-3">
            <span className={'px-1 py-1 text-3xl rounded-xl text-black/90 ' + (background.colorPrimary)}><TbAlpha /></span>
            <a href="./">
              <span className="text-2xl md:text-3xl font-semibold text-white">FIRST MOVERS</span>
            </a>
          </div>

          <div className="flex z-10">
            <div className="items-center justify-between hidden w-full lg:flex md:w-auto" id="navbar-cta">
              <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 bg-transparent lg:space-x-2 xl:space-x-4 md:flex-row md:mt-0 md:border-0">
                <li className="flex align-center">
                  <a href='#mint' target="_self" className="py-2 px-1 text-lg text-blue-100 hover:underline" >
                    MINT
                  </a>
                </li>
                <li className="flex align-center">
                  <a href='#nft-collection' target="_self" className="py-2 px-1 text-lg text-blue-100 hover:underline" >
                    COLLECTION
                  </a>
                </li>
                <li className="flex align-center">
                  <a href='#personality' target="_self" className="py-2 px-1 text-lg text-blue-100 hover:underline" >
                    PERSONALITY
                  </a>
                </li>
                <li className="flex align-center">
                  <a href='#rarity' target="_self" className="py-2 px-1 text-lg text-blue-100 hover:underline" >
                    RARITY
                  </a>
                </li>
                <li className="flex align-center">
                  <a href='#items' target="_self" className="py-2 px-1 text-lg text-blue-100 hover:underline" >
                    ITEMS
                  </a>
                </li>
                <li className="flex align-center">
                  <a href='#frequently-asked-questions' target="_self" className="py-2 px-1 text-lg text-blue-100 hover:underline" >
                    FAQ
                  </a>
                </li>
                <li className="flex align-center">
                  <a href='https://coinmarketcap.com/currencies/stargaze/' target="_new" className={'py-2 px-1 text-lg ' + (background.textColorSecondary)} >
                    <div className={'flex flex-row justify-center items-center gap-2 hover:text-white hover:bg-[#1e39c2] px-2 py-1 rounded-lg ' + (background.colorPrimary)}>
                      <span className="text-lg min-w-[74px]">
                      {!starsLoaded ? 'loading' : '$' + starsPrice}
                        </span>
                      <span className="bg-white rounded-full p-1">
                          <img src="./images/stars.png" alt="Stars currency logo" className="w-[18px]"/>
                      </span>
                    </div>
                  </a>
                </li>


              </ul>
            </div>
          </div>

          <div className="flex z-20 lg:hidden">
          <div className="items-center justify-between hidden w-full md:w-auto" id="navbar-cta">
          </div>
          <div className="flex space-x-3 md:space-x-0">
              <button 
                onClick={() => handleMobileNavClick()} 
                type="button" 
                className="
                  items-center 
                  p-1 
                  w-10 
                  h-10 
                  rounded-lg" 
                >
                {mobileNavOpen ? (
                  <span className='w-5 h-5 text-2xl text-center'>X</span>
                ) : (
                  <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
                )}

            </button>
          </div>
        </div>

      </div>

      {mobileNavOpen && (
        <div className=" overscroll-y- px-0 absolute top-0 left-0 lg:hidden w-full text-center bg-blue-500 min-h-[100vh] z-10">
          <div className="w-full min-h-[100vh] flex items-center justify-center">
            <ul className="mobile font-medium p-4 md:p-0 bg-transparent md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <a href='#mint' onClick={() => handleMobileNavClick()} target="_self" className="py-2 text-2xl text-white hover:text-black/70 active:text-blue-500 bg-transparent" >
                  MINT
                </a>
              </li>
              <li>
                <a href='#collection' onClick={() => handleMobileNavClick()} target="_self" className="py-2 md:p-0 text-2xl text-blue-100 hover:underline active:text-blue-500 bg-transparent" >
                  COLLECTION
                </a>
              </li>
              <li>
                <a href='#personality' onClick={() => handleMobileNavClick()} target="_self" className="py-2 md:p-0 text-2xl text-blue-100 hover:text-black/70 active:text-blue-500 bg-transparent" >
                  PERSONALITY
                </a>
              </li>
              <li>
                <a href='#rarity' onClick={() => handleMobileNavClick()} target="_self" className="py-2 md:p-0 text-2xl text-blue-100 hover:text-black/70 active:text-blue-500 bg-transparent" >
                  RARITY
                </a>
              </li>
              <li>
                <a href='#items' onClick={() => handleMobileNavClick()} target="_self" className="py-2 md:p-0 text-2xl text-blue-100 hover:text-black/70 active:text-blue-500 bg-transparent" >
                  ITEMS
                </a>
              </li>
              <li>
                <a href='#frequently-asked-questions' onClick={() => handleMobileNavClick()} target="_self" className="py-2 md:p-0 text-2xl text-blue-100 hover:text-black/70 active:text-blue-500 bg-transparent" >
                  FAQ
                </a>
              </li>
            </ul>          
          </div>
        </div>
      )}
    </nav>
  );
}
