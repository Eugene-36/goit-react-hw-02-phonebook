import React from "react";
import { v4 as unId } from "uuid";
const ContactList = ({ contacts, onDelete }) => (
  <ul className="TodoList">
    {contacts.map(({ id, name, number }) => (
      <li key={unId()}>
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
