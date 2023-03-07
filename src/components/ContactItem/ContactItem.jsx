import PropTypes from 'prop-types';

const ContactItem = ({ contacts }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
      </li>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactItem;
