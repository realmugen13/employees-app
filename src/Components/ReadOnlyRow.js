import React from "react";
import { useNavigate } from "react-router-dom";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const navigate = useNavigate()
  return (
      <tr
      onClick={(event)=> {
        if (
          event.target.tagName === 'TR' || 
          event.target.tagName === 'TD'  
        ) {
        navigate(`/members/${contact.id}`) 
      }
      }}>
      <td>{contact.fullName}</td>
      <td>{contact.department}</td>
      <td>{contact.position}</td>
      <td>{contact.gender}</td>
      <td>
        <button
          className="btn"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button className="btn" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>

  );
};

export default ReadOnlyRow;
