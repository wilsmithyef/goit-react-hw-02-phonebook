import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameExists) {
      alert(`The contact ${name} already exists!`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };

  handleTofind = event => {
    const { value } = event.target;
    this.setState({
      filter: value.toLowerCase(),
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1 style={{ paddingLeft: '12%' }}>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />

        <h2 style={{ paddingLeft: '14%' }}>Contacts</h2>
        <Filter filter={filter} handleTofind={this.handleTofind} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}