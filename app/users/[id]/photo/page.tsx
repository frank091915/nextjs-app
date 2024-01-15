"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div>photo</div>
      <div
        className="btn"
        onClick={() => {
          router.push("/user");
        }}
      >
        back to user Page
      </div>
    </>
  );
};

export default Page;
