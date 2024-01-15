import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";
interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: keyof User;
}

const Table = async ({ sortOrder }: Props) => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const sortedUsers = sort(users).asc((user) => user[sortOrder]);
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>
            <Link href="./user?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="./user?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user: User, index) => (
          <tr key={user.id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
