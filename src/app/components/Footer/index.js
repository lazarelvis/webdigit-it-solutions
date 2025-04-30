import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

const sections = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/webdigit.ro/",
  },
  {
    name: "Tiktok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@webdigit.ro",
  },
  { name: "Github", icon: FaGithub, link: "https://github.com/lazarelvis" },
];

export default function Footer() {
  return (
    <div className="w-full bg-[#0a2540] text-red-500 py-y ">
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-[#f6f9fc]">
        <div>
          <p className="py-4">
            Toate drepturile rezervate &#169; 2025 Webdigit
          </p>
          <div className="flex text-sm font-medium">
            <p className="pr-5">
              <Link href="/termeni-si-conditii">Termenii și condiții</Link>
            </p>
            <p>
              <Link href="/politica-de-confidentialitate">
                Politica de confidențialitate
              </Link>
            </p>
          </div>
          <p></p>
        </div>
        <div className="flex justify-between sm:w-[200px] pt-4 text-2xl">
          {items.map((x, index) => {
            return (
              <Link key={index} href={x.link}>
                <x.icon className="hover:text-white" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
