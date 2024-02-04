// Objects with data for the navigation links

export const headerNavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/booking" },
  { name: "Order Online", path: "/order" },
];

export const footerNavLinks = {
  home: {
    title: "Home",
    links: [
      { name: "About Us", url: "#" },
      { name: "Menu", url: "#" },
      { name: "Reservations", url: "/booking" },
      { name: "Order Online", url: "#" },
    ],
  },
  faqs: {
    title: "FAQ's",
    links: [
      { name: "Contact Form", url: "#" },
      { name: "Feedback", url: "#" },
    ],
  },
  policies: {
    title: "Privacy Policy",
    links: [
      { name: "Terms & Conditions", url: "#" },
      { name: "Cookie Policy", url: "#" },
    ],
  },
};
