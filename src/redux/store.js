import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice/contactSlice';
import { filterReducer } from './filterSlice/filterSlice';

const store = configureStore({
  reducer: {
    contactsData: contactReducer,
    filter: filterReducer,
  },
});

export default store;
