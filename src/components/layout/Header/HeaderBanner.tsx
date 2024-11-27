// components/HeaderBanner.tsx
"use client"; // Ensure this component runs in a client environment
import React from "react";
import Menu from "./Menu"; // Adjust the import path as necessary

const HeaderBanner: React.FC = () => {
  return (
    <section className="wrapper header-wrapper">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <div className="logo flex items-center flex-row mb-4 md:mb-0">
          <a href="#" title="Go to home" className="emblem" rel="home">
            <img
              className="site_logo h-24"
              src="https://s3c4ca4238a0b923820dcc509a6f75849b.s3waas.gov.in/wp-content/themes/district-theme/images/emblem-dark.png"
              alt="State Emblem of India"
            />
          </a>
          <div className="logo-text ml-2">
            <strong lang="grt" className="site_name_regional text-lg text-[20px]">तलासरी का नाम</strong>
            <h1 className="site_name_english text-xl font-bold text-[30px]">Talasari Name</h1>
          </div>
        </div>

        <div className="relative bg-cover bg-center text-black font-bold flex items-center justify-center mb-4 md:mb-0">
          <div className="absolute inset-0"></div>
          <div className="relative z-10 text-center animate-fade-in">
            <ul className="flex flex-wrap justify-center space-x-4">
              <Menu title="HOME" submenuItems={["History", "Mission", "Vision"]} />
              <Menu title="ABOUT TALASARI" submenuItems={["Programs", "Admissions", "Support"]} />
              <Menu title="DIRECTORY" submenuItems={["Programs", "Admissions", "Support"]} />
              <Menu title="DEPARTMENT" submenuItems={["Programs", "Admissions", "Support"]} />
              <Menu title="TOURISM" submenuItems={["Programs", "Admissions", "Support"]} />
              <Menu title="DOCUMENTS" submenuItems={["Programs", "Admissions", "Support"]} />
              <Menu title="FORMS" submenuItems={["Programs", "Admissions", "Support"]} />
            </ul>
          </div>
        </div>

        <div className="header-right flex items-center">
          <div className="right-content">
            <div className="float-element">
              <a
                aria-label="डिजिटल भारत - बाह्य विंडो जी नवीन विंडोमध्ये उघडते"
                href="http://digitalindia.gov.in/"
                target="_blank"
                title="डिजिटल भारत"
              >
                <img
                  className="sw-logo h-24"
                  src="https://s3c4ca4238a0b923820dcc509a6f75849b.s3waas.gov.in/wp-content/themes/district-theme-5/images/digital-india.png"
                  alt="डिजिटल भारत"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBanner;