import { useContext, useState } from 'react';
import BackgroundContext from '@/utils/context/sliderBg';
import { TbAlpha } from "react-icons/tb";

export default function Header() {

  const {background} = useContext(BackgroundContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (

    <nav className="xl:px-0 w-full">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-5">
      
          <div className="flex flex-row items-center space-x-3">
            <span className={'px-1 py-1 text-2xl md:text-3xl rounded-xl text-black/90 ' + (background.bg)}><TbAlpha /></span>
            <a href="./">
              <span className="text-2xl md:text-3xl font-semibold text-white">FIRST MOVERS</span>
            </a>
          </div>

          <div className="flex z-10">
            <div className="items-center justify-between hidden w-full lg:flex md:w-auto" id="navbar-cta">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 bg-transparent md:space-x-4 md:flex-row md:mt-0 md:border-0">
                <li className="flex align-center">
                  <a href='#nft-collection' target="_self" className="py-2 px-1 text-lg text-blue-100 hover:underline" >
                    NFT-COLLECTION
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
              </ul>
            </div>
          </div>

          <div className="flex z-10 lg:hidden">
          <div className="items-center justify-between hidden w-full md:w-auto" id="navbar-cta">
          </div>
          <div className="flex space-x-3 md:space-x-0">
              <button 
                onClick={() => setMobileOpen(prevMobileOpen => !prevMobileOpen)} 
                type="button" 
                className="
                  inline-flex 
                  items-center 
                  p-1 
                  w-10 
                  h-10 
                  justify-end 
                  text-sm 
                  text-white 
                  rounded-lg 
                  hover:bg-blue-700/20 
                  focus:outline-none 
                  focus:ring-1 
                  focus:ring-blue-400" 
                >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
        </div>

      </div>

      {mobileOpen && (
        <div className="lg:hidden w-full text-center min-h-[calc(100vh-80px)]">
          <div className="w-full">
            <ul className="font-medium p-4 md:p-0 bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href='./mint-nfts' target="_self" className="py-2 text-2xl text-white hover:text-blue-400 active:text-blue-500 bg-transparent" >
                  Mint
                </a>
              </li>
              <li>
                <a href='./create-your-own-nft' target="_self" className="py-2 md:p-0 text-2xl text-blue-100 hover:text-blue-400 active:text-blue-500 bg-transparent" >
                Create
                </a>
              </li>
              <li>
                <a href='./deploy-smart-contract' target="_self" className="py-2 md:p-0 text-2xl text-blue-100 hover:text-blue-400 active:text-blue-500 bg-transparent" >
                  Deploy
                </a>
              </li>
            </ul>          
          </div>
        </div>
      )}
    </nav>
  );
}
