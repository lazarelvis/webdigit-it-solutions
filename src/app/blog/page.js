// pages/index.js (or any other page)
import getPostMetadata from "../../../utils/getPostMetadata";
import ArticleCard from "../components/ArticleCard";

export default function Blog() {
  const postMetadata = getPostMetadata("content-mdx-page");

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid container for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postMetadata.map((post, postIndex) => (
            <ArticleCard
              key={postIndex} // Important for list rendering
              imageUrl={post.imageUrl}
              authorName={post.authorName}
              authorAvatarUrl={post.authorAvatarUrl}
              title={post.title}
              description={post.description}
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
