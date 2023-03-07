import PropTypes from 'prop-types';

const FindContact = ({ onChangeFind, value }) => (
  <label>
    Find contscts by name
    <input type="text" value={value} onChange={onChangeFind}></input>
  </label>
);

export default FindContact;
