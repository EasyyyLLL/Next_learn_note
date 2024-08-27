import { Metadata } from "next";

type Props = {
  params: {
    name: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `博客 ${params.name} 的详情`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>博客 {params.name} 的详情</h1>;
}
