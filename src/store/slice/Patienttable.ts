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
   updateStatus: (state, action: PayloadAction<ChangeStatusPayload>) => {
       const payment = state.find(p => p.id === action.payload.id);
      if (payment) {
        payment.status = action.payload.status;
      }
   }
     
  },
})

export const { updateStatus } = patientTable.actions

export default patientTable.reducer