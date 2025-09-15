import { configureStore } from '@reduxjs/toolkit'
import patientReducer from './slice/Patient';
import writeReducer from './slice/Writeoff';


export const store = configureStore({
  reducer: {
    patientlist: patientReducer,
    writeoffList: writeReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch