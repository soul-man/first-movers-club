import Image from 'next/image';
import { MdOutlineRocketLaunch } from "react-icons/md";

const Collection = () => {
    return (
        <div id="nft-collection" className='w-full bg-[#7c12c2]'>
            <div className='flex items-center justify-center'>
                <div className='relative px-5 max-w-screen-xl 2xl:max-w-screen-2xl py-20'>
                    <div className='absolute top-[-50%] left-[22%]'>
                        <MdOutlineRocketLaunch className='text-[900px] hidden text-blue-400/10 rotate-[10deg]'/>
                    </div>

                    <div className='flex flex-col lg:flex-row px-3 gap-10'>
                        <div className="w-12/12 lg:w-7/12">
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
                            <p className="text-2xl font-medium sm:text-2xl md:text-3xl mb-5 !leading-[2rem] md:!leading-[2.3rem]">
                                The First Movers capture the spirit of the crypto community and pays tribute to the OGs and the early crypto adopters back to 2017. 
                                Together they have weathered the storms of scams, hacks and #crypto-winters.
                            </p>
                            <p className="text-2xl sm:text-xl md:text-2xl font-light mb-7 !leading-[1.7rem] md:!leading-[2.3rem]">
                                Each First Mover draws inspiration from our very own crypto experiences and is an opportunity to see crypto with a smile and just keep going!
                                Yet they continue to believe in the potential of crypto and its ability to revolutionize the world.
                            </p>
                            {/* <p className="text-2xl font-thin mb-4">
                                Each First Mover draws inspiration from our very own crypto experiences and is an opportunity to see crypto with a smile and just keep going!
                            </p> */}
                            <p className="text-lg sm:text-xl font-bold">
                                "Once a First Mover - always a First Mover" 
                            </p>
                        </div>
                        <div className="w-12/12 lg:w-5/12 items-center justify-end hidden lg:flex">
                            <Image 
                                src="/images/permabull_1.png" 
                                alt='First Mover with ahodl bag'
                                className="w-[300px] lg:w-[400px] xl:w-[500px]"
                                width={300}
                                height={400}
                            />
                        </div>


                    </div>
                </div>
            </div>
        </div>


        // <div id="collection" className="bg-collection">
        //     <div className="container">
        //         <div className="row mb-4">
        //             <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        //                 <p className="txt-top-headline mb-2">
        //                     A tribute to the crypto community
        //                 </p>
        //                 <h3 className="mb-5">Who are the First Movers</h3>
        //                 <p className="txt-normal mt-4">
        //                     This NFT collection captures the spirit of the crypto community and pays tribute to the pioneers and enthusiasts of the crypto space. 
        //                     The First Movers are not just cute little figures, but symbols of perseverance and resilience in the face of challenges. 
        //                     These individuals have weathered the storms of scams, hacks, and winters, 
        //                     yet they continue to believe in the potential of crypto and its ability to revolutionize the world.
        //                 </p>
        //                 <p className="txt-normal mt-4">
        //                     Each First Mover draws inspiration from our very own crypto experiences and is an opportunity to see crypto with a smile and just keep going!
        //                     Whether you are a seasoned investor or a newcomer to the world of cryptocurrency, 
        //                     these figures are a reminder that we are all in this together.
        //                 </p>
        //                 <p className="txt-normal mt-4">
        //                     "Once a First Mover - always a First Mover" 
        //                 </p>
        //             </div>
        //         </div>

        //         <div className="row mt-5 justify-content-center">
        //             <div className="col-6 col-sm-6 col-md-4 col-lg-4">
        //                 <p className="txt-box-header">SUPPLY</p>
        //                 <p className="txt-box-text">1,111</p>
        //             </div>
        //             <div className="col-6 col-sm-6 col-md-4 col-lg-4">
        //                 <p className="txt-box-header">TRAITS</p>
        //                 <p className="txt-box-text">320+</p>
        //             </div>
        //             <div className="col-12 mt-4 mt-sm-4 mt-md-0 col-sm-12 col-md-4 col-lg-4">
        //                 <p className="txt-box-header">CATEGORIES</p>
        //                 <p className="txt-box-text">16</p>
        //             </div>
        //         </div>

        //         <div className="row mt-5">
        //             <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        //                 {/* <p className="txt-small">
        //                     Each of the <b>1,111 NFTs</b> exists as a randomly generated ERC-721 token on the Polygon blockchain.
        //                     The collection focuses on crypto-related wording, famous memes and many colors. 
        //                     The inspiration behind is pure crypto and the experiences that each of us had to make in the crypto space.
        //                 </p> */}
        //                 <p className="txt-small opacity-75">
        //                 Each of the <b>1,111 NFTs</b> stands as a distinct ERC-721 
        //                 token on the Polygon blockchain, generated at random. The collection encapsulates the vibrant aura of 
        //                 the crypto space, with a focus on crypto-related wording, iconic memes, and an eclectic spectrum of 
        //                 colors.
        //                 </p>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    )
}

export default Collection