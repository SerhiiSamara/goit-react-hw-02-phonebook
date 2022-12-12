import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import 'modern-normalize';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (name, number, id) => {
    this.setState(prevState => ({
      name: { name },
      number: { number },
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== userId),
    }));
  };

  filteredContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm
          onSubmit={this.handleSubmit}
          contacts={this.state.contacts}
        />
        <Title>Contacts</Title>
        <Filter onChange={this.handleChange} />
        {this.state.contacts.length > 0 ? (
          <>
            <ContactsList
              contacts={this.filteredContact()}
              deleteUser={this.deleteUser}
            />
          </>
        ) : (
          'Sorry. Your phonebok is empty.'
        )}
        <GlobalStyle />
      </>
    );
  }
}
