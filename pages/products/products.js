import { data } from "./data.js";

const currentURL = window.location.href;
const gitHubURL = currentURL.includes("github");
const preFix = gitHubURL ? "/northernbot" : "";

const floorScrubbers = data.filter(
  (item) => item.category == "Floor Scrubbers"
);
const floorSweepers = data.filter((item) => item.category == "Floor Sweepers");
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

// Floor Scrubbers
$("#floor-scrubbers-container").ready(function () {
  $("#floor-scrubbers-container").append(
    floorScrubbers.map((product, index) => {
      const productTitle = product.title;
      const toLink = productTitle.replaceAll(" ", "-").toLowerCase();
      return `
<a key=${index} href=${preFix + "/pages/products/" + toLink}>
  <div class="card">
    <img src=${"../." + product.image[0]} alt="${
        product.title
      }" style="width:100%">
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

// Floor Sweepers
$("#floor-sweepers-container").ready(function () {
  $("#floor-sweepers-container").append(
    floorSweepers.map((product, index) => {
      const productTitle = product.title;
      const toLink = productTitle.replaceAll(" ", "-").toLowerCase();
      return `
<a key=${index} href=${preFix + "/pages/products/" + toLink}>
  <div class="card">
    <img src=${"../." + product.image[0]} alt="${
        product.title
      }" style="width:100%">
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
