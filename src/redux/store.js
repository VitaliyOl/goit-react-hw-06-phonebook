import { configureStore, nanoid } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const createContact = createAction('myValue/increment', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});

const myReducer = createReducer(0, {});
const contactsReducer = createReducer([], {
  [createContact]: (state, action) => {
    state.push(action.payload);
  },
});
const filterReducer = createReducer('', {});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
