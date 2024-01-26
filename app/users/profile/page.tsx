import React from "react";
import Image from "next/image";
import enterprisePattern from "@/public/images/enterprise-pattern.png";

const ImagePage = () => {
  return (
    <div>
      <Image
        src="https://bit.ly/react-cover"
        alt="pic"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
      <span>hello</span>
    </div>
  );
};

export default ImagePage;
