// document ready function

$(document).ready(function () {
    $('#our-story-section').css("display","none");
    $('#health-benifit-section').css("display","none");
    $('#recipe-section').css("display","none");
    $('#contact-us-section').css("display","none");
});

// homepage content link action

$('#home-content-link').click(function (e) { 
    $('#home-section').append($('#home-section').css("display","unset"));
    $('#our-story-section').css("display","none");
    $('#health-benifit-section').css("display","none");
    $('#recipe-section').css("display","none");
    $('#contact-us-section').css("display","none");
    $('#footer').css('top','20rem');
});

// story content link action

$('#story-content-link').click(function (e) { 
   $('#our-story-section').css("display","unset");
   $('#home-section').css("display","none");
   $('#health-benifit-section').css("display","none");
   $('#recipe-section').css("display","none");
   $('#contact-us-section').css("display","none");
   $('#footer').css('top','125rem');
});

// health content link action 

$('#health-content-link').click(function (e) { 
   $('#health-benifit-section').css("display","unset");
   $('#home-section').css("display","none");
   $('#our-story-section').css("display","none");
   $('#recipe-section').css("display","none");
   $('#contact-us-section').css("display","none");
   $('#footer').css('top','97rem');
});


// recipe content link action

$('#recipe-content-link').click(function (e) { 
   $('#recipe-section').css("display","unset");
   $('#home-section').css("display","none");
   $('#our-story-section').css("display","none");
   $('#health-benifit-section').css("display","none");
   $('#contact-us-section').css("display","none");
   $('#footer').css('top','105rem');
});

// contact us content link action 

$('#contact-content-link').click(function (e) { 
   $('#contact-us-section').css("display","unset");
   $('#home-section').css("display","none");
   $('#our-story-section').css("display","none");
   $('#health-benifit-section').css("display","none");
   $('#recipe-section').css("display","none");
   $('#footer').css('top','81rem');
});