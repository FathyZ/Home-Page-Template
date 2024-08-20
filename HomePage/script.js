const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        
        navLinks.forEach(navLink => {
            navLink.classList.remove('active-nav');
        });
        this.classList.add('active-nav');
    
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const floatingButton = document.getElementById("floatingButton");
    const menu = document.getElementById("menu");
    const html = document.documentElement;
    let currentFontSize = parseInt(window.getComputedStyle(html).fontSize);

    floatingButton.addEventListener("click", function() {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });

    document.getElementById("bigger").addEventListener("click", function() {
        currentFontSize += 2;
        if (currentFontSize >20) currentFontSize = 20; 
        html.style.fontSize = currentFontSize + "px";
        menu.style.display = "flex";

    });

    document.getElementById("smaller").addEventListener("click", function() {
        currentFontSize -= 2;
        if (currentFontSize < 10) currentFontSize = 10; 
        html.style.fontSize = currentFontSize + "px";
        menu.style.display = "flex";

    });

    document.getElementById("normal").addEventListener("click", function() {
        currentFontSize = 16; 
        html.style.fontSize = currentFontSize + "px";
        menu.style.display = "flex";

    });
});


    const themeToggleButton = document.getElementById('themeToggle');
    const themeStylesheet = document.getElementById('themeStylesheet');
    let isContrast = false;

    themeToggleButton.addEventListener('click', function() {
        if (isContrast) {
            themeStylesheet.setAttribute('href', 'Sass/main.css');
            themeToggleButton.textContent = 'Contrast';
        } else {
            themeStylesheet.setAttribute('href', 'Sass/main_contrast_theme.css');
            themeToggleButton.textContent = 'Normal';
        }
        isContrast = !isContrast;
    });