let filterDropdowns = document.querySelectorAll(".sidebar-dropdown");
filterDropdowns.forEach(function (dropdown) {
  let toggler = dropdown.querySelector(".sidebar-toggler");
  toggler.addEventListener("click", function (event) {
    event.preventDefault();
    dropdown.classList.toggle("active");
  });
});

let filterWindow = document.querySelector(".filter-window");
let toggler = document.querySelector(".filter-window-toggler");
let backArrow = document.querySelector(".fa-arrow-left");
toggler.addEventListener("click", function (event) {
  event.preventDefault();
  filterWindow.classList.add("active");
});
backArrow.addEventListener("click", function (event) {
  event.preventDefault();
  filterWindow.classList.remove("active");
});
