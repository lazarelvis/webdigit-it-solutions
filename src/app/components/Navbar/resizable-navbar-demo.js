"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Acasă",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Despre Noi",
      link: "/desprenoi",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isnothomepage = pathname != "/";

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo variant={isnothomepage ? `dark` : `primary`} />
          <NavItems
            items={navItems}
            variant={isnothomepage ? `dark` : `primary`}
          />
          <div className="flex items-center gap-4">
            <NavbarButton
              href="/logare"
              variant={isnothomepage ? `dark` : `secondary`}
            >
              Logare
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary">
              Cere ofertă
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo variant={isnothomepage ? `dark` : `primary`} />
            <MobileNavToggle
              variant={isnothomepage ? `dark` : `primary`}
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white-600 dark:text-white"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Logare
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Cere Ofertă
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}
