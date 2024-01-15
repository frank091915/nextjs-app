import React from "react";
interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}
const page = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  console.log(slug, "slug");
  return (
    <div>
      <div className="text-black">products page {slug}</div>
      <div className="text-black">
        query parameters - sortOrder: {sortOrder}
      </div>
    </div>
  );
};

export default page;
