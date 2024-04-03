const Items = () => {

    return (
        <>
            <div id="items" className='w-full bg-[#7c12c2]'>
                <div className='flex items-center justify-center'>
                    <div className="relative px-5 2xl:px-0 max-w-screen-2xl 2xl:max-w-screen-2xl py-20">
                        <div className="px-3 md:px-24 flex flex-col items-center">
                            <h2 className="
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
                            >Dogs, Rockets, Lambos, Unicorns</h2>
                            <p className="mb-10 text-2xl sm:text-2xl md:text-3xl text-center !leading-[2.5rem]">
                            The First Movers introduced terms like “to the m00n” or “when lambo”. 
                            Because of this, some First Movers have special items inspired by crypto and memes.
                            </p>
                            <div className='flex flex-row flex-wrap items-center justify-center'>
                                <div>
                                    <img src="images/doge_family.png" width={350}/>
                                </div>
                                <div>
                                    <img src="images/special_items.png" width={200}/>
                                </div>
                                <div>
                                    <img src="images/rockets.png" width={160}/>
                                </div>
                                <div>
                                    <img src="images/unicorns.png" width={300}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items