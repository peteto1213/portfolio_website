document.addEventListener('DOMContentLoaded', (event) =>{

    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    // show navbar column
    toggleButton.addEventListener('click', () =>{
        navbarLinks.classList.toggle('active');
    })

    // navbar will also close if any of the list item is clicked
    navbarLinks.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    }) 

    // show projects according to chosen category filter
    $('.portfolio .button-container .btn').click(function(){

        let filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.portfolio .image-container .box').show('400')
        }
        else{
            // '.' + filter, if filter = design --> '.design'
            $('.portfolio .image-container .box').not('.'+filter).hide('200');
            $('.portfolio .image-container .box').filter('.'+filter).show('400');
        }

    });

    $('#theme-toggler').click(function(){
        $(this).toggleClass('fa-sun');
        $('body').toggleClass('dark-theme');
    });

})