const currentURL = window.location.href;
const gitHubURL = currentURL.includes("github") ? "/northernbot" : "";

export const cardData = [
  {
    link: "/pages/products/category/floor-scrubbers/",
    title: "Floor Scrubber",
    image: "/public/images/category-card/image-1.jpg",
  },
  {
    link: "/pages/products/category/floor-sweepers/",
    title: "Floor Sweepers",
    image: "/public/images/category-card/image-2.jpg",
  },
  {
    link: "/pages/products/category/smart-mops/",
    title: "Smart Mop",
    image: "/public/images/category-card/image-3.jpg",
  },
  {
    link: "/pages/contact/",
    title: "Contact Us",
    image: "/public/images/category-card/image-4.jpg",
  },
];

export const navLink = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/pages/products",
    title: `
        <div class="products-page dropdown" >
            <a href="${gitHubURL}/pages/products" class="">Products</a>
            <div class="products-dropdown-content dropdown-content">
                <a href="${gitHubURL}/pages/products/category/floor-scrubbers">Floor Scrubbers</a>
                <a href="${gitHubURL}/pages/products/category/floor-sweepers">Floor Sweepers</a>
                <a href="${gitHubURL}/pages/products/category/smart-mops">Smart Mops</a>
            </div>
        </div>
`,
  },
  {
    link: "/pages/location",
    title: "Location",
  },
  {
    link: "/pages/about",
    title: "About",
  },
  {
    link: "/pages/contact",
    title: "Contact",
  },
  {
    link: "tel:(905) 632-0559",
    title: "(905) 632-0559",
    image: `<img class="" width="10" height="10" src="${gitHubURL}/public/images/svgs/telephone.svg" alt="telephone" /> (905) 632-0559`,
    class: "contact-btn d-flex justify-content-center align-items-center",
  },
];

export const dropDownLink = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/pages/products",
    title: "Products",
  },
  {
    link: "/pages/products/category/floor-scrubbers",
    title: "Floor Scrubbers",
  },
  {
    link: "/pages/products/category/floor-sweepers",
    title: "Floor Sweepers",
  },
  {
    link: "/pages/products/category/smart-mops",
    title: "Smart Mops",
  },
  {
    link: "/pages/location",
    title: "Location",
  },
  {
    link: "/pages/about",
    title: "About",
  },
  {
    link: "/pages/contact",
    title: "Contact",
  },
];
