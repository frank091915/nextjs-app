import React from "react";
import UserTable from "./UserTable";
const UserPage = async () => {
  return (
    <>
      <h1>Users</h1>
      {/* @ts-expect-error Server Component */}
      <UserTable />
    </>
  );
};

export default UserPage;
