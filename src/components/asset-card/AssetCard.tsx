import './AssetCard.scss';
import { Asset } from '../../models/asset'


export const AssetCard = (asset: Asset) => {
    //  let bg = 'linear-gradient(180deg, #626a881a 0%, #eab3000f 100%)';
    return (
        <div className='asset-card flex justify-center items-start relative w-[285px] h-[340px] rounded-t-[20px] rounded-b-[15px] border border-b-0 border-solid lg:backdrop-blur-3xl'>
            <div className="asset-card__logo-border absolute w-[111px] h-[102px] rounded-b-[100px] mt-[-45px] border-0">
            </div>

            <div className="asset-card__logo w-[110px] h-[101px] relative rounded-b-[100px] flex justify-center mt-[-45px]">
                <div className="asset-card__logo-container w-[90px] h-[90px] flex items-center justify-center z-10 rounded-full lg:backdrop-blur-3xl" style={{ background: `${asset.backgroundColor}` }}>
                    <div className='asset-card__logo-background flex items-center justify-center w-[45px] h-[45px] rounded-full'>
                        <img className='asset-card__logo-container__img' src={asset.imgUrl} />
                    </div>
                </div>
            </div>

            <div className="asset-card__details flex flex-col items-center w-full h-full mt-[70px] absolute bg-transparent">
                <div className="asset-card__details__asset-name text-center bg-transparent opacity-90 leading-[31px] text-[12px] font-semibold mb-2"> {asset.name}({asset.symbol})</div>

                <div className="asset-card__details__value-container w-4/5 text-center rounded-[17px] opacity-90 font-semibold leading-[31px] text-[16px]">
                    ${asset.price}
                    <span className={"asset-card__details__price-change absolute float-right bg-transparent text-center w-[50px] font-semibold leading-[31px] text-[12px] ml-[8px] " + (asset.percentageChange < 0 ? 'asset-card__details__price-change__negative' : '')} >{asset.percentageChange}%  </span>
                    <div className='asset-card__details__value-container-border rounded-[17px] absolute w-4/5 h-[31px] mt-[-31px]'></div>
                    <div className='asset-card__details__value-container-background rounded-[17px] absolute w-4/5 h-[31px] mt-[-30px]'></div>

                </div>
                <div className="asset-card__details__title bg-transparent text-center opacity-90 leading-[31px] text-[12px] font-semibold mb-2">Price</div>
                <div className="asset-card__details__value-container w-4/5 text-center rounded-[17px] opacity-90 font-semibold leading-[31px] text-[16px]">
                    ${asset.tvl}
                    <div className='asset-card__details__value-container-border rounded-[17px] absolute w-4/5 h-[31px] mt-[-31px]'></div>
                    <div className='asset-card__details__value-container-background rounded-[17px] absolute w-4/5 h-[31px] mt-[-30px]'></div>
                </div>
                <div className="asset-card__details__title bg-transparent text-center opacity-90 leading-[31px] text-[12px] font-semibold mb-2">TVL</div>
                <div className="asset-card__details__value-container w-auto text-center rounded-[17px] px-[8px] py-[3px] flex justify-center">
                    {asset.popularParings.map((pair, index) => (
                        <img className="asset-card__details__pairs-img h-[22px] m-[4px]" key={index} src={pair.imgUrl} />
                    ))}

                </div>
                <div className="asset-card__details__title bg-transparent text-center opacity-90 leading-[31px] text-[12px] font-semibold mb-2">Popular pairs</div>
            </div>
        </div>
    )
}