import { PostList } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts?: PostList[];
};

export default function PopularPackages({ posts = [] }: Props) {
  return (
    <div
      className="max-w-7xl mx-auto py-24 sm:py-24 px-6"
      id="popular-packages"
    >
      <div className="border-t-4 border-red-900 w-10 mb-4 rounded-lg"></div>
      <h2 className="text-3xl mb-2 font-semibold">Popular Packages</h2>
      <div className="mb-10 text-sm font-semibold text-blue-900">
        See what popular with other travellers
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative rounded-lg bg-white overflow-hidden hover:shadow-lg shadow border border-gray-200"
          >
            <div className="absolute z-10 top-2 left-2 bg-red-500 rounded-lg px-3 py-1 animate-pulse text-white">
              Top picks
            </div>
            <Link href={`posts/${post.slug}`} className="cursor-pointer">
              <div className="w-full h-[300px] overflow-hidden">
                <Image
                  src={post.image}
                  alt="pokhara"
                  className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
                  width={500}
                  height={200}
                />
              </div>
              <div className="px-4 py-3 text-left">
                <h3 className="font-semibold text-xl">{post.shortTitle}</h3>
                <div className="text-blue-900 font-semibold text-sm">
                  Trip Duration: 6 hours
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
