const ReviewList = ({
  params,
}: {
  params: { productID: string; reviewID: string };
}) => {
  return (
    <div>
      <h1>Review {params.reviewID} for Product {params.productID}</h1>
    </div>
  );
};

export default ReviewList;
