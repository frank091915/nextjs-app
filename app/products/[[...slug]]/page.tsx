"use client";

import React from "react";
interface Props {
  params: {
    slug: string[];
  };
}
const page = ({ params: { slug } }: Props) => {
  console.log(slug, "slug");
  return (
    <div>
      <div className="text-black">products page {slug}</div>
    </div>
  );
};

export default page;
