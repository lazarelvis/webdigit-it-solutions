import Image from "next/image";
import styles from "./portfolio.module.css";
import PortfolioCard from "./ui/porfolio-card";
export default function Portfolio() {
  return (
    <div className="Portfolio max-w-6xl mx-auto antialiased p-8">
      <h2 className="font-bold text-4xl text-center text-slate-700 capitalize">
        Proiecte
        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10 pl-2">
          realizate
        </span>
        <p className="text-base text-slate-500 font-normal text-center max-w-2xl mx-auto my-4 normal-case">
          Câteva dintre proiectele realizate construite pe platforma React și
          altele.
        </p>
      </h2>
      <PortfolioCard />
      {/* de aici incepe compoennta */}
    </div>
  );
}
