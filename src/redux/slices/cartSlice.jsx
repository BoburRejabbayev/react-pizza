import { createSlice } from "@reduxjs/toolkit/dist";


const initialState = {
    item: [],
    totalPrice: 0
}

console.log(initialState.item);


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {

            const findItem = state.item.find((obj) => (obj.id === action.payload.id && obj.types === action.payload.types && obj.sizes === action.payload.sizes))

            if (findItem) {
                if (findItem.count >= 5) {
                    alert('5tadan kop mumkinmas')
                }
                else findItem.count += 1
            } else {
                state.item.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.totalPrice = state.item.reduce((sum, obj) => (
                obj.price * obj.count + sum
            ), 0)

            // state.item.push(action.payload)
        },
        removeCount(state, action) {
            const findItem = state.item.find((obj) => (obj.id === action.payload.id && obj.types === action.payload.types && obj.sizes === action.payload.sizes))
            if (findItem) {
                findItem.count -= 1
            }
            if (findItem.count < 1) {
                state.item = state.item.filter((obj) => (obj.id !== action.payload.id || obj.types !== action.payload.types || obj.sizes !== action.payload.sizes))
            }
            state.totalPrice = state.item.reduce((sum, obj) => (
                obj.price * obj.count + sum
            ), 0)
        },
        removeItem(state, action) {
            state.item = state.item.filter(obj => (obj.id !== action.payload.id || obj.types !== action.payload.types || obj.sizes !== action.payload.sizes))
            state.totalPrice = state.item.reduce((sum, obj) => (
                obj.price * obj.count + sum
            ), 0)
        },
        clearCart(state) {
            state.item = []
            state.totalPrice = 0
        }
    }
})

export const { addItem, removeItem, removeCount, clearCart } = cartSlice.actions

export default cartSlice.reducer