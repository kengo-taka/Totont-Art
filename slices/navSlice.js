import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  torontData: null,
  showData: null,
  searchKeyWord: "Title",
  searchInput: "",
  showState: "list"
}

export const navSlice = createSlice(
  {
    name: "nav",
    initialState,
    reducers: {
      setTorontData: (state, action) => {
        state.torontData = action.payload
      },
      setShowData: (state, action) => {
        state.showData = action.payload
      },
      setSearchKeyWord: (state, action) => {
        state.searchKeyWord = action.payload
      },
      setSearchInput: (state, action) => {
        state.searchInput = action.payload.toLowerCase()
      },
      setShowState: (state, action) => {
        state.showState = action.payload
      }
    }
  }
)

export const { setTorontData, setSearchKeyWord, setSearchInput, setShowData, setShowState } = navSlice.actions
export const selectTorontData = (state) => state.nav.torontData
export const selectShowData = (state) => state.nav.showData
export const selectSearchKeyWord = (state) => state.nav.searchKeyWord
export const selectSearchInput = (state) => state.nav.searchInput
export const selectShowState = (state) => state.nav.showState
export default navSlice.reducer