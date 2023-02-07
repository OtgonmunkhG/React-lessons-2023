import Header from "./Header";

export default function LayOut({ children }) {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
}
