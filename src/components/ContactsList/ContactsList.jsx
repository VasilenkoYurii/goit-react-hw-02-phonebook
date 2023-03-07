import PropTypes from 'prop-types';
import { Ol } from './ContactsList.styled';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = ({ contacts }) => {
  return (
    <Ol type="1">
      <ContactItem contacts={contacts} />
    </Ol>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
