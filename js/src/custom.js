$(document).ready(function(){
    $('.has-children').click(function(e){
        e.preventDefault();
        $(this).next().toggleClass('active');
        $(this).toggleClass('active');
    });
    
    $('.filter-dropdown-toggle').click(function(e){
        e.preventDefault();
        $(this).next().toggleClass('active');
        $(this).toggleClass('active');
    });
    
    
    if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })
    }
});