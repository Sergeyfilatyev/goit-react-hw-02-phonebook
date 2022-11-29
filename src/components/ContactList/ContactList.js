import { Contact } from 'components/Contact/Contact';
import s from './ContactList.module.css';
export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}
