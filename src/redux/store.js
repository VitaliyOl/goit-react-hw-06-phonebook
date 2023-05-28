import { configureStore, nanoid } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const createContact = createAction('contact/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});

export const removeContacts = createAction('contact/delete');

const myReducer = createReducer(0, {});
const contactsReducer = createReducer([], {
  [createContact]: (state, action) => {
    state.push(action.payload);
  },
  [removeContacts]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
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
