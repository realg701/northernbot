import { data } from "./data.js";

const currentURL = window.location.href;
const splitURL = currentURL.split("/");
const params = splitURL[5];
const splitStr = params.replace("-", " ");
const result = data.find(
  (item) => item.title.toLowerCase === splitStr.toLowerCase
);

$("head").ready(function () {
  $("head").append(`
<title>${result.title} | NorthernBot</title>
`);
});

$("#products-container").ready(function () {
  $("#products-container").append(`
    <div class="container">
      <img src=".${result.image}" alt="${result.title}" style="width:100%">
      <div class="card-container">
        <h4 alt=${result.title}><b>${result.title}</b></h4>
        <p>${result.category}</p>
        <p>${result.features}</p>
      </div>
    </div>
  `);
});

console.log(result);
