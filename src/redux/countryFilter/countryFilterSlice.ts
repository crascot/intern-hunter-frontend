import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import india from '../../icons/countries/india.svg'

export interface CountryFilterState {
    currentCountry: {flag: string, country: string}
}

const initialState = {
    currentCountry: {flag: india, country: 'India'}
} as CountryFilterState

export const countryFilterSlice = createSlice({
  name: 'countryFilter',
  initialState,
  reducers: {
    addCurrentCountry: (state, action) => {
      state.currentCountry = action.payload
    }
  }
})

export const { addCurrentCountry } = countryFilterSlice.actions
export const selectContryFilter = (state:RootState) => state.countryFilter.currentCountry
export default countryFilterSlice.reducer