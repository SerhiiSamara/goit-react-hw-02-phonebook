import PropTypes from 'prop-types';

import { Contact } from '../Contact/Contact';
import { Container } from './ContactList.styled';

export const ContactList = ({ contacts, filter, deleteUser }) => {
  if (filter.length === 0) {
    return (
      <Container>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <Contact
              name={name}
              number={number}
              id={id}
              deleteUser={deleteUser}
            />
          </li>
        ))}
      </Container>
    );
  }

  const contactsFiltered = [];

  contacts.forEach(contact => {
    if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
      contactsFiltered.push(contact);
    }
  });
  return (
    <Container>
      {contactsFiltered.map(({ name, number, id }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            deleteUser={deleteUser}
          />
        </li>
      ))}
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
};
