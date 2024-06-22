import { data } from "./data.js";

$("#startchange").ready(function () {
  $("#startchange").append(
    data.map(
      (product) =>
        `<a href=${product.link}><div class="card">
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
