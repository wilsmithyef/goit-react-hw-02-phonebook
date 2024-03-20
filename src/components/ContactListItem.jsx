import React from 'react';

const ContactListItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li>
      Name: {name}, Number: {number}
      <button style={{margin:"10px",}} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;