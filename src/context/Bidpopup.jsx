import { createSlice } from '@reduxjs/toolkit'

const PopupSlicer = createSlice({
	name: 'bid_popup',
	initialState: { value: false },
	reducers: {
		openPopup: (state, actions) => {
			state.value = true
		},

		closePopup: (state, actions) => {
			state.value = false
		}
	}
})

export default PopupSlicer.reducer

export const { openPopup, closePopup } = PopupSlicer.actions