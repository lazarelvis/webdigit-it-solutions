import Markdown from "markdown-to-jsx";
import getPostMetadata from "../../../../utils/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import styles from "../blog.module.css";
import Link from "next/link";
import Image from "next/image";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { IconArrowLeft } from "@tabler/icons-react";
import { notFound } from "next/navigation";
// import { getPostContent } from "../../Lib/markdown";

function getPostContent(slug) {
  const folder = "content-mdx-page/";
  const file = folder + `${slug}.md`;
  try {
    const content = fs.readFileSync(file, "utf8");

    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    if (error.code === "ENOENT") {
      notFound(); // Trigger Next.js 404 page
    } else {
      throw error; // re-throw other unexpected errors
    }
  }
}

// Static generation for routes
export const generateStaticParams = async () => {
  const posts = getPostMetadata("content-mdx-page");
  return posts.map((post) => ({ slug: post.slug }));
};

// Dynamic metadata: name of title or page
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = getPostContent(slug); // safe now

  return {
    title: `Webdigit ${data.data.title ? data.data.title : ""}`,
  };
  // return {
  //   title: `Webdigit ${id.slug ? " . " + id.slug : ""}`,
  // };
}

export default async function Firstpost({ params }) {
  const { slug } = await params;

  const post = await getPostContent(slug);

  return (
    <div className={`${styles.container} min-h-screen bg-white text-gray-900`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="flex justify-between items-center mb-8">
          <Link
            href="/blog"
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
          >
            <IconArrowNarrowLeft stroke={1} />
            Back
          </Link>
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={post.data.authorAvatarUrl}
                alt={post.data.authorName}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="text-sm text-gray-700">
              {post.data.authorName}
            </span>
            <span className="text-sm text-gray-500">|</span>
            <span className="text-sm text-gray-500">{post.data.date}</span>
          </div>
        </header>
        <div>
          <Image
            src={post.data.imageUrl}
            alt={post.data.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            className="rounded-3xl"
            priority={true}
          />
        </div>
        <div className=" inset-0 flex items-center justify-center py-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight">
            {post.data.title}
          </h1>
        </div>

        <article
          className={`${styles.imageArticle} prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-800 text-justify`}
        >
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
}
