import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/app/posts/articles");

// export function getSortedPostsData() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, "");
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     const matterResult = matter(fileContents);

//     return {
//       id,
//       date:
//       ...matterResult.data,
//     };
//   });

//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

export function getAllPostIds() {
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
