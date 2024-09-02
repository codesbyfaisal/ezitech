const headerElement = document.querySelector('header')
const headerHtml = `
    <div class="container flex flex-justify-between gap-x-2 gap-y-1">
      <ul class="social-links flex">
        <li class="social-item flex gap-x-1">
          <a href="https://www.facebook.com/ezitech"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/ezitechpk/"><i class="fab fa-instagram"></i></a>
          <a href="https://www.behance.net/ezitech"><i class="fab fa-behance"></i></a>
          <a href="https://www.linkedin.com/company/ezitechpk/"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/@ezitechpk"><i class="fab fa-youtube"></i></a>
        </li>

        <li class="auth-links">
          <a href="" class="login-link">
            <i class="fas fa-user mr-1-half"></i>Login
          </a>
          <span class="separator"></span>
          <a href="" class="register-link">Register</a>
        </li>
      </ul>

      <ul class="contact-info flex gap-x-2">
        <li class="contact-item">
          <i class="fas fa-clock"></i> Mon - Fri 8.00 - 20.00
        </li>
        <li class="contact-item">
          <i class="fas fa-map-marker-alt"></i> Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan
        </li>
        <li class="contact-item">
          <i class="fas fa-phone"></i> +92 3455555396
        </li>
      </ul>
    </div>
  `

headerElement.innerHTML = headerHtml