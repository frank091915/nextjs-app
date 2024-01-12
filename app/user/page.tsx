import React from "react";

interface Props {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const users: Props[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      {new Date().toLocaleDateString()}
      {users.map((user: Props) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default UserPage;
