"use client";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GhostNavbar } from "react-hamburger-menus";
import { ApiContext } from "../context/ApiProvider";
import "react-hamburger-menus/dist/style.css";
import Scene from "./Scan";

export default function Navigation() {
  const { data, language, handleLanguage } = useContext(ApiContext);
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const normalizePath = (path) => path.replace(/\/+$/, ""); // Remove trailing slash

  const handleMenuToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu open or closed
  };

  const handleLinkClick = () => {
    const checkbox = document.querySelector(
      '[data-testid="GhostNavbar-checkbox"]'
    );
    checkbox.click();
    setIsOpen(false); // Close the menu when a link is clicked
  };

  const handleMenuWithLanguage = (e) => {
    e.preventDefault();
    handleLanguage();
    handleLinkClick();
  };

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "Who We Are", link: "/about/" },
    { name: "What We Do", link: "/services/" },
    { name: "Projects", link: "/projects/" },
    { name: "Blog", link: "/blog/" },
    { name: "Careers", link: "/careers/" },
    { name: "Contact", link: "/contact/" },
    //  { name: "العربية", link: "#", action: handleMenuWithLanguage },
  ];

  const menuItemsAR = [
    { name: "بيت", link: "/" },
    { name: "من نحن", link: "/about/" },
    { name: "ماذا نفعل", link: "/services/" },
    { name: "المشاريع", link: "/projects/" },
    { name: "مدونتنا", link: "/blog/" },
    { name: "وظائف", link: "/careers/" },
    { name: "اتصال", link: "/contact/" },
    // { name: "English", link: "/#", action: handleMenuWithLanguage },
  ];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  console.log("Current Path is", currentPath);

  return (
    <>
      <div className="header-menu">
        <GhostNavbar
          //isOpen={isOpen}
          // menuClicked={handleMenuToggle}
          logo={<p>Logo</p>}
          styles={{
            display: isOpen ? "block" : "none",
            fontColor: "#FFFFFF",
            fontHoverColor: "black",
            floatButtonSize: 0.9,
            floatButtonX: 6,
            floatButtonY: 15,
            // navigationButton: {
            //   width: "50px",
            //   borderRadius: "20px",
            //   backgroundColor: "white",
            // },
            navigationBackground: {
              backgroundColor: "#000",
            },
            iconColor: "#fff",
          }}
        >
          <ul>
            {language === "en"
              ? menuItems.map(({ id, link, action, name }) => (
                  <li key={id} className={currentPath === link ? "active" : ""}>
                    <Link href={link} onClick={action || handleLinkClick}>
                      {name}
                    </Link>
                  </li>
                ))
              : menuItemsAR.map(({ id, link, action, name }) => (
                  <li key={id} className={currentPath === link ? "active" : ""}>
                    <Link href={link} onClick={action || handleLinkClick}>
                      {name}
                    </Link>
                  </li>
                ))}
          </ul>
          <div class="rightnav">
            <Scene />
            <div class="navthumb">
              <img src="https://thirtysevenevents.perpetualbuild.com/wp-content/uploads/2024/11/service-baloon.png" />
            </div>
            <div></div>
            <div className="followtext">
              {language === "en" ? "Follow Us on" : "تابعونا على"}
            </div>
            <ul style={{ position: "absolute", top: "100%" }}>
              <li>
                <a
                  href={data ? data.theme_options_data.linkedin_link : "#"}
                  target="_blank"
                  className="me-2"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href={data ? data.theme_options_data.instagram_link : "#"}
                  target="_blank"
                  className="me-2"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href={data ? data.theme_options_data.youtube_link : "#"}
                  target="_blank"
                  className="me-2"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href={data ? data.theme_options_data.twitter_link : "#"}
                  target="_blank"
                  className="me-2"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a
                  href={data ? data.theme_options_data.tiktok_link : "#"}
                  target="_blank"
                  className="me-2"
                >
                  <i className="bi bi-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>
        </GhostNavbar>
      </div>
    </>
  );
}
