import PropTypes from 'prop-types';
import styled from "styled-components";

export const PhonebookForm = ({onSubmit }) => {
	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		const name = form.elements.name.value;
		onSubmit(name);
		form.reset();

	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="">
				Name
				<input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
				/>
			</label>
			<button type='submit'>Add contact</button>
		</form>
	);
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};