import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  submitHandler = event => {
    console.log(event.target.name.value);
    console.log(event.target.number.value);
    event.preventDefault();
    // const newContact = { name: 'fhk', number: '45456' };
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newContact],
    // }));
    this.setState({ name: event.target.name.value });
  };
  render() {
    return (
      <>
        <Section
          title={'Phonebook'}
          children={<ContactForm submitHandler={this.submitHandler} />}
        />
        <Section
          title={'Contacts'}
          children={<ContactList contacts={this.state.contacts} />}
        />
      </>
    );
  }
}
export default App;
