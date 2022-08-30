import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DataState {
  trainId: string
}

const initialState: DataState = {
  trainId: '1',
}

const reducers = {
  setTrainId: (state: DataState, action: PayloadAction<string>) => {
    state.trainId = action.payload
  },
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
})
export const getTrainId = (state: DataState): string => state.trainId
export default reducer
export const { setTrainId } = actions
