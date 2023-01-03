$('.container-fluid').animate({maxWidth:'100%'} , 1000).animate({height:'100vh'} , 1000 ,function(){
    
    $('h3').slideDown(1000, function(){
        $('.col-md-4').slideDown(1000)
    })
});