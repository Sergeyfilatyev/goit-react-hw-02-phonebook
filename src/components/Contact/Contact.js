export function Contact({ id, name, number, deleteContact }) {
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => deleteContact(id, name)}>
        Delete
      </button>
    </li>
  );
}
