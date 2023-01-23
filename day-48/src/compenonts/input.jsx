export default function Input({ label, value, onChange }) {
  return (
    <div>
      <form action="">
        <label htmlFor="input">{label}</label>
        <input type="text" value={value} onChange={onChange} />
      </form>
    </div>
  );
}
