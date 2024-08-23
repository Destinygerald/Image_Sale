import { createSlice } from '@reduxjs/toolkit'

const ProfileSlicer = createSlice({
	name: 'profile',
	initialState: { value: {} },
	reducers: {
		setProfile: (state, actions) => {
			state.value = actions.payload
		}
	}
})

export default ProfileSlicer.reducer

const { setProfile } = ProfileSlicer.actions