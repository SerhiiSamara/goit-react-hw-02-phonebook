import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const Contact = ({ name, number }) => {
	return (
		<p>{name}: { number}</p>
	);
};

Contact.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
};