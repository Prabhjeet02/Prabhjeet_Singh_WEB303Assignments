// Name- Prabhjeet Singh
// Student Number- 0791155
$(document).ready(function() {  
       
function ajaxCallFunction(){          
    $.ajax({
        url: 'team.json',                                           
        method: 'GET',                                              
        dataType: 'json',                                           
        beforeSend: function(){                                     
                $('#team').append('<h2 id="load"> Loading... </h2>').hide(3000);  
        },                                                                         
        complete: function(){                                           
            $('#load').hide(3000);                                         
        },      
        success: function(organization) {                                      
            $.getJSON('team.json', function(team) {                     
                    $.each(team.organization, function() {                                                   
                        $('#team').append("<h2>" +this['name']+ "</h2><h5>" +this['position']+ 
                        "</h5><p>" +this['bio']+"</p>").fadeIn(1000);    
                    });
                    console.log(organization);               
            }) 
                setTimeout(function() { 
                    alert('Data has been loaded.');    
                }, 4000);   
            }}
        )};
    function jsonCallFunction(){
        $.getJSON("team.json", function(team) {                     
            $.each(team.organization, function() {                   
                $("#team").append("<h2>"+this['name']+"</h2><h5>"   
                                        +this['position']+ "</h5><p>"
                                        +this['bio']+"</p>");    
            }                             
        )})};
    ajaxCallFunction();

});
