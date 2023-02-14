import { useState, useEffect } from "react";

export default function Users() {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users list</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}