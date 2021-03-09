import React from "react";
import { v4 as unId } from "uuid";
import Contacts from "./Contacts.module.css";
console.log(Contacts);
const ContactList = ({ contacts, onDelete }) => (
  <ul className="TodoList">
    {contacts.map(({ id, name, number }) => (
      <li key={unId()} className="listStyle">
        <p className="TodoList__text">
          {name}:{number}
        </p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDelete(id)}
        >
          Remove
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
