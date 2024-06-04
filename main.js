// Responsive Sidebar
function showSidebar() {
 const sidebar = document.querySelector('.sidebar');

 sidebar.style.display = 'block';
}
function hideSidebar() {
 const sidebar = document.querySelector('.sidebar');

 sidebar.style.display = 'none';
};

// window.onscroll = function(){myFunction()};

// const

// Back-to-top
document.addEventListener("DOMContentLoaded", function () {
 const toTop = document.querySelector(".to-top");


 window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
   toTop.classList.add("active");
  } else {
   toTop.classList.remove("active");
  }
 });
})