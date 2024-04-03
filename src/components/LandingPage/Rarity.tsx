const Rarity = () => {
    const url = "images/bg-scenes/bg-rarity.jpg";
    return (
        <>
            <div id="rarity" className="w-full bg-cover" style={{ backgroundImage: `url(${url})`}}>

                <div className='flex items-center justify-center min-h-[calc(100vh-70px)]'>
                    <div className='py-36 px-10 2xl:px-0 max-w-screen-lg'>
                        <div className='bg-blue-600 border-blue-300 rounded-md border-[12px] p-5 md:p-10 mb-5'>
                            <div className="mb-10">
                                <h2 className="text-left text-2xl md:text-5xl mb-5 uppercase">NFT Collection info</h2>
                                <p className="text-left text-xl md:text-2xl font-light md:font-extralight">
                                    This NFT Collection was created without any involvement of AI. 
                                    Each part of a First Mover is crafted by hand with the help of Blender 3D.                              
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="w-12/12 md:w-6/12 flex flex-col gap-2">
                                    <h4 className="mb-3 text-2xl md:text-4xl underline">First Movers</h4>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">1,111</div>
                                        <div className="text-xl md:text-2xl w-9/12">Total Supply</div>
                                    </div>
                                    <div className="px-2 flex flex-row justify-left">
                                        <div className="text-xl md:text-2xl w-3/12">321</div>
                                        <div className="text-xl md:text-2xl w-9/12">Traits</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">15</div>
                                        <div className="text-xl md:text-2xl w-9/12">Categories</div>
                                    </div>
                                    <div className="px-2 flex flex-row justify-left">
                                        <div className="text-xl md:text-2xl w-3/12">574</div>
                                        <div className="text-xl md:text-2xl w-9/12">Male</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">537</div>
                                        <div className="text-xl md:text-2xl w-9/12">Female</div>
                                    </div>
                                    <div className="px-2 flex flex-row justify-left">
                                        <div className="text-xl md:text-2xl w-3/12">670</div>
                                        <div className="text-xl md:text-2xl w-9/12">Humans</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">441</div>
                                        <div className="text-xl md:text-2xl w-9/12">Cyclops</div>
                                    </div>

                                    <h4 className="mt-5 mb-3 text-2xl md:text-4xl underline">Types</h4>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">11</div>
                                        <div className="text-xl md:text-2xl w-9/12">Unique NFTs</div>
                                    </div>
                                    <div className="px-2 flex flex-row justify-left">
                                        <div className="text-xl md:text-2xl w-3/12">147</div>
                                        <div className="text-xl md:text-2xl w-9/12">Rare NFTs</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">955</div>
                                        <div className="text-xl md:text-2xl w-9/12">Common NFTs</div>
                                    </div>
                                </div>

                                <div className="w-12/12 md:w-6/12 flex flex-col gap-2">
                                    <h4 className="mb-3 text-2xl md:text-4xl underline">Categories</h4>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">44</div>
                                        <div className="text-xl md:text-2xl w-9/12">Crypto Shirts</div>
                                    </div>
                                    <div className="px-2 flex flex-row justify-lef">
                                        <div className="text-xl md:text-2xl w-3/12">35</div>
                                        <div className="text-xl md:text-2xl w-9/12">Glasses</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">31</div>
                                        <div className="text-xl md:text-2xl w-9/12">Headgear</div>
                                    </div>
                                    <div className="px-2 flex flex-row justify-lef">
                                        <div className="text-xl md:text-2xl w-3/12">29</div>
                                        <div className="text-xl md:text-2xl w-9/12">Crypto Accessory</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">28</div>
                                        <div className="text-xl md:text-2xl w-9/12">Crypto Patches</div>
                                    </div>
                                    <div className="px-2 flex flex-row justify-lef">
                                        <div className="text-xl md:text-2xl w-3/12">24</div>
                                        <div className="text-xl md:text-2xl w-9/12">Eyes</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">17</div>
                                        <div className="text-xl md:text-2xl w-9/12">Hair Styles</div>
                                    </div>
                                    <div className="px-2 flex flex-row justify-lef">
                                        <div className="text-xl md:text-2xl w-3/12">17</div>
                                        <div className="text-xl md:text-2xl w-9/12">Shoes</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">16</div>
                                        <div className="text-xl md:text-2xl w-9/12">Shirt Accessory</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-lef">
                                        <div className="text-xl md:text-2xl w-3/12">16</div>
                                        <div className="text-xl md:text-2xl w-9/12">Mouth</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">14</div>
                                        <div className="text-xl md:text-2xl w-9/12">Heads</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-lef">
                                        <div className="text-xl md:text-2xl w-3/12">14</div>
                                        <div className="text-xl md:text-2xl w-9/12">Backgounds</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">12</div>
                                        <div className="text-xl md:text-2xl w-9/12">Pants</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-lef">
                                        <div className="text-xl md:text-2xl w-3/12">12</div>
                                        <div className="text-xl md:text-2xl w-9/12">Shirt Colors</div>
                                    </div>
                                    <div className="p-1 px-2 flex flex-row justify-left bg-blue-300/20 rounded-md">
                                        <div className="text-xl md:text-2xl w-3/12">11</div>
                                        <div className="text-xl md:text-2xl w-9/12">Dresses</div>
                                    </div>
                                </div>  

                            </div>
                        <div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Rarity