import { GiSmart } from "react-icons/gi";
import { BsSafeFill } from "react-icons/bs";
import { GiToken } from "react-icons/gi";

const MetaverseReady = () => {
    return (
        <div className='w-full bg-[#4d9ae8]'>
            <div className='flex items-center justify-center min-h-[30vh]'>
                <div className='px-5 md:px-10 2xl:px-0 max-w-screen-xl 2xl:max-w-screen-2xl w-[100%]'>
                    <div className="flex flex-row items-center gap-20 w-[100%]">
                        <div className="text-5xl lg:text-7xl text-black/70 !leading-[4rem]">
                            <b>METAVERSE</b> READY
                        </div>
                        <div className='flex flex-row flex-wrap items-center justify-end mb-2 md:mb-5 gap-4'>
                            <div className='
                                p-1
                                px-2
                                flex 
                                items-center 
                                justify-center
                                text-md 
                                md:text-2xl 
                                rounded-lg 
                                bg-white 
                                text-black'
                            >
                                <div className='mr-2 text-sm rounded-lg p-0.5'>
                                    <GiSmart className="text-xl md:text-3xl text-black"/>
                                </div>
                                <div className="hidden sm:block">Generative Art</div>
                                <div className="sm:hidden">NFT Art Collection</div>
                            </div>

                            <div className='
                                p-1
                                px-2
                                flex 
                                items-center 
                                justify-center
                                text-md 
                                md:text-2xl 
                                rounded-lg 
                                bg-blue-600 
                                text-white
                            '>
                                <div className='mr-2 text-sm rounded-lg p-0.5'>
                                    <GiToken className="text-xl md:text-3xl text-white"/>
                                </div>
                                <div className="hidden sm:block">Non Fungible Token</div>
                                <div className="sm:hidden">NFT Art Collection</div>
                            </div>
                            <div className='
                                    p-1
                                    px-2
                                    flex 
                                    items-center 
                                    justify-center
                                    text-lg 
                                    md:text-2xl 
                                    rounded-lg 
                                    bg-green-400
                                    text-black
                                '>
                                <div className='mr-2 text-sm rounded-lg p-0.5 hidden md:block'>
                                    <BsSafeFill className="text-xl md:text-3xl text-black"/>
                                </div>
                                <div>ERC721</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MetaverseReady