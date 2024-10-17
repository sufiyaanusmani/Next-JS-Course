"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order placed");
    router.push("/");
    // router.replace("/");
    // router.back();
    // router.forward();
  };
  return (
    <div>
      <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
      </>
    </div>
  );
};

export default OrderProduct;
