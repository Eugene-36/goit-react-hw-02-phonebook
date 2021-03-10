import { Component } from "react";
import "./App.css";

//todo: Второе дз Phone book

import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/Filter/ContactList/ContactList";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    const newContact = this.state.contacts.concat(data);
    this.setState((prevState) => {
      return { ...prevState, contacts: newContact };
    });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContac = () => {
    const { filter, contacts } = this.state;
    const normalized = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalized)
    );
  };
  deletContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  alert = () => {
    const search = this.state.contacts.flatMap((el) => el.name);
    console.log(search);
    const res = search.filter((item, idx) => search.indexOf(item) === idx);
    alert(res);
  };
  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContac();
    // const search = this.state.contacts.flatMap((el) => el.name);
    // console.log(search);
    // const res = search.filter((item, idx) => search.indexOf(item) === idx);
    // // //const message = "is already in contacts";
    // // alert(res, "is already in contacts");

    return (
      <div className="App">
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContact} onDelete={this.deletContact} />
        </div>
      </div>
    );
  }
}

export default App;
