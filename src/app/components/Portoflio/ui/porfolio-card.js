import Image from "next/image";
import styles from "../portfolio.module.css";

export default function PortfolioCard() {
  const content = [
    {
      title: "Gaming Website",
      description1:
        "Un website în care poți să te joci multiple jocuri realizate în Unity și ai posibilitea să intri în competiție cu alti jucători.",
      description2:
        "Aplicația a fost realizată folosind librăria React, Unity, Nodejs, Javascript și MongoDB pentru stocarea datelor.",
      imageSource1: "/gaming-website.png",
      imageSource2: "/gaming-website-games.png",
      alt: "Website Gaming",
      linkPreview: "https://mandegaming.netlify.app/",
    },
    {
      title: "Restaurant",
      description1:
        "Restaurant website de prezentare cu meniu și diferite funcționalități",
      description2:
        "S-a folosit aplicația ReactJS, Javascript, NodeJS și MongoDB.",
      imageSource1: "/grilli-restaurant.png",
      imageSource2: "/grilli-restaurant-menu.png",
      alt: "Restaurant site prezentare",
      linkPreview: "https://grili-restaurant.netlify.app/",
    },
    {
      title: "Site prezentare / Portfoliu",
      description1:
        "O aplicație de prezentare a portofoliului, experienței și proiectului la care o persoană a lucrat.",
      description2: "Pentru realizare s-a folosit framework-ul Next.js",
      imageSource1: "/portfolio-website.png",
      imageSource2: "/portfolio-website-2.png",
      alt: "Site prezentare / Portfoliu website",
      linkPreview: "https://lazarelvis.ro/",
    },
  ];

  return (
    <div className="relative z-10">
      {content.map((item, index) => (
        <div
          key={index}
          className="py-6 lg:py-10 flex flex-col lg:flex-row  my-20"
        >
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
            <div className="relative w-full h-50 sm:h-72 lg:h-[80%]  sm:w-[50%] lg:w-[55%] rounded-xl border border-gray-100">
              <Image
                src={item.imageSource1}
                alt={item.alt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            {/* h-50 is the hight of the card */}
            <div className="relative w-full h-50 sm:h-72 lg:h-[80%]  sm:w-[50%] lg:w-[55%]  rounded-xl border border-gray-100 ">
              <Image
                src={item.imageSource2}
                alt={item.alt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
