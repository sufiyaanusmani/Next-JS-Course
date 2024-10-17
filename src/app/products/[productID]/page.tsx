import { Metadata } from 'next';

type Props = {
  params: {
    productID: string;
  };
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const title: string = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Product Details ${params.productID}`);
    }, 1000);
  })
  return {
    title: title,
  };
}

const ProductDetails = ({params} : {params: {productID: string}}) => {
  return (
    <div>
      <h1>Product Details {params.productID}</h1>
    </div>
  );
};

export default ProductDetails;
