import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'Section/Section';
import ContactsList from 'ContactsList/ContactsList';
import Filter from 'Filter/Filter';
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
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <PhoneForm
            initialValues={this.initialValues}
            onSubmit={this.handleSubmit}
          />
        </Section>

        <Section title="Contacts">
          <Filter onChangeFind={this.onChangeFind} value={filter} />
          <ContactsList contacts={visibleContacts} />
        </Section>
      </>
    );
  }
}
