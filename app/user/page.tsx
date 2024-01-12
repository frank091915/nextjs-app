import React from "react";

interface Props {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const users: Props[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: Props, index) => (
            <tr key={user.id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserPage;
