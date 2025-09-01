import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { patientPersona } from '@/lib/mockPersona'
import { PatientPersona } from '@/types/patient'

// Define the initial state using that type
const initialState: PatientPersona[] = patientPersona;

export const patientSlice = createSlice({
  name: 'patientlist',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
     setInitialPatients(state, action: PayloadAction<PatientPersona[]>) {
      return action.payload;
    },
    deletePatient : (state, action: PayloadAction<string>) =>  state.filter(p => p.id !== action.payload),
    markPatientSubmitted(state, action: PayloadAction<string>) {
      const patient = state.find(p => p.id === action.payload);
      if (patient) {
        patient.isSubmitted = true;
      }
    },
  },
})

export const { deletePatient, setInitialPatients, markPatientSubmitted } = patientSlice.actions

export default patientSlice.reducer