import { notFound } from "next/navigation";


const ReviewList = ({
  params,
}: {
  params: { productID: string; reviewID: string };
}) => {
  if (parseInt(params.reviewID) > 1000) {
    return notFound();
  }
  return (
    <div>
      <h1>Review {params.reviewID} for Product {params.productID}</h1>
    </div>
  );
};

export default ReviewList;
