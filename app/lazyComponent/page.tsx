"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
// import HeavyComponent from "../components/HeavyComponent";
const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});
const page = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <div>lazy component</div>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        show
      </button>
      {isVisible && <HeavyComponent></HeavyComponent>}
    </>
  );
};

export default page;
