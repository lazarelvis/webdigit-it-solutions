// pages/index.js (or any other page)
import getPostMetadata from "../../../utils/getPostMetadata";
import ArticleCard from "../components/ArticleCard";

export default function Blog() {
  const postMetadata = getPostMetadata("content-mdx-page");

  const cardData = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", // Replace with your actual image URL
      overlayTitle: "Bento Grid with Tailwind CSS Next.js and Framer Motion",
      logoText: "Webdigit", // Optional, defaults to Aceternity
      authorName: "Elvis Lazar",
      authorAvatarUrl: "/imagine-profil.png", // Replace with actual avatar
      title:
        "How to create a bento grid with Tailwind CSS, Next.js and Framer Motion",
      description:
        "A bento grid is a design trend that focuses on grids to showcase various features of your product or business. In this article, we are going to talk a...",
      href: "/blog/first-post", // Link for the card
    },
    {
      id: 2,

      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", // Replace with your actual image URL
      overlayTitle: "Bento Grid with Tailwind CSS Next.js and Framer Motion",
      logoText: "Webdigit", // Optional, defaults to Aceternity
      authorName: "Elvis Lazar",
      authorAvatarUrl: "/imagine-profil.png", // Replace with actual avatar
      title:
        "How to create a bento grid with Tailwind CSS, Next.js and Framer Motion 2",
      description:
        "A bento grid 2 is a design trend that focuses on grids to showcase various features of your product or business. In this article, we are going to talk a...",
      href: "/blog/second-post", // Link for the card
    },
    {
      id: 3,

      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", // Replace with your actual image URL
      overlayTitle: "Bento Grid with Tailwind CSS Next.js and Framer Motion",
      logoText: "Webdigit", // Optional, defaults to Aceternity
      authorName: "Elvis Lazar",
      authorAvatarUrl: "/imagine-profil.png", // Replace with actual avatar
      title:
        "How to create a bento grid with Tailwind CSS, Next.js and Framer Motion 2",
      description:
        "A bento grid 2 is a design trend that focuses on grids to showcase various features of your product or business. In this article, we are going to talk a...",
      href: "/blog/third-post", // Link for the card
    },
    {
      id: 4,

      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", // Replace with your actual image URL
      overlayTitle: "Bento Grid with Tailwind CSS Next.js and Framer Motion",
      logoText: "Webdigit", // Optional, defaults to Aceternity
      authorName: "Elvis Lazar",
      authorAvatarUrl: "/imagine-profil.png", // Replace with actual avatar
      title:
        "How to create a bento grid with Tailwind CSS, Next.js and Framer Motion 2",
      description:
        "A bento grid 2 is a design trend that focuses on grids to showcase various features of your product or business. In this article, we are going to talk a...",
      href: "/your-article-link", // Link for the card
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid container for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postMetadata.map((post, postIndex) => (
            <ArticleCard
              key={postIndex} // Important for list rendering
              imageUrl={post.imageUrl}
              overlayTitle={post.overlayTitle}
              logoText={post.logoText}
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
