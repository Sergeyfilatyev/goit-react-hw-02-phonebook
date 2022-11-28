import { Contact } from 'components/Contact/Contact';
export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ul>
  );
}
