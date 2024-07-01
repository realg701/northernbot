import { data } from "./data.js";

const currentURL = window.location.href;
const gitHubURL = currentURL.includes("github");
const preFix = gitHubURL ? "/northernbot" : "";

$("#products-container").ready(function () {
  $("#products-container").append(
    data.map((product, index) => {
      const productTitle = product.title;
      const toLink = productTitle.replaceAll(" ", "-").toLowerCase();
      return `
<a key=${index} href=${preFix + "/pages/products/" + toLink}>
  <div class="card">
    <img src=${product.image[0]} alt="${product.title}" style="width:100%">
    <div class="card-container">
      <h4 alt=${product.title}><b>${product.title}</b></h4>
      <p>${product.category}</p>
    </div>
  </div>
</a>
`;
    })
  );
});
