import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import logisticsReducer from './features/logisticsSlice'

export default configureStore({
  reducer: {
    basket: basketReducer,
    logistics: logisticsReducer,
  }
})