import React from "react";
interface Props {
  params: {
    id: number;
  };
}
const page = ({ params: { id } }: Props) => {
  return <div>user id:{id}</div>;
};

export default page;
