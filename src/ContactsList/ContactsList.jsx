import PropTypes from 'prop-types';
import { Ol } from './ContactsList.styled';

const ContactsList = ({ contacts }) => {
  return (
    <Ol type="1">
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </Ol>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
