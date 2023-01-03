
$('.imageItem').click(function(e){
    let imgSrc = $(e.target).attr('src');
    $('#mainImage').attr('src',imgSrc)
})