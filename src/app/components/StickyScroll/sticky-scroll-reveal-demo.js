import { cn } from "../../Lib/utils";
import {
  IconCurrencyDollar,
  IconHelp,
  IconBuildingStore,
  IconPhotoSquareRounded,
  IconServer2,
  IconWorldWww,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Site prezentare profesional",
      description:
        "Creăm site-uri de prezentare cu de design responsive, optimizate SEO și ușor de administrat.",
      icon: <IconWorldWww />,
    },
    {
      title: "Design grafic",
      description:
        "Iți creăm designul pentru logo-uri, bannere web și alte elemente grafice, totul fară alte costuri suplimentare.",
      icon: <IconPhotoSquareRounded />,
    },
    {
      title: "Domeniu și găzduire",
      description:
        "Oferim pachete de găzduire pentru site-ul sau magazinul tău online cu domeniu inclus.",
      icon: <IconServer2 />,
    },

    {
      title: "Magazin online la cheie",
      description:
        "Realizăm magazine online la cheie în platformele WordPress.",
      icon: <IconBuildingStore />,
    },

    {
      title: "Cost redus",
      description: "Un cost redus pentru o administrare lunară sau anuală.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "24/7 Suport clienți",
      description:
        "Avem mereu o persoană pregătită pentru nevoile dumneavoastră.",
      icon: <IconHelp />,
    },
  ];
  return (
    <div className="bg-[#f6f9fc]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto  p-8">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-[#e5e7eb] ",
        (index === 0 || index === 3) && "lg:border-l dark:border-[#e5e7eb]",
        index < 3 && "lg:border-b dark:border-[#e5e7eb]"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-200 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-200 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-[#0a2540]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-grey-300 group-hover/feature:bg-[#00d4ff] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-[#0a2540]">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-[#425466] max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
