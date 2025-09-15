import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { patientPersona } from "@/lib/mockPersona";
import { ICDCode, PatientPersona } from "@/types/patient";

// Define the initial state using that type
const initialState: PatientPersona[] = patientPersona;

export const patientSlice = createSlice({
  name: "patientlist",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setInitialPatients(state, action: PayloadAction<PatientPersona[]>) {
      return action.payload;
    },
    deletePatient: (state, action: PayloadAction<string>) =>
      state.filter((p) => p.id !== action.payload),
    markPatientSubmitted(state, action: PayloadAction<string>) {
      const patient = state.find((p) => p.id === action.payload);
      if (patient) {
        patient.isSubmitted = true;
      }
    },
    updatePatientICDCode(
      state,
      action: PayloadAction<{
        patientId: string;
        icdId: string;
        updatedICD: Partial<ICDCode>;
        type: string;
      }>
    ) {
      const { patientId, icdId, updatedICD, type } = action.payload;

      const patient = state.find((p) => p.id === patientId);
      if (patient) {
        if (type == "icd") {
          const code = patient.icdCodes.find((i) => i.id === icdId);

          if (code) {
            Object.assign(code, updatedICD);
          }
        }

         if (type == "cpt") {
          const code = patient.cptCode.find((i) => i.id === icdId);

          if (code) {
            Object.assign(code, updatedICD);
          }
        }
      }
    },
    addPatientICDCode(
      state,
      action: PayloadAction<{
        patientId: string;
        newICD: ICDCode;
        type: string;
      }>
    ) {
      const { patientId, newICD, type } = action.payload;
      const patient = state.find((p) => p.id === patientId);
      if (patient) {
        switch (type) {
          case "icd":
            patient.icdCodes.push(newICD);
            return;
          case "cpt":
            patient.cptCode.push(newICD);
            return;
        }
      }
    },
    deletePatientICDCode(
      state,
      action: PayloadAction<{
        patientId: string;
        icdId: string;
        type: string;
      }>
    ) {
      const { patientId, icdId, type } = action.payload;
      const patient = state.find((p) => p.id === patientId);
      if (patient) {
        console.log(type);
        switch (type) {
          case "icd":
            patient.icdCodes = patient.icdCodes.filter((i) => i.id !== icdId);
            return;
          case "cpt":
            patient.cptCode = patient.cptCode.filter((i) => i.id !== icdId);
            return;
        }
      }
    },
  },
});

export const {
  deletePatient,
  setInitialPatients,
  markPatientSubmitted,
  updatePatientICDCode,
  addPatientICDCode,
  deletePatientICDCode,
} = patientSlice.actions;

export default patientSlice.reducer;
