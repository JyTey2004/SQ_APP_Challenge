import { createSlice } from '@reduxjs/toolkit'

export const LogisticsSlice = createSlice({
  name: 'Logistics',
  initialState: {
    items: []
  },
  reducers: {
    addToLogistics: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromLogistics: (state, action) => {
    const index = state.items.findIndex((item) => item.id === action.payload.id)

    let newLogistics = [...state.items]

    if (index >= 0) {
        newLogistics.splice(index, 1)
    } else {
        console.warn(
            `Can't remove product (id: ${action.payload.id}) as it's not in Logistics`
        )
    }

    state.items = newLogistics;
    },
  },
  clearLogistics: (state) => {
    state.items = [];
  }
})

// Action creators are generated for each case reducer function
export const { addToLogistics, removeFromLogistics, clearLogistics } = LogisticsSlice.actions

export const selectLogisticsItems = state => state.Logistics.items;

export const selectLogisticsItemsWithId = (state, id) => state.Logistics.items.filter((item) => item.id === id)

export const selectLogisticsTotal = (state) => state.Logistics.items.reduce((total, item) => total += item.price, 0)

export default LogisticsSlice.reducer