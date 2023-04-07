export default function FancyButton(props: any) {
  return (
    <div>
      <button className="button">{props.children}</button>
      <style jsx>
        {`
          .button {
            background-color: purple;
            padding: 5px;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
}
