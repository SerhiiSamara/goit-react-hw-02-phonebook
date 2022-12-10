import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export const ContactList = ({ names }) => {
  return (
    <ul>
      {names.map(name => (
        <li key={nanoid()}>
          <Contact name={name} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
