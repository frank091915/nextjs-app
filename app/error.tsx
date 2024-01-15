"use client";
import React from "react";
interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log(error, "error");
  return (
    <>
      <div>an expected error happened</div>
      <button
        className="button btn-primary"
        onClick={() => {
          reset();
        }}
      >
        retry
      </button>
    </>
  );
};

export default ErrorPage;
