import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactsAdd(props) {
  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state
  const { setContacts, contacts } = props;
  const [newContact, setNewContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    email: "",
    linkedIn: "",
    twitter: "",
  });
  const navigate = useNavigate();

  //TODO: Implement controlled form
  //send POST to json server on form submit

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit event:", event);
    const updateContacts = [...contacts];

    updateContacts.push(newContact);
    setContacts(updateContacts);

    const data = JSON.stringify(newContact);
    let xhr = new XMLHttpRequest();
    const url = "http://localhost:4000/contacts";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    navigate("/");
  }

  function handleChange(event) {
    const changedID = event.target.id;
    const Input = event.target.value;
    const changeContact = { ...newContact };
    changeContact[changedID] = Input;
    setNewContact(changeContact);
  }
  console.log("New contact:", newContact);
  console.log("contacts:", contacts);

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        required
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        required
        onChange={handleChange}
      />

      <label htmlFor="linkedIn">LinkedIn:</label>
      <input
        id="linkedIn"
        name="linkedIn"
        type="text"
        required
        onChange={handleChange}
      />

      <label htmlFor="twitter">Twitter:</label>
      <input
        id="twitter"
        name="twitter"
        type="text"
        required
        onChange={handleChange}
      />

      <label htmlFor="street">Street:</label>
      <input
        id="street"
        name="street"
        type="text"
        required
        onChange={handleChange}
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        required
        onChange={handleChange}
      />

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default ContactsAdd;
