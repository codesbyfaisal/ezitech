const navElement = document.querySelector('.navbar');
const activePage = navElement.getAttribute('active-page');

const navItems = [
  { name: 'home', label: 'home', href: '/', disabled: false },
  { name: 'about', label: 'about us', href: '/about', disabled: true },
  { name: 'certifications', label: 'certifications', href: '/', disabled: true },
  { name: 'careers', label: 'careers', href: '/', disabled: true },
  { name: 'seminars', label: 'seminars', href: '/', disabled: true },
  { name: 'blogs', label: 'tech blogs', href: '/', disabled: true },
  { name: 'login', label: 'iportal login', href: '/login', disabled: false }
];

const navbarHtml = `
  <div class="container flex flex-justify-between">
    <a href="./" class="logo">
      <img src="./assets/logo.png" alt="EziTech" loading="lazy" class="logo-img">
    </a>

    <ul class="navlinks flex gap-x-2">
      ${navItems.map(item => `
        <li class="nav-link ${item.name === activePage ? 'active' : ''}">
          <a href="${item.href}" ${item.disabled ? 'aria-disabled="true" tabindex="-1" style="pointer-events: none; opacity: 0.5"' : ''}>
            ${item.label}
          </a>
        </li>
      `).join('')}
    </ul>

    <div class="navbar-buttons flex gap-x-2 flex-justify-between">
      <button type="button" class="wishlist">
        <i class="far fa-heart"></i>
      </button>
      <button type="button" class="search">
        <i class="fas fa-search"></i>
      </button>
      <button type="button" class="bars" id="navbar-toggler">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
  <span class="navbar-divider"></span>`;

navElement.innerHTML = navbarHtml;



function navbar() {
  const navbar = document.querySelector('nav .navlinks')
  const navbarToggler = document.querySelector('#navbar-toggler i')

  navbarToggler.addEventListener('click', () => {
    if (navbar.classList.contains('nav-open')) {
      navbar.classList.remove('nav-open')
    } else {
      navbar.classList.add('nav-open')
    }

  })

  document.addEventListener('click', (e) => {
    if (navbar.classList.contains('nav-open') && !navbar.contains(e.target) && e.target != navbarToggler) {
      navbar.classList.remove('nav-open')
    }
  })
}

document.addEventListener('DOMContentLoaded', navbar)
