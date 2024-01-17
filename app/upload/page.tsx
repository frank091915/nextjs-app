"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
const Upload = () => {
  return (
    <CldUploadWidget uploadPreset="d7nz1otn">
      {({ open }) => (
        <button
          onClick={() => {
            open();
          }}
          className="btn btn-primary
      "
        >
          upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default Upload;
