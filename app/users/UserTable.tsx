import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";
import { Metadata } from "next";
interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: keyof User;
}

export async function generateMetaData(): Promise<Metadata> {
  const product: { title: string; info: string } = await (
    await fetch("...")
  ).json();
  return {
    title: product.title,
    description: product.info,
  };
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
            <Link href="./users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="./users?sortOrder=email">Email</Link>
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
