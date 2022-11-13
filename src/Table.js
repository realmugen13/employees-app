import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import { employees } from "./emloyees";
import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditableRow from "./Components/EditableRow";

const Table = () => {
  const [contacts, setContacts] = useState(employees);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    department: "",
    position: "",
    gender: "",
    dateofbirth: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    department: "",
    position: "",
    gender: "",
    dateofbirth: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      department: addFormData.department,
      position: addFormData.position,
      gender: addFormData.gender,
      dateofbirth: addFormData.dateofbirth,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      department: editFormData.department,
      position: editFormData.position,
      gender: editFormData.gender,
      dateofbirth: editFormData.dateofbirth,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      department: contact.department,
      position: contact.position,
      gender: contact.gender,
      dateofbirth: contact.dateofbirth,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr className="tyrr">
              <th>Name</th>
              <th>Department</th>
              <th>Position</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody className="tb">
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2 className="add-contact">Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          className="ed_form"
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input 
          className="ed_form"
          type="text"
          name="department"
          required="required"
          placeholder="Enter department..."
          onChange={handleAddFormChange}
        />
        <input
        className="ed_form"
          type="text"
          name="position"
          required="required"
          placeholder="Enter a position..."
          onChange={handleAddFormChange}
        />
        <input
          className="ed_form"
          type="text"
          name="gender"
          required="required"
          placeholder="Enter an gender..."
          onChange={handleAddFormChange}
        />
          <input
          className="ed_form"
          type="text"
          name="dateofbirth"
          required="required"
          placeholder="Enter an dateofbirth..."
          onChange={handleAddFormChange}
        />
        <button className="add_btn" type="submit">Add</button>
      </form>
    </div>
  );
};

export default Table;
