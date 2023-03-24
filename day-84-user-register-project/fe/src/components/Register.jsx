import { useEffect, useState } from "react";
export default function Register() {
  const ROLE_URL = "http://localhost:8181/admin/role/list";
  const REGISTER_URL = "http://localhost:8181/admin/register";

  const initialFormData = Object.freeze({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    userrole: 0,
    address: "",
  });
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    fetchRoles();
  }, [formData]);

  const fetchRoles = async () => {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    };
    const FETCHED_DATA = await fetch(REGISTER_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };

  return (
    <div>
      <h1>Register</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="firstname">
          First Name:
          <input type="text" name="fistname" onChange={handleChange} />
        </label>
        <label htmlFor="lastname">
          Last Name:
          <input type="text" name="lastname" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <label htmlFor="roles">
          Roles:
          <select name="userrole" onChange={handleChange}>
            {roles &&
              roles.map((role, index) => {
                return (
                  <option key={index} id={role._id} value={role._id}>
                    {role.name}
                  </option>
                );
              })}
          </select>
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input type="number" name="phone" onChange={handleChange} />
        </label>
        <label htmlFor="address">
          Address:
          <textarea
            name="address"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
