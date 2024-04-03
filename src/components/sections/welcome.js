import polygon from '../../img/polygon.png';
import opensea from '../../img/opensea.png';

function Welcome() {
    return (
        <>
            <div className="bg-welcome">
                <div className="container">

                    <div className="row">
                        <div className="col-12 col-xs-7 col-sm-12 col-md-7 col-lg-8 col-xl-8">
                            <div className="hero__left">

                                <p className="txt-sub-headline">
                                    <b>NFT COLLECTION</b>
                                </p>

                                <h1 className="page-title">The First Movers Club</h1>

                                <h2 className="mt-4 mb-2 mt-xs-3 mt-sm-3 mt-md-4 mt-lg-4 mt-xl-4">
                                    We are the survivors of Mt.Gox, The DAO and Crypto Winter.
                                    We brought skin into play when NEO was still called Antshares. We received 100k XRP as an airdrop.
                                    We know what a hard fork feels like. <b>We are the FirstMovers!</b>
                                </h2>

                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row mt-4 mt-sm-4  poly align-items-center">
                            <a href="#mint"><button className="btn btn-secondary mr-4">Mint NFTs</button></a>
                            <img className="polygon pr-3" id="polygon-logo" src={polygon} alt="Polygon Chain" />
                            <img className="pr-3 opensea" id="opensea-logo" src={opensea} alt="Opensea" />
                    </div>

                </div>
            </div>

            <div className="bg-welcome-helper">
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome