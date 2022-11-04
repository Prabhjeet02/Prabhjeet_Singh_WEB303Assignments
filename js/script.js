$(document).ready(function() {
    $('.accordion').on('click', '.control', function () {
        $(this).next().addClass('active').slideDown(1000); //add class and slide down and show content
        $('.active').not($(this).next()).removeClass('active').slideUp(1000); // remove class and slide up and hide content
        $(this).next('.accordion-panel').show(); // if another panel is clicked, repeat lines 3 and 4
        console.log('please work qwq'); // crying for this code to work. 
});
    $('.accordion2').on('click', '.control2', function () {
        $(this).next().addClass('tab-panel active').slideDown(1000); //add class and slide down and show content
        $('.tab-panel active').not($(this).next()).removeClass('tab-panel active').slideUp(1000); // remove class and slide up and hide content
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