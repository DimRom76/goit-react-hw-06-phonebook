import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContacts = values => ({
  type: types.ADD_CONTACTS,
  payload: {
    id: uuidv4(),
    name: values.name,
    number: values.number,
  },
});

const deleteContacts = id => ({
  type: types.DELETE_CONTACTS,
  payload: {
    id,
  },
});

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});

const actions = { addContacts, deleteContacts, changeFilter };
export default actions;
