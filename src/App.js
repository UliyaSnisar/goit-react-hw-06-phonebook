import React from 'react';
// import { connect } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Container from './Component/Container/Container';
import ContactForm from './Component/ContactForm/ContactForm';
import Filter from './Component/Filter/Filter';
import ContactList from './Component/ContactList/ContactList';

class App extends React.Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          {/* <ContactForm onSubmit={this.formAddContact} /> */}
          <ContactForm />

          <h2>Contacts</h2>
          {/* <Filter value={this.state.filter} onChange={this.changeFilter} /> */}
          <Filter />

          {/* <ContactList
            visibleContacts={this.getVisibleContacts}
            onClick={this.deleteContact}
          /> */}
          <ContactList />
        </div>
      </Container>
    );
  }
}
export default App;
