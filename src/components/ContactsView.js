import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function ContactsView(props) {
  const [contact, setContact] = useState(null);

  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state

  const location = useLocation();
  const { id } = useParams();

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
    </div>
  );
}

export default ContactsView;
