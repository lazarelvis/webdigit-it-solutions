import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter((file) => file.endsWith(".md"));

  // get files data
  const posts = markdownPost.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      imageUrl: matterResult.data.imageUrl,
      overlayTitle: matterResult.data.overlayTitle,
      logoText: matterResult.data.logoText,
      authorName: matterResult.data.authorName,
      authorAvatarUrl: matterResult.data.authorAvatarUrl,
      title: matterResult.data.title,
      description: matterResult.data.description,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
