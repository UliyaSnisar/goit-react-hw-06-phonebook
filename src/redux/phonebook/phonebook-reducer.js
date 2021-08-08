import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './phonebook-action';
import contacts from '../../json/contacts.json';

const items = createReducer(contacts, {
  [contactsAction.addContact]: (state, { payload }) => {
    if (state.map(contact => contact.name).includes(payload.name)) {
      return alert(`${payload.name} is already exist`);
    }
    return [...state, payload];
  },
  [contactsAction.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsAction.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

//без Redux Toolkit
// import { combineReducers } from 'redux';
// import types from './phonebook-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
