import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { writeofcolumn, WriteofcolumnType } from '@/lib/utils'

 
// Define the initial state using that type
const initialState : WriteofcolumnType[] =  writeofcolumn;

type ChangeStatusPayload = {
  id: number;
  status: string;
};



export const writeoffSlice = createSlice({
  name: 'writeoff',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeWriteoffStatus(state, action: PayloadAction<ChangeStatusPayload>) {
      const patient = state.find(p => p.id === action.payload.id);
      if (patient) {
        patient.status = action.payload.status;
      }
    },
  },
})

export const { changeWriteoffStatus } = writeoffSlice.actions

export default writeoffSlice.reducer