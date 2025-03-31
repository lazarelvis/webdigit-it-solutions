import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className="HomepageHero pt-22 px-4">
      <div className="hero px-4">
        <h1 className="herotext text-4xl leading-12  tracking-normal   font-black">
          Transform your ideas into digital experiences
        </h1>
        <p className="font-light text-[#425466] font-light pt-8 text-lg">
          Join the millions of companies that use Stripe to accept payments
          online and in person, embed financial services, power custom revenue
          models, and build a more profitable business.
        </p>
        <div className="heroButtons flex pt-6">
          <button className="flex bg-[#0a2540] hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full">
            Primeste oferta
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

          <button className="flex bg-white hover:bg-blue-700 text-[#0a2540] text-sm font-bold py-2 px-4 rounded-full">
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
          </button>
        </div>
      </div>
    </section>
  );
}
