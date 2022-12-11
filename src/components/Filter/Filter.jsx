import PropTypes from 'prop-types';

import { Input, Label } from './Filter.styled';

export const Filter = ({ onChange }) => {
  const handleChange = e => {
    const filter = e.target.value;
    onChange(filter);
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={handleChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
