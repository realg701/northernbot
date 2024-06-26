// Apply CSS On Scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $("nav").css("background", "#64c6ff");
    } else {
      $("nav").css("background", "#ffffff88");
    }
  });

  $(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
  });
});

const currentURL = window.location.href;
const gitHubURL = currentURL.includes("github");

const logo = currentURL.includes("pages") ? "../.." : ".";
const preFix = gitHubURL ? "/northernbot" : "";

// NavBar
$("nav").ready(function () {
  $("nav").append(`
<div class="custom-navbar">
    <a href="${preFix}/"><img class="logo" src="${logo}/public/images/logo.png" alt="logo"></a>
    <ul id="navbar-lg">
        <a class="home-page" href="${preFix}/">Home</a>
        <a class="products-page" href="${preFix}/pages/products">Products</a>
        <a class="about-page" href="${preFix}/pages/about">About</a>
        <a class="contact-page" href="${preFix}/pages/contact">Contact</a>
    </ul>
    <div id="navbar-md" class="dropdown">
        <button class="dropbtn"><img src="${logo}/public/images/svgs/menu_24dp.svg" alt="menu"></button>
        <div class="dropdown-content">
            <a href="${preFix}/">Home</a>
            <a href="${preFix}/pages/products">Products</a>
            <a href="${preFix}/pages/about">About</a>
            <a href="${preFix}/pages/contact">Contact</a>
        </div>
    </div>
</div>
`);
});

// Loader
$(".custom-container").ready(function () {
  $(".custom-container").append(`
<div class="loader-wrapper">
  <span class="loader">
    <span class="loader-inner"></span>
  </span>
</div>
`);
});

// Footer
$("footer").ready(function () {
  $("footer").append(`<!-- Section: Social media -->
<section class="p-4" style="background-color:#64c6ff;color:black">
    <div class="d-flex justify-content-center justify-content-md-between
 align-items-baseline mx-auto" style="max-width: 1200px;">
        <!-- Left -->
        <div class="d-none d-md-block social-text">
            <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div class="social-links">
            <a href="" class="text-white me-4">
                <i class="fab fa-facebook-f" style="color:black"></i>
            </a>
            <a href="" class="text-white me-4">
                <i class="fab fa-twitter" style="color:black"></i>
            </a>
            <a href="" class="text-white me-4">
                <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>
        <!-- Right -->
    </div>
</section>
<!-- Section: Social media -->

<!-- Section: Links  -->
<section class="">
    <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <a href="${preFix}/"><h6 class="text-uppercase fw-bold text-white">NorthernBot</h6></a>
                <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <a href="${preFix}/pages/products"><h6 class="text-uppercase fw-bold text-white">Products</h6></a>
                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                <p>
                    <a href="#!" class="text-white">Home</a>
                </p>
                <p>
                    <a href="#!" class="text-white">Products</a>
                </p>
                <p>
                    <a href="#!" class="text-white">About</a>
                </p>
                <p>
                    <a href="#!" class="text-white">Contact</a>
                </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <a href="${preFix}/pages/contact"><h6 class="text-uppercase fw-bold text-white">Contact</h6></a>
                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            </div>
            <!-- Grid column -->
        </div>
        <!-- Grid row -->
    </div>
</section>
<!-- Section: Links  -->

<!-- Copyright -->
<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
    © 2024 Copyright:
    <a class="text-white" href="/">NorthernBot.com</a>
</div>
<!-- Copyright -->`);
});
