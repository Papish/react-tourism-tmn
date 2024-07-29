import Image from "next/image";
import { getPostDataBySlug } from "../lib/posts";
import markdownIt from "markdown-it";

const md = markdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

export default function Post({ params }: { params: { slug: string } }) {
  const postData = getPostDataBySlug(params.slug);

  return (
    <>
      <div className="text-xs text-gray-500 mb-8 text-center">
        {postData.date}
      </div>
      {postData.title && (
        <h1 className="text-4xl font-bold text-[#383838] text-center mb-10">
          {postData.title}
        </h1>
      )}
      <Image
        src={postData.image}
        alt="Post image"
        width={500}
        height={100}
        className="w-full h-auto"
      />
      {postData.description && (
        <div className="mt-10 italic font-light text-center px-44 leading-8">
          {postData.description}
        </div>
      )}
      <div className="my-20 border-t-2 border-gray-300 mx-auto max-w-3xl"></div>
      <div
        className="mx-auto max-w-3xl blog"
        dangerouslySetInnerHTML={{ __html: md.render(postData.content) }}
      ></div>
    </>
  );
}
