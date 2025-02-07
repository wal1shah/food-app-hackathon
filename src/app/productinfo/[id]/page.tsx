import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import AddToCartButton from "@/components/addtocart";
import Heroimg from "@/components/Common/heroimg";

interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

// Fetch product from Sanity
async function getProduct(id: string): Promise<Product | null> {
  const query = `*[_type == "food" && _id == $id][0]{
    _id,
    name,
    "imageUrl": image.asset->url,
    price,
    description
  }`;

  try {
    return (await client.fetch(query, { id })) || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Generate static params
export async function generateStaticParams() {
  const query = `*[_type == "food"]{ _id }`;
  const products = await client.fetch<{ _id: string }[]>(query);
  return products.map((product) => ({ id: product._id }));
}

// Product Page Component
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  if (!params?.id) return notFound();

  const product = await getProduct(params.id);
  if (!product) return notFound();

  return (
    <div>
      <Heroimg title="Shop Details" subtitle="Shop Details" />
      <div className="container flex justify-center mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="flex flex-col justify-center ml-10">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-orange-500 mb-4">
              $ {product.price}.00
            </p>

            {/* ✅ Add to Cart Button */}
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
