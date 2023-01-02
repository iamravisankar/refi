import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Asset } from '../../models/asset'

type InitialState = {
    loading: boolean
    assets: Asset[]
    error: string
}

const initialState: InitialState = {
    loading: false,
    assets: [],
    error: ''
}

export const fetchTrendingAssets = createAsyncThunk('trendingAssets', () => {
    return axios
        .get('https://backend.onstep.in/relative/trending-assets.json')
        .then(response => response.data)
})

const changePrice = (asset: Asset) => {
    let randomNumber = Math.random() * (1.2 - 0.8) + 0.8;
    if (Math.random() < 0.5) {
        return asset;
    }
    let tempAsset = { ...asset };
    tempAsset.price = Math.round(asset.price * randomNumber * 1000) / 1000;
    tempAsset.percentageChange = Math.round(asset.percentageChange * randomNumber * 100) / 100;
    return tempAsset
}

export const round = async (trendingAssets: Asset[]) => {
    let tempTrendingAssets = [...trendingAssets];

    tempTrendingAssets = await trendingAssets.map((asset) => {
        return changePrice(asset);
    });
    return tempTrendingAssets;
}


const trendingAssetsSlice = createSlice({
    name: 'trendingAssets',
    initialState,
    reducers: {
        update: (state, action) => {
            state.assets = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTrendingAssets.pending, state => {
            state.loading = true
        })
        builder.addCase(
            fetchTrendingAssets.fulfilled,
            (state, action: PayloadAction<Asset[]>) => {
                state.loading = false
                state.assets = action.payload
                state.error = ''
            }
        )
        builder.addCase(fetchTrendingAssets.rejected, (state, action) => {
            state.loading = false
            state.assets = []
            state.error = action.error.message || 'Something went wrong'
        })
    }

})


export const { update } = trendingAssetsSlice.actions;
export default trendingAssetsSlice.reducer;
