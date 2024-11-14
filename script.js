document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button hover animation
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#ffa500';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#ffcc00';
        });
    });
});