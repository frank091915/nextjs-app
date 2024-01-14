import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const page = ({ params: { id } }: Props) => {
  return <div>photo id: {id}</div>;
};

export default page;
