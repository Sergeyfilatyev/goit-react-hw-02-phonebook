export function Filter({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    ></input>
  );
}
