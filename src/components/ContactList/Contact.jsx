import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Contact = ({ name }) => {
	return (
		<p>{name}</p>
	);
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
};