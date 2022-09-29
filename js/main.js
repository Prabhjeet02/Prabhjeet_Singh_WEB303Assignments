// WEB303 Assignment 2
// Created By- Prabhjeet Singh
// Student Number- w0791155 

$(document).ready(function(){
        $("a#prospect").click(function(){
        $("#content").hide().load("prospect.html").slideDown(200); 
        console.log("Prospect loaded");
        });
$("a#convert").click(function(){
$("#content").hide().load("convert.html").slideToggle(1200);
console.log("Covert loaded");
});
    $("a#retain").click(function(){
    $("#content").hide().load("retain.html").slideToggle(2000);
     console.log("Retain loaded");
   });
});