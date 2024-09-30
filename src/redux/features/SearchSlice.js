import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { reqHistograms, reqObjectSearch, reqDocuments } from '../../requests/requests';

export const searchRequest = createAsyncThunk(
    'search/searchRequest',
    async (state, { rejectWithValue }) => {
        try {
            const response = await reqHistograms(state);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

export const docRequest = createAsyncThunk(
    'search/docRequest',
    async (state, { rejectWithValue }) => {
        try {
            const response = await reqObjectSearch(state);
            let ids = [];
            response.data.items.forEach(item => ids.push(item.encodedId));
            const docsResponse = await reqDocuments({ ids: ids.slice(0, 100) });
            return docsResponse.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

const initialState = {
    histogramsLoading: false,
    docsLoading: false,
    histograms: [],
    documents: [],
    searchParams: {
        // инициализация других параметров
    },
};

// Создание среза
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setStartDate(state, action) {
            state.searchParams.issueDateInterval.startDate = action.payload;
        },
        setEndDate(state, action) {
            state.searchParams.issueDateInterval.endDate = action.payload;
        },
        setINN(state, action) {
            state.searchParams.searchContext.targetSearchEntitiesContext.targetSearchEntities[0].inn = action.payload;
        },
        setLimit(state, action) {
            state.searchParams.limit = action.payload;
        },
        setTonality(state, action) {
            state.searchParams.searchContext.targetSearchEntitiesContext.tonality = action.payload;
        },
        setChecks(state, action) {
            const { fullness, inNews, mainRole, risk, techNews, announcements, digests } = action.payload;
            const targetEntity = state.searchParams.searchContext.targetSearchEntitiesContext.targetSearchEntities[0];

            targetEntity.maxFullness = fullness;
            targetEntity.inBusinessNews = inNews;
            state.searchParams.searchContext.targetSearchEntitiesContext.onlyMainRole = mainRole;
            state.searchParams.searchContext.targetSearchEntitiesContext.onlyWithRiskFactors = risk;
            state.searchParams.searchContext.targetSearchEntitiesContext.attributeFilters.excludeTechNews = techNews;
            state.searchParams.searchContext.targetSearchEntitiesContext.attributeFilters.excludeAnnouncements = announcements;
            state.searchParams.searchContext.targetSearchEntitiesContext.attributeFilters.excludeDigests = digests;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchRequest.pending, (state) => {
                state.histogramsLoading = true;
            })
            .addCase(searchRequest.fulfilled, (state, action) => {
                state.histograms = action.payload;
                state.histogramsLoading = false;
            })
            .addCase(searchRequest.rejected, (state, action) => {
                state.histogramsLoading = false;
                state.error = action.payload;
            })
            .addCase(docRequest.pending, (state) => {
                state.docsLoading = true;
            })
            .addCase(docRequest.fulfilled, (state, action) => {
                state.docsLoading = false;
                state.documents = action.payload;
            })
            .addCase(docRequest.rejected, (state, action) => {
                state.docsLoading = false;
                state.error = action.payload;
            });
    }
});

// Экспорт действий
export const { setStartDate, setEndDate, setINN, setLimit, setTonality, setChecks } = searchSlice.actions;

// Экспорт редюсера по умолчанию
export default searchSlice.reducer;