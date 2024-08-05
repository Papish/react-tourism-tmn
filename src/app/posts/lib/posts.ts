import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostList } from "@/app/types";

const postsDirectory = path.join(process.cwd(), "src/app/posts/articles");

export function getAllPosts(): PostList[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id: fileName.replace(/\.md$/, ""),
      slug: fileName.replace(/\.md$/, ""),
      shortTitle: matterResult.data.shortTitle,
    };
  });
}

export function getPostDataBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    slug: slug,
    ...(matterResult.data as {
      shortTitle: string;
      title: string;
      date: string;
      image: string;
      description: string;
    }),
    content: matterResult.content,
  };
}
