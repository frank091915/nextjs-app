import React, { Suspense } from "react";
import UserTable from "./UserTable";
interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      {/* @ts-expect-error Server Component */}
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPage;
