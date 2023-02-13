export default function Panel({ title, children, isActive, onShow }) {
  let render = <button onClick={onShow}>Show</button>;
  if (isActive) {
    render = <p>{children}</p>;
  }

  return (
    <div>
      <div>
        <h3>{title}</h3>
        {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
      </div>
    </div>
  );
}
