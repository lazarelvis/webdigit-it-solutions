import Image from "next/image";
import styles from "../portfolio.module.css";

export default function PortfolioCard() {
  const content = [
    {
      title: "Gaming Website",
      description1:
        "Un website in care poti sa te joci multiple jocuri realizate in Unity si ai posibilitea sa intri in competitie cu alti jucatori.",
      description2:
        "Aplicatia a fost realizata folosind libraria React, Unity, Nodejs, Javascript si MongoDB pentru stocarea datelor.",
      imageSource1: "/gaming-website.png",
      imageSource2: "/gaming-website-games.png",
      alt: "Website Gaming",
      linkPreview: "https://mandegaming.netlify.app/",
    },
    {
      title: "Restaurant",
      description1:
        "Restaurant website de prezentare cu meniu cu diferite functionalitati",
      description2:
        "S-a folosit aplicatia ReactJS, Javascript, NodeJS si MongoDB.",
      imageSource1: "/grilli-restaurant.png",
      imageSource2: "/grilli-restaurant-menu.png",
      alt: "Shop de chitari",
      linkPreview: "https://grili-restaurant.netlify.app/",
    },
    {
      title: "Site prezentare / Portfoliu",
      description1:
        "O aplicatie de prezentare a portofoliului, experientei si proiectului la care o persoana a lucrat.",
      description2: "Pentru realizare s-a folosit framework-ul Next.js",
      imageSource1: "/portfolio-website.png",
      imageSource2: "/portfolio-website-2.png",
      alt: "portfolio website",
      linkPreview: "https://lazarelvis.ro/",
    },
  ];

  return (
    <div className="relative z-10">
      {content.map((item, index) => (
        <div className="py-6 lg:py-10 flex flex-col lg:flex-row  my-20">
          <div className="pr-4">
            <h1 className="font-bold text-2xl text-slate-800">{item.title}</h1>
            <div className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
              <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
                {item.description1}
              </p>
              <p className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
                {item.description2}
              </p>
            </div>
            <div className="mt-4 h-px w-6 bg-indigo-600"></div>
            <div className="mt-6">
              <a
                href={item.linkPreview}
                target="__blank"
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
              >
                Vezi proiect
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-10 lg:mt-0 space-y-6 sm:space-y-0 sm:space-x-6 overflow-x-auto flex-1">
            <div className="relative w-full h-50 sm:h-72 lg:h-[80%]  sm:w-[50%] lg:w-[45%] rounded-xl border border-gray-100">
              <Image
                className={styles.imgstyle}
                src={item.imageSource1}
                alt={item.alt}
                width={1000}
                height={1000}
                priority
              />
            </div>
            {/* h-50 is the hight of the card */}
            <div className="relative w-full h-50 sm:h-72 lg:h-[80%]  sm:w-[50%] lg:w-[45%] rounded-xl border border-gray-100 ">
              <Image
                className={styles.imgstyle}
                src={item.imageSource2}
                alt={item.alt}
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
