import { groq } from "next-sanity";
import { Post } from "../../../../types/sanity";
import { client, urlFor } from "@/lib/createClient";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";


interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'post']{
        slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
        ...,
        body,
        author->
    }`;
  const post: Post = await client.fetch(query, { slug });

  return (
 
      <div className="max-w-4xl mx-auto p-8">
       
            <h1 className="text-5xl font-bold mb-4 text-green-600">
              {post?.title}
            </h1>
            <p className="text-2xl font-semibold  text-gray-700">{post?.description}</p>
            {post?.mainImage && (
              <Image
                src={urlFor(post?.mainImage).url()}
                alt="Main Image"
                className="mt-6"
                height="300"
               
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width="600"
              />
            )}
            <PortableText value={post?.body} />

            <div className="flex justify-center mt-8">
        <Link href="/blog">
          <Button>Return</Button>
        </Link>
      </div>
          </div>
          
         
  
  );
};

export default SlugPage;
