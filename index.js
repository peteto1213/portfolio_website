document.addEventListener('DOMContentLoaded', (event) =>{

    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener('click', () =>{
        navbarLinks.classList.toggle('active');
    })

    // navbar will also close if any of the list item is clicked
    navbarLinks.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
})



})