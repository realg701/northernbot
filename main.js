$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $("nav").css("background", "white");
      $("a").css("color", "black");
    } else {
      $("nav").css("background", "rgba(255, 255, 255, 0.678)");
      // $("a").css("color", "blue");
    }
  });
});
const currentURL = window.location.href;
const logo = "./public/images/logo.png";
const pagesLogo = "../../public/images/logo.png";
const preFix = "" && "/northernbot";

$("nav").ready(function () {
  $("nav").append(`<div class="custom-navbar">
    <a href="/"><img class="logo" src=${
      currentURL == `${preFix}/` ? logo : pagesLogo
    } alt="logo"></a>
    <ul id="navbar-lg">
        <a href="${preFix}/">Home</a>
        <a href="${preFix}/pages/products">Products</a>
        <a href="${preFix}/pages/about">About</a>
        <a href="${preFix}/pages/contact">Contact</a>
    </ul>
    <div id="navbar-md" class="dropdown">
        <button class="dropbtn"><img src="/public/images/svgs/menu_24dp.svg" alt="menu"></button>
        <div class="dropdown-content">
            <a href="${preFix}/">Home</a>
            <a href="${preFix}/pages/products">Products</a>
            <a href="${preFix}/pages/about">About</a>
            <a href="${preFix}/pages/contact">Contact</a>
        </div>
    </div>
</div>`);
});

$("footer").ready(function () {
  $("footer").append(`<!-- Section: Social media -->
<section class="d-flex justify-content-between p-4" style="background-color: #6351ce">
    <!-- Left -->
    <div class="me-5">
        <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div class="social-links">
        <a href="" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
            <i class="fab fa-twitter"></i>
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
        <a href="" class="text-white me-4">
            <i class="fab fa-github"></i>
        </a>
    </div>
    <!-- Right -->
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
                <h6 class="text-uppercase fw-bold">Company name</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Products</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                <p>
                    <a href="#!" class="text-white">MDBootstrap</a>
                </p>
                <p>
                    <a href="#!" class="text-white">MDWordPress</a>
                </p>
                <p>
                    <a href="#!" class="text-white">BrandFlow</a>
                </p>
                <p>
                    <a href="#!" class="text-white">Bootstrap Angular</a>
                </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                <p>
                    <a href="#!" class="text-white">Your Account</a>
                </p>
                <p>
                    <a href="#!" class="text-white">Become an Affiliate</a>
                </p>
                <p>
                    <a href="#!" class="text-white">Shipping Rates</a>
                </p>
                <p>
                    <a href="#!" class="text-white">Help</a>
                </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
        </div>
        <!-- Grid row -->
    </div>
</section>
<!-- Section: Links  -->

<!-- Copyright -->
<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>
<!-- Copyright -->`);
});
