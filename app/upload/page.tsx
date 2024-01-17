"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CldUploadResult {
  public_id: string;
}

const Upload = () => {
  const [publicId, setPublicId] = useState("");
  console.log(publicId, "publicId");
  return (
    <>
      {publicId && (
        <CldImage width={270} height={180} src={publicId} alt=""></CldImage>
      )}
      <CldUploadWidget
        options={{
          sources: ["local", "url"],
          styles: {
            palette: {
              window: "#F5F5F5",
              sourceBg: "#FFFFFF",
              windowBorder: "#90a0b3",
              tabIcon: "#0094c7",
              inactiveTabIcon: "#69778A",
              menuIcons: "#0094C7",
              link: "#53ad9d",
              action: "#8F5DA5",
              inProgress: "#0194c7",
              complete: "#53ad9d",
              error: "#c43737",
              textDark: "#000000",
              textLight: "#FFFFFF",
            },
            fonts: {
              default: null,
              "'Poppins', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=Poppins",
                active: true,
              },
            },
          },
        }}
        uploadPreset="d7nz1otn"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as unknown as CldUploadResult;
          setPublicId(info.public_id);
        }}
      >
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
    </>
  );
};

export default Upload;
