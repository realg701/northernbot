import { data } from "./data.js";

const currentURL = window.location.href;
const gitHubURL = currentURL.includes("github");
const preFix = gitHubURL ? "/northernbot" : "";

$("#products-container").ready(function () {
  $("#products-container").append(
    data.map(
      (product) =>
        `<a href=${preFix + product.link}><div class="card">
          <img src=${product.image} alt="product image" style="width:100%">
          <div class="card-container">
            <h4><b>${product.title}</b></h4>
            <p>${product.category}</p>
          </div>
        </div></a>`
    )
  );
});

console.log(data);
