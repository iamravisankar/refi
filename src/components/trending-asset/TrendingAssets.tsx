import React, { useEffect } from 'react'
import { AssetCard } from '../asset-card/AssetCard';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchTrendingAssets, update, getRandomData } from '../../reducers/trending/trendingAssetsSlice'


export const TrendingAssets = () => {
    const trendingAssets = useAppSelector(state => state.trendingAssets.assets);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTrendingAssets());
    }, []);

    useEffect(() => {
        const interval = setInterval(async () => dispatch(update(await getRandomData(trendingAssets))
        ), 2000);
        return () => {
            clearInterval(interval);
        };
    }, [trendingAssets]);

    return (
        <div className="flex flex-col m-auto p-auto">
            <div className="flex flex-nowrap  pt-20 md:pl-16 pl-8 title">
                <img src='activity.svg' className='title-img my-auto mr-2' />
                <div className=' text-[#ECF0FF] '>Trending Assets</div>
            </div>

            <div className="flex overflow-x-scroll h-[550px] pt-[100px] hide-scroll-bar">
                <div className="flex flex-nowrap lg:ml-10">
                    {trendingAssets.map(asset => (
                        <div className="inline-block px-5" key={asset.id}>
                            <AssetCard  {...asset} />
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}
