import { combineReducers } from 'redux';
import types from './contacts-types';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function contactReducer(state = initialContacts, { type, payload }) {
  switch (type) {
    case types.ADD_CONTACTS:
      return [...state, payload];

    case types.DELETE_CONTACTS:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
}
function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

const contactsReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default contactsReducer;
