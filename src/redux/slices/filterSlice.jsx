import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sortId: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
            // console.log(action);
        },
        setSortId(state, action) {
            state.sortId = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setFilterlice(state, action) {
            state.currentPage = Number(action.payload.currentPage)
            state.sortId = action.payload.sortId
            state.categoryId = Number(action.payload.categoryId)
        }
    }
})

export const { setCategoryId, setSortId, setCurrentPage, setFilters } = filterSlice.actions;

export const selectFilterSlice = (el) => el.filterSlice


export default filterSlice.reducer;