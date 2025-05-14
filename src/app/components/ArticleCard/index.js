// components/ArticleCard.js
import Image from "next/image";
import Link from "next/link"; // Optional: if the card should link somewhere

// A simple play icon, you can replace this with an SVG or another icon library
const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 inline-block mr-1" // Adjust size and margin as needed
  >
    <path d="M6 4l12 8-12 8V4z" />
  </svg>
);

const ArticleCard = ({
  imageUrl,
  overlayTitle,
  logoText = "Aceternity",
  authorName,
  authorAvatarUrl,
  title,
  description,
  href = "#", // Default link target
}) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="block max-w-md bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* Image Section */}
        <div
          className="relative h-64 bg-cover bg-center group" // Adjust height as needed (e.g., h-56, h-72)
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        {/* Content Section */}
        <div className="p-6">
          {/* Author Info */}
          <div className="flex items-center mb-4">
            {authorAvatarUrl && (
              <Image
                src={authorAvatarUrl}
                alt={authorName || "Author"}
                width={40} // Tailwind: w-10
                height={40} // Tailwind: h-10
                className="rounded-full mr-3"
              />
            )}
            <span className="text-sm font-medium text-gray-700">
              {authorName}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
