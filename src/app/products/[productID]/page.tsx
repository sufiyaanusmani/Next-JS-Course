const ProductDetails = ({params} : {params: {productID: string}}) => {
  return (
    <div>
      <h1>Product Details {params.productID}</h1>
    </div>
  );
};

export default ProductDetails;
