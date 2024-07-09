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

  // Loader
  $("body").append(`
    <div class="loader-wrapper">
      <span class="loader">
        <span class="loader-inner"><img src="${
          logo + logoFix + logoFixGitHub + gitHubURL
        }/public/images/loader.png" alt="logo"/></span>
      </span>
    </div>
    `);
});

const currentURL = window.location.href;
const gitHubURL = currentURL.includes("github") ? "/northernbot" : "";

const logo = currentURL.includes("pages") ? "../../" : "";
const logoFix = currentURL.split("/").length == 7 ? ".." : "";
const logoFixGitHub = currentURL.split("/").length == 8 ? "../.." : "";

$(document).ready(function () {
  // NavBar
  $("body").append(`
<nav>
<div class="custom-navbar">
    <a href="${gitHubURL}/"><img class="logo" src="${logo + logoFix + logoFixGitHub + gitHubURL}/public/images/logo.png" alt="logo"></a>
    <ul id="navbar-lg">
        <a class="home-page" href="${gitHubURL}/">Home</a>
        <div class="products-page dropdown" >
            <a href="${gitHubURL}/pages/products" class="">Products</a>
            <div class="products-dropdown-content dropdown-content">
                <a href="${gitHubURL}/pages/products/category/floor-scrubbers">Floor Scrubbers</a>
                <a href="${gitHubURL}/pages/products/category/floor-sweepers">Floor Sweepers</a>
            </div>
        </div>
        <a class="location-page" href="${gitHubURL}/pages/location">Location</a>
        <a class="about-page" href="${gitHubURL}/pages/about">About</a>
        <a class="contact-page" href="${gitHubURL}/pages/contact">Contact</a>
        <a class="contact-btn" href="tel:(905) 632-0559"><img class="" width="10" height="10" src="${gitHubURL}/public/images/svgs/telephone.svg" alt="telephone" /> (905) 632-0559 </a>
    </ul>
    <div id="navbar-md" class="dropdown">
            <a class="contact-btn" href="tel:(905) 632-0559"><img class="" width="10" height="10" src="${gitHubURL}/public/images/svgs/telephone.svg" alt="telephone" /> (905) 632-0559 </a>

        <button class="dropbtn"><img src="${
          logo + logoFix + logoFixGitHub + gitHubURL
        }/public/images/svgs/menu_24dp.svg" alt="menu"></button>
        <div class="dropdown-content">
            <a href="${gitHubURL}/">Home</a>
            <a href="${gitHubURL}/pages/products">Products</a>
            <a href="${gitHubURL}/pages/products/category/floor-scrubbers">Floor Scrubbers</a>
            <a href="${gitHubURL}/pages/products/category/floor-sweepers">Floor Sweepers</a>
            <a class="about-page" href="${gitHubURL}/pages/location">Location</a>
            <a href="${gitHubURL}/pages/about">About</a>
            <a href="${gitHubURL}/pages/contact">Contact</a>
        </div>
    </div>
</div>
</nav>
`);

  // Parallax
  $(".parallax").append(`
      <img src="${gitHubURL}/public/images/parallax.jpg" alt="floor scrubbers" />
      <span class="hero-box">
        <strong>Walk-Behind and Ride-On Floor Scrubbers</strong>
        <p>US-made steel framed scrubbers that get the job done</p>
      </span>
`);

  // Get A Quote
  $("#about-us-container").append(`
      <h1>About NortherBot</h1>
      <div class="about-us d-flex justify-content-center text-center flex-wrap" style="max-width: 600px">
        <p>
          When you need industrial floor sweepers and scrubbers at a good
          price that will get results, you need Factory Cat Cleaning
          Equipment!
        </p>
        <p>
          In business since 1976, All Lift Ltd. offer an extensive line of
          reliable floor scrubbers and floor sweepers for rent and purchase
          for any application and budget.
        </p>
        <p>
          For over 40 years, customers all over Ontario have trusted us to
          provide them with effective industrial floor cleaning equipment to
          keep their business moving.
        </p>
        <p>
          <a class="get-a-quote d-flex justify-content-center align-items-baseline gap-2 py-2 px-4 rounded-3" href="/pages/contact/"  style="max-width: 300px">
            Get A Quote
            <i class="fa-solid fa-circle-arrow-right fa-shake" style="color:#74c0fc" ></i>
          </a>
        </p>
        </div>`);

  // Footer
  $("body").append(`<!-- Section: Social media -->
<footer
    class="text-center text-lg-start text-white"
    style="background-color: #1c2331"
    >
    <section class="p-4" style="background-color:#64c6ff;color:black">
        <div class="d-flex justify-content-center justify-content-md-between
     align-items-baseline mx-auto" style="max-width: 1200px;">
            <!-- Left -->
            <div class="d-none d-md-block social-text mx-2">
                <span>Get connected with us on social networks:</span>
            </div>
            <!-- Left -->
    
            <!-- Right -->
            <div class="social-links">
                <a href="" class="text-white mx-3">
                    <i class="fab fa-facebook-f" style="color:black"></i>
                </a>
                <a href="" class="text-white mx-3">
                    <i class="fab fa-twitter" style="color:black"></i>
                </a>
                <a href="" class="text-white mx-3">
                    <i class="fab fa-google"></i>
                </a>
                <a href="" class="text-white mx-3">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="text-white mx-3">
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
                    <a href="${gitHubURL}/"><h6 class="text-uppercase fw-bold text-white">NorthernBot</h6></a>
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
                    <a href="${gitHubURL}/pages/products"><h6 class="text-uppercase fw-bold text-white">Products</h6></a>
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
                    <a href="${gitHubURL}/pages/contact"><h6 class="text-uppercase fw-bold text-white">Contact</h6></a>
                    <hr class="mb-4 mt-0 d-inline-block mx-auto"
                        style="width: 60px; background-color: #7c4dff; height: 2px" />
                    <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                    <p><i class="fas fa-envelope mr-3"></i> <a href="mailto:office@northernbot.com"
                      >office@northernbot.com</a
                    ></p>
                    <p><i class="fas fa-phone mr-3"></i>
                        <a href="tel:(905) 632-0559">(905) 632-0559</a>
                    </p>
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
    <!-- Copyright -->
</footer>

    `);
});
