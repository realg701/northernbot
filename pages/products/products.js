import { data } from "./data.js";

const currentURL = window.location.href;
const gitHubURL = currentURL.includes("github");
const preFix = gitHubURL ? "/northernbot" : "";

$("#products-container").ready(function () {
  $("#products-container").append(
    data.map((product, index) => {
      const productTitle = product.title.replaceAll(" ", "-").toLowerCase();
      const productCategory = product.category
        .replaceAll(" ", "-")
        .toLowerCase();
      return `
<div class="card" key=${index}>
  <a href=${preFix + "/pages/products/" + productTitle}>
    <div class="card-image-container">
      <img src=${product.image[0]} alt="${product.title}" style="width:100%">
    </div>
    <div class="card-container">
      <h4 alt=${product.title}><b>${product.title}</b></h4>
      <p><a href="/pages/products/category/${productCategory}">${
        product.category
      }</a></p>
      <p style="margin: 0;">${product.purpose + " " + product.category}</p>
    </div>
  </a>
</div>
`;
    })
  );
});
