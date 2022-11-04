$(document).ready(function() {
    $('.accordion').on('click', '.accordion-control', function () {
        $(this).next().addClass('active3').slideDown(1000); //add class and slide down and show content
        $('.active3').not($(this).next()).removeClass('active3').slideUp(1000); // remove class and slide up and hide content
        $(this).next('.accordion-panel').show(); // if another panel is clicked, repeat lines 3 and 4
        console.log('please work qwq'); // crying for this code to work. 
});
    $('.accordion2').on('click', '.accordion-control2', function () {
        $(this).next().addClass('active2').slideDown(1000); //add class and slide down and show content
        $('.active2').not($(this).next()).removeClass('active2').slideUp(1000); // remove class and slide up and hide content
        $(this).next('.accordion-panel2').show(); // if another panel is clicked, repeat lines 3 and 4
        console.log('please work qwq on acc2'); // crying for this code to work. 
});
});

$('.tab-list').each(function() { // Find lists of tabs
    var $this = $(this); // Store this list
    var $tab = $this.find('li.active'); // Get the active li
    var $link = $tab.find('a'); // Get its link
    var $panel = $($link.attr('href')); // Get active panel
    $this.on('click', '.tab-control', function(e) { // Click tab
        e.preventDefault(); // Prevent link
        var $link = $(this); // Store current link
        var id = this.hash; // Get clicked tab
        if (id && !$link.parent().is('.active')) { // If not active
            $panel.removeClass('active'); // Make panel and
            $tab.removeClass('active'); // tab inactive
            $panel = $(id).addClass('active'); // Make new panel and
            $tab = $link.parent().addClass('active'); // tab active 
        }
});
});