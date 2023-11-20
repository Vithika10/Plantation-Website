// Scroll to Top Function
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show/Hide Button based on scroll position
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var button = document.querySelector(".backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
function toggleMenu() {
    var menu = document.getElementById("menu-main-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}