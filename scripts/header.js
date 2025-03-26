/* Submenu Toggle */

let hideTimeout;

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('mouseenter', function () {
    clearTimeout(hideTimeout);
    hideAllSubmenus();
    const submenuId = this.getAttribute('data-submenu');
    const submenu = document.getElementById(submenuId);

    if (submenu) {
      submenu.classList.remove('hidden');
      submenu.classList.add('visible');
    }
  });
});

document.querySelectorAll('.submenu').forEach(submenu => {
  submenu.addEventListener('mouseenter', function () {
    clearTimeout(hideTimeout);
  });

  submenu.addEventListener('mouseleave', function () {
    hideTimeout = setTimeout(() => {
      this.classList.remove('visible');
      this.classList.add('hidden');
    }, 300);
  });
});

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('mouseleave', function () {
    hideTimeout = setTimeout(hideAllSubmenus, 300);
  });
});

function hideAllSubmenus() {
  document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.classList.remove('visible');
    submenu.classList.add('hidden');
  });
}

/* Search Bar */

let isSearchVisible = false;

function toggleSearch(event) {
  const div = document.querySelector('.search-menu');
  const icon = document.getElementById('search-icon');
  const input = document.getElementById('search-input');

  event.stopPropagation();
  
  if (isSearchVisible) {
    div.classList.remove('display');
    icon.src = 'Images/Icons/icon-search.svg';
    isSearchVisible = false;
  } else {
    div.classList.add('display');
    icon.src = 'Images/Icons/icon-x-gray.svg';
    input.focus();
    isSearchVisible = true;
  }
}

document.addEventListener('click', function(event) {
  const div = document.querySelector('.search-menu');
  const icon = document.getElementById('search-icon');
  const searchBar = div.querySelector('.search-bar');
  
  if (isSearchVisible) {
    if (!div.contains(event.target) && !searchBar.contains(event.target)) {
        div.classList.remove('display');
        icon.src = 'Images/Icons/icon-search.svg';
        isSearchVisible = false;
    }
  }
});