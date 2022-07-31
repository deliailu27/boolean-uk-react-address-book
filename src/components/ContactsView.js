import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ContactsView(props) {
  const [contact, setContact] = useState(null);

  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state

  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteURL = `http://localhost:4000/contacts/${id}`;

  function DeletContact() {
    const response = fetch(deleteURL, { method: "DELETE" });
    navigate("/");
    return response.json();
  }

  useEffect(() => {
    if (location.state) {
      const thisContact = location.state;
      setContact(thisContact);
    }
  }, [location]);

  if (!contact) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>
        {contact.street} {contact.city}
      </p>
      <p>Email:{contact.email}</p>
      <p>
        <a href={`${contact.linkedIn}`}>linkedIn</a>
      </p>
      <p>
        <a href={`${contact.twitter}`}>Twitter</a>
      </p>
      <button onClick={DeletContact}>delete</button>
    </div>
  );
}

export default ContactsView;
