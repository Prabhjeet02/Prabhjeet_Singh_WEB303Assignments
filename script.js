/*
	WEB 303 Assignment 1 - jQuery
	{Prabhjeet Singh}
*/

$(document).ready(function(){
    $('input').on('keyup',function(){
        let percent=$('#percent').val();
        let salary=$('#yearly-salary').val();
        let amount= salary*percent/100;
        
         
        jQuery("span#amount").html('$'+amount.toFixed(2));  
    });
});