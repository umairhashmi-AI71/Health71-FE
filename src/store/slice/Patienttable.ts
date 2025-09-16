import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { writeofcolumn, WriteofcolumnType } from '@/lib/utils'
import { partialapprovalData, PaymentDetailsSchema } from '@/components/ui/calldef/paymentDetails';

 
// Define the initial state using that type
const initialState : PaymentDetailsSchema[] =  partialapprovalData;

type ChangeStatusPayload = {
  id: number;
  status: string;
};



export const patientTable = createSlice({
  name: 'paymenttableData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   deletetableData: (state, action: PayloadAction<number>) =>
      state.filter((p) => p.id !== action.payload),
  },
})

export const { deletetableData } = patientTable.actions

export default patientTable.reducer