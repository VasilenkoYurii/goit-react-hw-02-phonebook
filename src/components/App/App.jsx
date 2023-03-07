import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import Section from 'Section/Section';
import ContactsList from 'ContactsList/ContactsList';
import FindContact from 'FindContact/FindContact';
import PhoneForm from 'PhoneForm/PhoneForm';

export class App extends Component {
  state = {
    contacts: [
      { id: '1', name: 'Nana', number: '222-222-222' },
      { id: '2', name: 'Nila', number: '222-333-444' },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  initialValues = {
    name: this.state.name,
    number: this.state.number,
  };

  handleSubmit = (values, { resetForm }) => {
    resetForm();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...values, id: nanoid() }],
    }));
  };

  onChangeFind = e => {
    this.setState({ filter: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <PhoneForm
            initialValues={this.initialValues}
            onSubmit={this.handleSubmit}
          />
        </Section>

        <Section title="Contacts">
          <FindContact onChangeFind={this.onChangeFind} value={filter} />
          <ContactsList contacts={contacts} />
        </Section>
      </>
    );
  }
}
