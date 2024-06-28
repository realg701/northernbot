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
  $("head").append(``);
});
