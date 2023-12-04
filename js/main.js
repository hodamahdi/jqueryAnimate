$("section").animate({ width: '100%' }, 1000);
$("section").animate({ height: '100vh' }, 1000, () => {
    $('h2').slideDown(1000, () => {
        $('.col-md-4').eq(0).slideDown(1000, () => {
            $('.col-md-4').eq(1).fadeIn(1000, () => {
                $('.col-md-4').eq(2).show(1000);
            })
        })
    })
});




    






























    
    
    
    
