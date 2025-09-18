import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { patientPersona } from "@/lib/mockPersona";
import { ICDCode, PatientPersona } from "@/types/patient";
import { ErrorCode, ErrorType } from "@/types/error";

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
          const code = patient.icdCodes.find((i) => i.code === icdId);

          if (code) {
            Object.assign(code, updatedICD);
          }
        }

        if (type == "cpt") {
          const code = patient.cptCode.find((i) => i.code === icdId);

          if (code) {
            Object.assign(code, updatedICD);
          }
        }
        if (type == "drug") {
          const code = patient.drugCode.find((i) => i.code === icdId);

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
          case "drug":
            patient.drugCode.push(newICD);
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
        switch (type) {
          case "icd":
            patient.icdCodes = patient.icdCodes.filter((i) => i.code !== icdId);
            return;
          case "cpt":
            patient.cptCode = patient.cptCode.filter((i) => i.code !== icdId);
            return;
          case "drug":
            patient.drugCode = patient.drugCode.filter((i) => i.code !== icdId);
            return;
        }
      }
    },
    changeErrorCode(
      state,
      action: PayloadAction<{
        patientId: string;
        errorType: ErrorCode;
        errorTitle : string;

                                    errorMessage: string;
      }>
    ) {
      const { patientId, errorType, errorTitle,
                                    errorMessage } = action.payload;
      const patient = state.find((p) => p.id === patientId);

      if (patient && patient.information) {
        patient.information.infoCode = errorType;
        patient.information.infoType = errorTitle;
        patient.information.infoMessage = errorMessage;
       
      }
    },
    updatePaymentStep(
      state,
      action: PayloadAction<{
        patientId: string;
        title: string;
      }>
    ) {
      const { patientId, title } = action.payload;
      const patient = state.find((p) => p.id === patientId);

      if (patient && patient.postPayment.steps) {
        const step = patient.postPayment.steps.find(
          (s) => s.label === title
        );

        if (step) {
          step.status = "completed";
        }
      }
    },
    changeCodeStatus(
      state,
      action: PayloadAction<{
        patientId: string;
        code: string;
        status: string,
        type: string,
      }>
    ) {

      const { patientId, code, status, type } = action.payload;
      const patient = state.find((p) => p.id === patientId);
      

      if(type == 'icd') {
        const  step = patient?.icdCodes.find((s) => s.code === code);
        if (step) {
        step.status = status;
      }
      }
      if(type == 'cpt') {
        const  step = patient?.cptCode.find((s) => s.code === code);
        if (step) {
        step.status = status;
      }
      }
       if(type == 'drug') {
        const  step = patient?.drugCode.find((s) => s.code === code);
        if (step) {
        step.status = status;
      }
      }
      
      
    },
    changeStatus(
      state,
      action: PayloadAction<{
        patientId: string;
      }>
    ) {
      const { patientId } = action.payload;
      const patient = state.find((p) => p.id === patientId);

      if (patient && patient.postPayment) {

        if (patient.postPayment) {
          patient.postPayment.status = "done";
        }
      }
    }
  },
});

export const {
  deletePatient,
  setInitialPatients,
  markPatientSubmitted,
  updatePatientICDCode,
  addPatientICDCode,
  deletePatientICDCode,
  changeErrorCode,
  updatePaymentStep,
  changeStatus,
  changeCodeStatus
} = patientSlice.actions;

export default patientSlice.reducer;
