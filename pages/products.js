import { data } from "./data.js";

$("#startchange").ready(function () {
  $("#startchange").append(
    data.map(
      (product) =>
        `<div>
      <a href=${product.link}><img src="../public/images/logo.png" alt="logo">
        <p>${product.title}</p>
        <br />
        <p>${product.category}</p></a>
      </div>`
    )
  );
});

console.log(data);
