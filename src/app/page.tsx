import Image from "next/image";
import { getAllPostIds } from "./posts/lib/posts";
import Link from "next/link";

export default function Home() {
  const postIds = getAllPostIds();

  return (
    <div>
      <h1>Travel and Tours</h1>
      <nav>
        <ul>
          {postIds.map((post) => (
            <li key={`blog-${post.id}`}>
              <Link href={`/posts/${post.slug}`}>{post.shortTitle}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
