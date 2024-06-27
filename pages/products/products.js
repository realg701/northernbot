import { data } from "./data.js";

const currentURL = window.location.href;
const gitHubURL = currentURL.includes("github");
const preFix = gitHubURL ? "/northernbot" : "";

$("#products-container").ready(function () {
  $("#products-container").append(
    data.map(
      (product, index) =>
        `
<a key=${index} href=${preFix + product.link}>
  <div class="card">
    <img src=${product.image} alt="${product.title}" style="width:100%">
    <div class="card-container">
      <h4 alt=${product.title}><b>${product.title}</b></h4>
      <p>${product.category}</p>
    </div>
  </div>
</a>
`
    )
  );
});

$("head").ready(function () {
  $("head").append(`
<meta
      name="keywords"
      content="Commercial cleaning toronto, MCC Cleaning, MC Commercial Cleaning Locations, Commercial Cleaning Services, MC Commercial Cleaning in Toronto, Industrial Cleaning Services, Storage Cleaning Services, Educational Institute Clean, Move in Move Out Cleaning Services, Disinfection Services, Hospital Clinic Cleaning Services, Post Construction Cleaning Services, Janitorial Services, Window Cleaning Services, Airbnb Cleaning Services,"
    />
    <meta name="title" content="Master Class Commercial Cleaning" />
    <meta
      name="image"
      content="https://mccommercialcleaning.com/images/cleaning-service-images/image-4.jpg"
    />
    <meta name="url" content="https://mccommercialcleaning.com/" />
    <meta
      name="description"
      content="Best commercial cleaning service in Toronto. Professional service for your business needs. Eco-friendly, reliable solutions. Elevate your workspace."
    />

    <!-- Facebook Meta Tag -->
    <meta property="og:title" content="Master Class Commercial Cleaning" />
    <meta
      property="og:image"
      content="https://mccommercialcleaning.com/images/cleaning-service-images/image-4.jpg"
    />
    <meta property="og:url" content="https://mccommercialcleaning.com/" />
    <meta
      property="og:description"
      content="Best commercial cleaning service in Toronto. Professional service for your business needs. Eco-friendly, reliable solutions. Elevate your workspace."
    />

    <!-- Twitter Meta Tag -->
    <meta name="twitter:title" content="Master Class Commercial Cleaning" />
    <meta
      name="twitter:image"
      content=" https://mccommercialcleaning.com/images/cleaning-service-images/image-4.jpg"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:description"
      content="Best commercial cleaning service in Toronto. Professional service for your business needs. Eco-friendly, reliable solutions. Elevate your workspace."
    />
`);
});

console.log(data);
