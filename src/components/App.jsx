import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import 'modern-normalize';

import { PhonebookForm } from './PhonebookForm/Phonebook';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = name => {
    this.setState(prevState => ({
      name: { name },
      contacts: [...prevState.contacts,  name],
    }));
  };

  render() {
    console.log(this.state.contacts);
    return (
      <>
        <h2>Phonebook</h2>
        <PhonebookForm onSubmit={this.handleSubmit} />
        {this.state.contacts !== '' && (
          <ContactList names={this.state.contacts} />
        )}
        <GlobalStyle />
      </>
    );
  }
}
