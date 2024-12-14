import { Typography } from "@material-tailwind/react";
import React from "react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Confidențialitate", "Termeni", "Contact"];

export function Footer() {
  return (
      <footer className="bg-black text-white py-5 relative">
        {/* Litigation Images Section */}
        <div className="flex justify-center gap-4 pb-4">
          <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" target="_blank" rel="noopener noreferrer">
            <img
                src="/logos/SOL.png"
                alt="Soluționarea online a litigiilor"
                className="h-10"
            />
          </a>
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
            <img
                src="/logos/SAL.png"
                alt="Soluționarea alternativă a litigiilor"
                className="h-10"
            />
          </a>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-4">
          {/* Logo and Links Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <img
                  src="/logos/logo-white.png"
                  alt="Logo"
                  className="h-10"
              />
            </div>
            <ul className="flex flex-wrap gap-4">
              {LINKS.map((link, index) => (
                  <li key={index}>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-normal text-white hover:text-gray-300 transition-colors"
                    >
                      {link}
                    </Typography>
                  </li>
              ))}
            </ul>
          </div>

          {/* Partners Section */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Typography variant="small" className="text-white font-semibold text-sm">
              Partener digitalizare
            </Typography>
            <a href="https://web365.ro" target="_blank" rel="noopener noreferrer">
              <img
                  src="/logos/web365-logo.png"
                  alt="Partener Digitalizare"
                  className="h-6"
              />
            </a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
