import { notFound } from "next/navigation";

const getRandomInt = (count: number) => Math.floor(Math.random() * count);

const ReviewList = ({
  params,
}: {
  params: { productID: string; reviewID: string };
}) => {
  const random = getRandomInt(2);

  if(random === 1){
    throw new Error("Error loading review");
  }
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
