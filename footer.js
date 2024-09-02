const footerElement = document.querySelector('footer')
let enableImage = footerElement.getAttribute('enable-image') === 'true' ? '' : 'hidden';

const footerHtml = `<footer>
    <div class="top ${enableImage}">
      <h1 class="section-heading">It’s time to <span>start</span> investing in yourself</h1>
      <img src="https://ezitech.org/wp-content/uploads/2023/03/8-3-1441x555-copy-1438x554.webp" alt="">
      <button type="button" class="get-started hidden">Get Started</button>
    </div>

    <div class="footer-content container">
      <div class="about">
        <h1>About</h1>
        <p>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis
          on practical information technology courses that are career and work oriented makes us the top computer
          institute in Rawalpindi, Islamabad, Pakistan.</p>
      </div>

      <div class="popular-courses">
        <h1>Popular Courses</h1>
        <div class="course flex-between-center gap-1 mb-1">
          <img src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_-75x75.webp"
            alt="">
          <div class="course-desc">
            <a class="title">Online Arbitrage Mastermind 2.0 [Resell Products from Home]</a>
            <p class="instructor">Husnain Ali</p>
          </div>
        </div>
        <div class="course flex-between-center gap-1 ">
          <img src="https://ezitech.org/wp-content/uploads/2022/09/node_green_tutorial-_FILEminimizer_-75x75.webp"
            alt="">
          <div class="course-desc">
            <a class="title">The Complete Bootcamp 2024: Node.js, Express, MongoDB, and More</a>
            <p class="instructor">Ezitech</p>
          </div>
        </div>
      </div>

      <div class="pages">
        <h1>Pages</h1>
        <ul class="grid gap-1">
          <li><a href="">BLOG</a></li>
          <li><a href="">EZICODING</a></li>
          <li><a href="">INTERNSHIP</a></li>
          <li><a href="">OUR SERVICES</a></li>
        </ul>
      </div>

      <div class="contact">
        <h1>Contact</h1>
        <p class="mb-1"><i class="fas fa-map-marker-alt"></i> Westridge 1, Office #304-B Peshawar Road, Rawalpindi,
          Pakistan</p>
        <p class="mb-1"><i class="fas fa-phone"></i> Phone: +92 21 123456789</p>
        <p class="mb-1"><i class="fas fa-envelope"></i> Email: 7ZwzK@example.com</p>
      </div>
    </div>

    <div class="copyright container flex-between-center gap-2">
      <p>Copyright © 2024 Ezitech Institute | Design & Develop by <a href="https://ezitech.org">Eziline Software
          House</a>
      </p>


      <div class="footer-social-icons flex gap-1">
        <a href="https://www.facebook.com/ezitech">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.behance.net/ezitech">
          <i class="fab fa-behance"></i>
        </a>
        <a href="https://www.linkedin.com/company/ezitechpk/">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>`

footerElement.innerHTML = footerHtml