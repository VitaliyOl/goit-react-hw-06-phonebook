// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { createContact, removeContacts } from 'redux/contactSlice';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleAddContact = data => {
    // const newContact = {
    //   ...data,
    //   id: nanoid(),
    // };

    contacts.filter(contact => contact.name === data.name).length
      ? alert(` is already in contact`)
      : dispatch(createContact(data));
  };

  const deleteContacts = id => {
    // setContacts(contacts.filter(contact => contact.id !== id));
    dispatch(removeContacts(id));
  };

  const handleChange = e => {
    // setFilter(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  const filterContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactsList contacts={filterContact} deleteContacts={deleteContacts} />
    </Container>
  );
};
