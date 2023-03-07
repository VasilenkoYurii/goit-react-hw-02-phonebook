import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { MainForm, Label, Input } from './PhoneForm.styled';

const PhoneForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <MainForm autoComplete="off">
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <button type="submit">Add contact</button>
      </MainForm>
    </Formik>
  );
};

PhoneForm.prototype = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PhoneForm;
