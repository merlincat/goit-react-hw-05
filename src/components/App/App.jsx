import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import css from './App.module.css';

import initialContacts from '../../contacts.json';

const App = () => {
  const [contacts, setContactList] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    return storedContacts || initialContacts;
  });
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContactList(prevContacts => [...prevContacts, newContact]);
  };
  const deleteContact = contactId => {
    setContactList(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const [searchBarFilter, setFilter] = useState('');

  const visibleContcats = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchBarFilter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={searchBarFilter} onSearch={setFilter} />
      <ContactList visibleContcats={visibleContcats} onDelete={deleteContact} />
    </div>
  );
};

export default App;
