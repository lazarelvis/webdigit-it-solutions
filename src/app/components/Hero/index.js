import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ onClick }) {
  return (
    <section className="HomepageHero pt-16 px-4 flex">
      <div className="hero px-4 mx-auto max-w-2xl">
        <div className="Homepage-webdigit">
          <h1 className="herotext text-4xl leading-12  tracking-normal   font-black sm:text-5xl sm:leading-20 md:text-7xl">
            Transformăm ideile tale în prezență online de impact
          </h1>
          <p className="font-light text-[#425466] font-light pt-8 text-lg">
            Ai nevoie de un site care să îți reprezinte afacerea? La Webdigit,
            combinăm design-ul modern cu tehnologia de ultimă generație pentru a
            crea site-uri de prezentare care inspiră încredere. Oferim servicii
            complete de web design, grafică personalizată și găzduire web
            performantă, ca tu să te concentrezi pe ceea ce faci cel mai bine.
          </p>
          <div className="heroButtons flex py-6 sm:py-10">
            <button
              onClick={onClick}
              className="flex bg-[#0a2540] hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full cursor-pointer "
            >
              Primește o ofertă
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <Link
              href="/contact"
              className="flex bg-white hover:bg-indigo-600 hover:text-white text-[#0a2540] text-sm font-bold py-2 px-4 rounded-full "
            >
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`element dreapta ${styles.heroSection} w-4xl h-140 max-md:hidden p-8`}
      >
        <div className="flex">
          <div className="rounded-full h-4 w-4 rounded-full bg-red-400 mx-1"></div>
          <div className="rounded-full h-4 w-4 rounded-full bg-yellow-400 mx-1"></div>
          <div className="rounded-full h-4 w-4 rounded-full bg-green-400 mx-1"></div>
        </div>

        <Image
          style={{ transform: "translate(-100px, -80px)" }}
          src="/webdigit.ro.png"
          loading="eager"
          alt="Webdigit.ro tehnologie de ultima generatie"
          width={900}
          height={900}
        />
      </div>
    </section>
  );
}
