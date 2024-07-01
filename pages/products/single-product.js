import { data } from "./data.js";

const currentURL = window.location.href;
const splitURL = currentURL.split("/");
const params = splitURL[5];
const splitStr = params.replaceAll("-", " ");
const result = data.find(
  (item) => item.title.toLowerCase() === splitStr.toLowerCase()
);

$("head").ready(function () {
  $("head").append(`
<title>${result.title} | NorthernBot</title>
`);
});

$("#product-container").ready(function () {
  $("#product-info").append(`
<div class="card-container">
  <h2 alt=${result.title}><b>${result.title}</b></h2>
  <p>${result.category}</p>
  <h2>Features:</h2>
</div>
`);

  $("#product-features").append(
    result.features.map(
      (feature, index) => `<li key="${index}">${feature}</li>`
    )
  );

  $("#product-description").append(
    `
    <h2>Description:</h2>
    <p>
      ${result.description}
    </p>`
  );
});
