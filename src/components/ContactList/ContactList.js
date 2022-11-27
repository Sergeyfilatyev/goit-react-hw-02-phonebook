export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return <li>{contact}</li>;
      })}
    </ul>
  );
}
