import Metamask from '../metamask/metamask'

function Mint() {
    
    return (
        <div id="mint" className="bg-mint">

            <div className="container">

                {/* <div className="row">
                    <div className="col-12 col-sm-12 mb-md-5">
                        <h3 className="mb-3">The First Movers Club will go multi-chain!</h3>
                        <p className="txt-normal tx-center">
                            Each First Mover will give you access to our forthcoming <u>NFT revenue monitoring system.</u> You 
                            have the choice to decide which home of the First Mover you want. 
                        </p>
                    </div>
                </div> */}

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mb-sm-3 mb-md-0">
                        <p className="txt-live">MINT IS <b>LIVE</b></p>
                        <p className="txt-pay">PAY WITH <b>METAMASK</b></p>
                        <p className="txt-price"><b>11 MATIC</b></p>
                        <p className="txt-small center opacity-75">Almost <b>zero gas fees</b>! Mint up to <b>10 NFTs/Transaction</b></p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 mt-sm-5 mt-md-0 mt-5">
                        <p className="txt-small left mb-4">
                            Add the <a href="https://metamask.io/" target="_blank" rel="noreferrer">metamask extension</a> and connect your wallet.
                            Get some <a href="https://coinmarketcap.com/currencies/polygon/markets/" target="_blank" rel="noreferrer">MATIC</a> tokens and if necessary <a href="https://wallet.polygon.technology/" target="_blank" rel="noreferrer">bridge</a> them to polygon network.
                        </p>
                        <Metamask />
                    </div>
                </div>

                {/* <div className="d-flex flex-wrap justify-content-center">
                    <div className="bg-color-main p-5 mb-md-4 mr-lg-5">
                    
                        <div className="tx-center">
                            <img className="img-40 mb-4" src={polygon_blank} alt="Polygon Chain" />
                        </div>

                        <p className="txt-normal tx-center">Track NFTs on Polygon</p>

                        <p className="txt-live mt-4"><b>MINT</b> IS LIVE</p>
                        <p className="txt-pay">ON <b>POLYGON</b> CHAIN</p>
                        <p className="txt-price"><b>11 MATIC</b></p>
                        <p className="txt-small mt-1">Mint 1 NFT/Wallet</p>
                        <Metamask />

                    </div>
                    <div className="bg-color-main p-5 opacity-75">
                        <div className="tx-center">
                            <img className="img-40 mb-4" src={ethereum} alt="Ethereum Chain" />
                        </div>
                        <p className="txt-normal tx-center">Track NFTs on other Chains</p>

                        <p className="txt-live mt-4"><b>MINT</b> SOON</p>
                        <p className="txt-pay">ON <b>OTHER EVM</b> CHAINS</p>
                        <p className="txt-price"><b>PRICE TBA</b></p>
                        <p className="txt-small mt-1">Mint 1 NFT/Wallet</p>
                        <div className="mt-4 tx-center">
                            <button className="btn btn-primary" onClick={connectWithMetamask} disabled>Connect with MetaMask</button>
                            <a href="https://metamask.io/" target="_blank" rel="noreferrer"><img className="metamask-logo" src={metamask} alt="Metamask Logo" /></a>
                        </div>
                    </div>
                </div> */}

                {/* <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mb-sm-3 mb-md-0">
                        <div className="p-5">
                            <div className="tx-center mb-5">
                                <img className="img-40" src={polygon_blank} alt="Polygon Chain" />
                            </div>
                            <p className="txt-live"><b>MINT</b> IS LIVE</p>
                            <p className="txt-pay">ON <b>POLYGON</b> CHAIN</p>
                            <p className="txt-price"><b>11 MATIC</b></p>
                            <p className="txt-small mt-1">No gas fees! Mint up to 10 NFTs/Transaction.</p>
                            <Metamask />
                        </div>
                        <p className="txt-small left mb-4">
                            Add the <a href="https://metamask.io/" target="_blank">metamask extension</a> and connect your wallet.
                            Get some <a href="https://coinmarketcap.com/currencies/polygon/markets/" target="_blank">MATIC</a> tokens and if necessary <a href="https://wallet.polygon.technology/" target="_blank">bridge</a> them to polygon network.
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 mt-sm-5 mt-md-0 mt-5 tx-center">
                        <div className="p-5">
                            <div className="tx-center mb-5">
                                <img className="img-40" src={ethereum} alt="Ethereum Chain" />
                            </div>
                            <p className="txt-live"><b>MINT</b> SOON</p>
                            <p className="txt-pay"><b>ETHEREUM</b> CHAIN</p>
                            <p className="txt-price"><b>PRICE TBA</b></p>
                            <p className="txt-small mt-1">34 GWEI! Mint up to 10 NFTs/Transaction.</p>
                            <div className="mt-5 tx-center">
                                <button className="btn btn-primary" onClick={connectWithMetamask} disabled>Connect with MetaMask</button>
                                <a href="https://metamask.io/" target="_blank"><img className="metamask-logo" src={metamask} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 mb-md-5">
                        <p className="txt-normal tx-center">Access to our upcoming NFT income tracker is granted by every first mover.</p>
                    </div>
                </div> */}
                
            </div>

        </div>
    )
}

export default Mint