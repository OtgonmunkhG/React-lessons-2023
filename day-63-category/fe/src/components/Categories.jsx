import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const URL = "http://localhost:8080/category";
  useEffect(() => {
    fetchCategories();
  }, []);
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
    }
  }

  async function handleCategoryDelete(categoryId) {
    console.log(categoryId);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: categoryId,
      }),
    };
    const FETCHE_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHE_DATA.json();
    if (FETCHED_JSON.status === "success") {
      toast(`Category with id = ${categoryId} deleted succeddfully.`);
      console.log(FETCHED_JSON.data);
      setCategories(FETCHED_JSON.data);
    }
  }
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const searchInput = e.target.search.value;
    const SEARCH_URL = `http://localhost:8080/search?value=${searchInput}`;
    const FETCHED_DATA = await fetch(SEARCH_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
    }
  };

  return (
    <div>
      <h1>Category list</h1>
      <form action="" onSubmit={handleSearchSubmit}>
        <label htmlFor="Search">
          <input
            type="search"
            name="search"
            placeholder="Search"
            style={{ padding: 15, borderRadius: 5 }}
          />
        </label>
        <button style={{ padding: 15, margin: 5 }} type="submit">
          Search
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Category ID</td>
            <td>Category name</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <a href={`/category/edit/${category.id}`}>Edit</a>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleCategoryDelete(category.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
