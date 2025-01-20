import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface ProductProps {
  product: {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
  };
}

const ProductDetails = ({ product }: ProductProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-orange-500 mb-4">
            $ {product.price}.00
          </p>
          <button className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// Fetch the paths for dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "food"]{ _id }`;
  const products = await client.fetch(query);

  const paths = products.map((product: { _id: string }) => ({
    params: { id: product._id },
  }));

  return {
    paths,
    fallback: "blocking", // Show fallback if a page isn't generated at build time
  };
};

// Fetch the data for each product
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;
  const query = `*[_type == "food" && _id == $id][0]{
    _id,
    name,
    "imageUrl": image.asset->url,
    price,
    description
  }`;

  const product = await client.fetch(query, { id });

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 10, // ISR (Incremental Static Regeneration)
  };
};
