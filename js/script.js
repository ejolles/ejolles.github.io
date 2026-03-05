$(document).ready(function(){
    $(".read").click(function(){
        $(this).prev().toggle();
        $(this).siblings('.dots').toggle();
        if($(this).text()=='read more'){
            $(this).text('read less');
        }
        else{
            $(this).text('read more');
        }
    });

    // Night mode toggle
    $('#night-mode-toggle').click(function() {
        $('body').toggleClass('night-mode');
        
        // Save preference to localStorage
        if ($('body').hasClass('night-mode')) {
            localStorage.setItem('nightMode', 'enabled');
            $(this).html('<i class="fas fa-sun"></i>');
        } else {
            localStorage.setItem('nightMode', 'disabled');
            $(this).html('<i class="fas fa-moon"></i>');
        }
    });

    // Check for saved preference
    if (localStorage.getItem('nightMode') === 'enabled') {
        $('body').addClass('night-mode');
        $('#night-mode-toggle').html('<i class="fas fa-sun"></i>');
    }
});

// Toggle abstract visibility
function toggleAbstract(abstractId) {
    var abstract = document.getElementById(abstractId);
    if (abstract.style.display === "none") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}