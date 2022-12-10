import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import styled from 'styled-components';

export const ContactList = ({ options }) => {
	// console.log(options);
  return (
    <ul>
			{options.map(({ name, number, id}) => (
        <li key={id}>
				<Contact name={name} number={ number} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};