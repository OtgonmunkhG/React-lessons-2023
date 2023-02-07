import Books from "./components/Books";
import { BookContextProvide } from "./contexts/BookContext";

export default function BooksList() {
  return (
    <div>
      <BookContextProvide>
        <Books />
      </BookContextProvide>
    </div>
  );
}
