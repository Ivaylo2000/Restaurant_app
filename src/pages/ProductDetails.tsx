import React from "react";
import { useParams } from "react-router-dom";
import ListComponent from "../components/ListComponent";
import "./ProductDetails.css";
const ProductDetailPage = () => {
  const { productId } = useParams();

  return (
    <>
      {productId && (
        <ListComponent
          mealtag={productId.toString()}
          menuItem={`${
            productId.charAt(0).toUpperCase() + productId.slice(1)
          }s`}
        />
      )}
    </>
  );
};

export default ProductDetailPage;
