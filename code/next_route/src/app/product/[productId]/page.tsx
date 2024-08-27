// src/app/product/[productId]/page.tsx
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `产品 ${params.productId} 的详情`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>产品 {params.productId} 的详情</h1>;
}
